import { Injectable, computed, signal } from '@angular/core';
import { DashboardApiService } from 'app/modules/api/clients/dashboard/services/dashboard-api.service';
import { ITopArtistsItem } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';
import { ITopTracksItem } from 'app/modules/api/clients/dashboard/interfaces/topTracks/toApi/partials/item/ITopTracksItem';

@Injectable({
    providedIn: 'root'
})
export class DashboardStore {
    public topArtists = signal<ITopArtistsItem[]>([]);
    public topTracks = signal<ITopTracksItem[]>([]);

    public constructor(
        private readonly dashboardApiService: DashboardApiService,
    ) {}

    public loadTopArtists(): void {
        this.dashboardApiService.loadUserTopArtists(10, 0).subscribe((data) => {
            this.topArtists.set(data.items);
        });
    }

    public loadTopTracks(): void {
        this.dashboardApiService.loadUserTopTracks(10, 0).subscribe((data) => {
            this.topTracks.set(data.items);
        });
    }
}
