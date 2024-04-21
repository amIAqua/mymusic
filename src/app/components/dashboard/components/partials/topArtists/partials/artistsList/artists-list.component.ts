import { Component, input } from '@angular/core';

import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';
import {
    ArtistItemComponent
} from 'app/components/dashboard/components/partials/topArtists/partials/artistsList/partials/artistItem/artist-item.component';

@Component({
    imports: [ArtistItemComponent],
    standalone: true,
    selector: 'app-artists-list',
    templateUrl: './artists-list.component.html',
})
export class ArtistsListComponent {
    public artists = input<ITopArtistsItem[]>([]);

}