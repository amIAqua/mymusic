import { Injectable, computed, signal } from '@angular/core';
import { IRefreshToken } from 'app/modules/api/clients/auth/interfaces/refreshToken/IRefreshToken';
import { AuthApiService } from 'app/modules/api/clients/auth/services/auth-api.service';
import { CookiesService } from 'app/modules/cookies/services/cookies.service';

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    public tokenData = signal<IRefreshToken | null>(null);

    public accessToken = computed(() => this.tokenData()?.accessToken);

    public constructor(
        private readonly authApiService: AuthApiService,
        private readonly cookiesService: CookiesService,
    ) {}

    public refreshAccessToken(): void {
        this.authApiService.refreshAccessToken().subscribe((data) => {
            this.cookiesService.setCookie('oauth_cookie', data.accessToken);
            this.tokenData.set(data);
        });
    }
}