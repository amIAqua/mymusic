import { Component } from '@angular/core';

import { TopArtistsComponent } from 'app/components/dashboard/components/partials/topArtists/top-artists.component';

@Component({
    imports: [TopArtistsComponent],
    standalone: true,
    selector: 'app-dashboard-main',
    templateUrl: './main.component.html',
})
export class DashboardMainComponent {

}