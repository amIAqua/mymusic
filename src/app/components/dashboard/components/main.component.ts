import { Component } from '@angular/core';

import { TopArtistsComponent } from 'app/components/dashboard/components/partials/topArtists/top-artists.component';
import { TopTracksComponent } from 'app/components/dashboard/components/partials/topTracks/top-tracks.component';

@Component({
    imports: [
        TopArtistsComponent,
        TopTracksComponent,
    ],
    standalone: true,
    selector: 'app-dashboard-main',
    templateUrl: './main.component.html',
})
export class DashboardMainComponent {

}