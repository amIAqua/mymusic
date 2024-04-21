import { Component, OnInit } from '@angular/core';
import { DashboardStore } from 'app/store/dashboard/dashboard-store';
import { ArtistsListComponent } from 'app/components/dashboard/components/partials/topArtists/partials/artistsList/artists-list.component';

@Component({
    imports: [ArtistsListComponent],
    standalone: true,
    selector: 'app-top-artists',
    templateUrl: './top-artists.component.html',
})
export class TopArtistsComponent implements OnInit {

    public constructor(public dashboardStore: DashboardStore) {}

    ngOnInit(): void {
        this.dashboardStore.loadTopArtists();
    }
}