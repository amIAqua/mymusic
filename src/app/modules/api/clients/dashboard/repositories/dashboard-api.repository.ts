import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookiesService } from 'app/modules/cookies/services/cookies.service';
import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';
import { ITopArtistsApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/ITopArtistsApiResponse';

@Injectable({
    providedIn: 'root',
})
export class DashboardApiRepository {

    public constructor(
        private readonly httpClient: HttpClient,
        private readonly cookiesService: CookiesService,
        private readonly appConfigService: AppConfigService,
    ) {}

    public loadUserTopItemsByType<T>(
        type: 'artists' | 'tracks',
        limit?: number,
        offset?: number,
        timeRange?: string,
    ): Observable<T> {
        return this.httpClient.get<T>(
            `${this.appConfigService.getSpotifyApiUrl()}/me/top/${type}`,
            {
                params: {
                    ...(!!limit && { limit }),
                    ...(!!offset && { offset }),
                    ...(!!timeRange && { time_range: timeRange }),
                },
                headers: {
                    Authorization: `
                        Bearer ${this.cookiesService.getCookie('access_token')}
                    `,
                }
            },
        );
    }
}