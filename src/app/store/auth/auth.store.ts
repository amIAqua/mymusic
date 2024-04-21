import { Injectable, computed, signal } from '@angular/core';
import { IAuthorize } from 'app/modules/api/clients/auth/interfaces/authorize/toApi/IAuthorize';
import { AuthApiService } from 'app/modules/api/clients/auth/services/auth-api.service';
import { CookiesService } from 'app/modules/cookies/services/cookies.service';

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    public authorizeData = signal<IAuthorize | null>(null);
    public accessToken = computed(() => this.authorizeData()?.accessToken);

    public constructor(
        private readonly authApiService: AuthApiService,
        private readonly cookieService: CookiesService,
    ) {}

    public redirectToAuthCallback(): void {
        this.authApiService.redirectToAuthCallback();
    }

    public authenticate(authCode: string): void {
        this.authApiService.authenticate(authCode).subscribe(data => {
            this.authorizeData.set(data);

            this.cookieService.setCookie('access_token', data.accessToken);
            this.cookieService.setCookie('refresh_token', data.refreshToken);
        });
    }
}