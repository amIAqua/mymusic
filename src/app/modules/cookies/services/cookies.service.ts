import { Injectable, inject } from '@angular/core';
import { CookieService as NgxCookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class CookiesService {
    private cookieService = inject(NgxCookieService);

    public setCookie(name: string, value: string): void {
        this.cookieService.set(name, value);
    }

    public getCookie(name: string): string {
        return this.cookieService.get(name);
    }
}