import { Component, OnInit } from '@angular/core';
import { DashboardStore } from 'app/store/dashboard/dashboard-store';
import {
    TracksListComponent
} from 'app/components/dashboard/components/partials/topTracks/partials/tracksList/tracks-list.component';

@Component({
    imports: [TracksListComponent],
    standalone: true,
    selector: 'app-top-tracks',
    templateUrl: './top-tracks.component.html',
})
export class TopTracksComponent implements OnInit {

    public constructor(public dashboardStore: DashboardStore) {}

    ngOnInit(): void {
        this.dashboardStore.loadTopTracks();
    }
}