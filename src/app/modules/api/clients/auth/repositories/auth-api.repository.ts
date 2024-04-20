import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';
import { IRefreshTokenApiResponse } from 'app/modules/api/clients/auth/interfaces/refreshToken/fromApi/IRefreshTokenApiResponse';

@Injectable({
    providedIn: 'root',
})
export class AuthApiRepository {

    public constructor(
        private readonly httpClient: HttpClient,
        private readonly appConfigService: AppConfigService,
    ) {}

    public refreshAccessToken(
        clientId: string,
        clientSecret: string,
        authGrantType: string,
    ): Observable<IRefreshTokenApiResponse> {
        return this.httpClient.post<IRefreshTokenApiResponse>(
            `${this.appConfigService.getSpotifyAccountsApiUrl()}/api/token`,
            null,
            {
                params: {
                    grant_type: authGrantType,
                    client_id: clientId,
                    client_secret: clientSecret,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
    }
}