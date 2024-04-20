import { ITopArtistsItemApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/partials/item/ITopArtistsItemApiResponse';

export interface ITopArtistsApiResponse {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string,
    total: number;
    items: ITopArtistsItemApiResponse[];
}