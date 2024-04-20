import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';

import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';
import { AuthApiRepository } from 'app/modules/api/clients/auth/repositories/auth-api.repository';
import { IRefreshToken } from 'app/modules/api/clients/auth/interfaces/refreshToken/IRefreshToken';
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
}