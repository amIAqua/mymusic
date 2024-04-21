import { Injectable } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';
import { Buffer } from 'buffer';

import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';
import { AuthApiRepository } from 'app/modules/api/clients/auth/repositories/auth-api.repository';
import { IAuthorize } from 'app/modules/api/clients/auth/interfaces/authorize/toApi/IAuthorize';
import { IRefreshToken } from 'app/modules/api/clients/auth/interfaces/refreshToken/toApi/IRefreshToken';
import { mapIAuthorizeApiResponseToIAuthorize } from 'app/modules/api/clients/auth/mappers/mapIAuthorizeApiResponseToIAuthorize';
import { mapIRefreshTokenApiResponseToIRefreshToken } from 'app/modules/api/clients/auth/mappers/mapIRefreshTokenApiResponseToIRefreshToken';

@Injectable({
    providedIn: 'root',
})
export class AuthApiService {

    public constructor(
        private readonly authApiRepository: AuthApiRepository,
        private readonly appConfigService: AppConfigService,
    ) {}

    public refreshAccessToken(): Observable<IRefreshToken> {
        const clientId = this.appConfigService.getSpotifyClientId();
        const clientSecret = this.appConfigService.getSpotifyClientSecret();
        const authGrantType = this.appConfigService.getSpotifyAuthGrantType();

        try {
            return this.authApiRepository.refreshAccessToken(
                clientId,
                clientSecret,
                authGrantType,
            ).pipe(
                take(1),
                map(mapIRefreshTokenApiResponseToIRefreshToken)
            )
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public redirectToAuthCallback(): void {
        const redirectUri = this.appConfigService.getSpotifyAuthRedirectUri();
        const clientId = this.appConfigService.getSpotifyClientId();
        const scope = this.appConfigService.getSpotifyAuthDataScopes();
        const responseType = 'code';
        const state = 'state';

        try {
            this.authApiRepository.redirectToAuthCallback(
                scope,
                state,
                clientId,
                responseType,
                redirectUri,
            )
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public authenticate(authCode: string): Observable<IAuthorize> {
        const clientId = this.appConfigService.getSpotifyClientId();
        const clientSecret = this.appConfigService.getSpotifyClientSecret();
        const authGrantType = this.appConfigService.getSpotifyAuthGrantType();
        const redirectUri = this.appConfigService.getSpotifyAuthRedirectUri();
        const credentialsBase64 = Buffer.from(clientId + ':' + clientSecret).toString('base64');

        try {
            return this.authApiRepository.authenticate(
                authCode,
                redirectUri,
                authGrantType,
                credentialsBase64,
            ).pipe(
                take(1),
                map(mapIAuthorizeApiResponseToIAuthorize)
            )
        } catch (error: any) {
            throw new Error(error);
        }
    }
}