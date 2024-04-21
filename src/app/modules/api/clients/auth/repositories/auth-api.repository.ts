import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlBuilder } from 'app/modules/url/builders/url.builder';
import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';
import { IAuthorizeApiResponse } from 'app/modules/api/clients/auth/interfaces/authorize/fromApi/IAuthorizeApiResponse';
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

    public redirectToAuthCallback(
        scope: string,
        state: string,
        clientId: string,
        responseType: string,
        redirectUri: string,
    ): void {
        let authRedirectBaseUrl = `${this.appConfigService.getSpotifyAccountsApiUrl()}/authorize?`;

        const redirectUrl = new UrlBuilder(authRedirectBaseUrl)
            .withQueryParameter('scope', scope)
            .withQueryParameter('state', state)
            .withQueryParameter('client_id', clientId)
            .withQueryParameter('redirect_uri', redirectUri)
            .withQueryParameter('response_type', responseType)
            .withQueryParameter('show_dialog', 'true')
            .build();

        window.location.href = redirectUrl;
    }

    public authenticate(
        authCode: string,
        redirectUri: string,
        authGrantType: string,
        credentialsBase64: string,
    ): Observable<IAuthorizeApiResponse> {
        return this.httpClient.post<IAuthorizeApiResponse>(
            `${this.appConfigService.getSpotifyAccountsApiUrl()}/api/token`,
            null,
            {
                params: {
                    code: authCode,
                    redirect_uri: redirectUri,
                    grant_type: authGrantType,
                },
                headers: {
                    Authorization: `Basic ${credentialsBase64}`,
                    'content-type': 'application/x-www-form-urlencoded',
                }
            }
        );
    }
}