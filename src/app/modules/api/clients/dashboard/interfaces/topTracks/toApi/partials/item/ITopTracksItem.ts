import { ITopArtistsItemImageCommon } from 'app/modules/api/clients/dashboard/interfaces/topArtists/common/images/ITopArtistsItemImageCommon';
import { ITopArtistsItemFollowersCommon } from 'app/modules/api/clients/dashboard/interfaces/topArtists/common/followers/ITopArtistsItemFollowersCommon';
import { ITopArtistsItemExternalUrls } from 'app/modules/api/clients/dashboard/interfaces/topArtists/toApi/partials/item/partials/externalUrls/ITopArtistsItemExternalUrls';

export interface ITopTracksItem {
    // genres?: string[];
    // href?: string;
    id: string;
    // externalUrls?: ITopArtistsItemExternalUrls;
    // followers?: ITopArtistsItemFollowersCommon;
    // images?: ITopArtistsItemImageCommon[];
    name: string;
    // popularity?: number;
    // type?: string;
    // uri?: string;
}