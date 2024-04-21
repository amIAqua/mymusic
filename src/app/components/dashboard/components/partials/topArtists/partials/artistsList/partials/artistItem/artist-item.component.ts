import { Component, input } from '@angular/core';

import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';

@Component({
    standalone: true,
    selector: 'app-artists-item',
    templateUrl: './artist-item.component.html',
})
export class ArtistItemComponent {
    public artist = input<ITopArtistsItem>();

}