import {
    ITopArtistsItemImageCommon
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/common/images/ITopArtistsItemImageCommon';
import {
    ITopArtistsItemFollowersCommon
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/common/followers/ITopArtistsItemFollowersCommon';
import {
    ITopArtistsItemExternalUrlsApiResponse
} from 'app/modules/api/clients/dashboard/interfaces/topArtists/fromApi/partials/item/partials/externalUrls/ITopArtistsItemExternalUrlsApiResponse';

export interface ITopArtistsItemApiResponse {
    external_urls?: ITopArtistsItemExternalUrlsApiResponse;
    followers?: ITopArtistsItemFollowersCommon;
    genres?: string[];
    href?: string;
    id: string;
    images?: ITopArtistsItemImageCommon[];
    name: string;
    popularity?: number;
    type?: string;
    uri?: string;
}