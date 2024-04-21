import { Component, input } from '@angular/core';

import {
    TracksListItemComponent
} from 'app/components/dashboard/components/partials/topTracks/partials/tracksList/partials/listItem/tracks-list-item.component';
import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';


@Component({
    imports: [TracksListItemComponent],
    standalone: true,
    selector: 'app-tracks-list',
    templateUrl: './tracks-list.component.html',
})
export class TracksListComponent {
    public tracks = input<ITopArtistsItem[]>([]);

}