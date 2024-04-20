import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookiesService } from 'app/modules/cookies/services/cookies.service';
import { AppConfigService } from 'app/modules/appConfig/services/app-config.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardApiRepository {

    public constructor(
        private readonly httpClient: HttpClient,
        private readonly cookiesService: CookiesService,
        private readonly appConfigService: AppConfigService,
    ) {}

    public loadUserTopArtists(
        limit?: number, offset?: number, timeRange?: string,
    ): Observable<any> {
        return this.httpClient.get<any>(
            `${this.appConfigService.getSpotifyApiUrl()}/me/top/artists`,
            {
                params: {
                    ...(!!limit && { limit }),
                    ...(!!offset && { offset }),
                    ...(!!timeRange && { time_range: timeRange }),
                },
                headers: {
                    Authorization: `
                        Bearer ${this.cookiesService.getCookie('oauth_cookie')}
                    `,
                }
            },
        );
    }
}