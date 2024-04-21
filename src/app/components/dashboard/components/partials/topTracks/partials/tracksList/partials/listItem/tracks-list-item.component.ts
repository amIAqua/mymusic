import { Component, input } from '@angular/core';
import {
    ITopArtistsItem
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';

@Component({
    standalone: true,
    selector: 'app-tracks-list-item',
    templateUrl: './tracks-list-item.component.html',
})
export class TracksListItemComponent {
    public track = input<ITopArtistsItem>();

}