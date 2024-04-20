import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class AppConfigService {

    public getSpotifyApiUrl(): string {
        return environment.SPOTIFY_API_URL;
    }

    public getSpotifyAccountsApiUrl(): string {
        return environment.SPOTIFY_ACCOUNTS_API_URL;
    }

    public getSpotifyClientId(): string {
        return environment.SPOTIFY_CLIENT_ID;
    }

    public getSpotifyClientSecret(): string {
        return environment.SPOTIFY_CLIENT_SECRET;
    }

    public getSpotifyAuthGrantType(): string {
        return environment.SPOTIFY_AUTH_GRANT_TYPE;
    }
}