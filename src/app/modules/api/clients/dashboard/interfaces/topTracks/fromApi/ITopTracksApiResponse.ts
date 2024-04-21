import { ITopTracksItemApiResponse } from 'app/modules/api/clients/dashboard/interfaces/topTracks/fromApi/partials/item/ITopTracksItemApiResponse';

export interface ITopTracksApiResponse {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string,
    total: number;
    items: ITopTracksItemApiResponse[];
}