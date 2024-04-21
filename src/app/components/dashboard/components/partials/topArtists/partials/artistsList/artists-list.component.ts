import { Component, input } from '@angular/core';

import {
    ArtistsListItemComponent
} from 'app/components/dashboard/components/partials/topArtists/partials/artistsList/partials/listItem/artists-list-item.component';
import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';


@Component({
    imports: [ArtistsListItemComponent],
    standalone: true,
    selector: 'app-artists-list',
    templateUrl: './artists-list.component.html',
})
export class ArtistsListComponent {
    public artists = input<ITopArtistsItem[]>([]);

}