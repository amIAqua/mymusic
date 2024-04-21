import { ITopTracksItem } from 'app/modules/api/clients/dashboard/interfaces/topTracks/toApi/partials/item/ITopTracksItem';

export interface ITopTracks {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string,
    total: number;
    items: ITopTracksItem[];
}