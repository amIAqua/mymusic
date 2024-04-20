import { ITopArtistsItem } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/ITopArtistsItem';

export interface ITopArtists {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string,
    total: number;
    items: ITopArtistsItem[];
}