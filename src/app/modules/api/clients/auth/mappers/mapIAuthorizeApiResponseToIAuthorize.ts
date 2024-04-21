import { IAuthorizeApiResponse } from 'app/modules/api/clients/auth/interfaces/authorize/fromApi/IAuthorizeApiResponse';
import { IAuthorize } from 'app/modules/api/clients/auth/interfaces/authorize/toApi/IAuthorize';

export const mapIAuthorizeApiResponseToIAuthorize = (data: IAuthorizeApiResponse): IAuthorize => ({
    scope: data.scope,
    tokenType: data.token_type,
    expiresIn: data.expires_in,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
});