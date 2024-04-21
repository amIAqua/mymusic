import { Component, input } from '@angular/core';
import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';

@Component({
    standalone: true,
    selector: 'app-artists-list-item',
    templateUrl: './artists-list-item.component.html',
})
export class ArtistsListItemComponent {
    public artist = input<ITopArtistsItem>();

}