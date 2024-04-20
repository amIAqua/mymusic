import { Injectable, computed, signal } from '@angular/core';
import { DashboardApiService } from 'app/modules/api/clients/dashboard/services/dashboard-api.service';
import { ITopArtists } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/ITopArtists';

@Injectable({
    providedIn: 'root'
})
export class DashboardStore {
    public topArtistsData = signal<ITopArtists | null>(null);
    public topArtists = computed(() => this.topArtistsData()?.items);

    public constructor(
        private readonly dashboardApiService: DashboardApiService,
    ) {}

    public loadTopArtists(): void {
        this.dashboardApiService.loadUserTopArtists(10, 0).subscribe((data) => {
            console.log(data);
        });
    }
}
