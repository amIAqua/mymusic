import { IRefreshTokenApiResponse } from 'app/modules/api/clients/auth/interfaces/refreshToken/fromApi/IRefreshTokenApiResponse';
import { IRefreshToken } from 'app/modules/api/clients/auth/interfaces/refreshToken/toApi/IRefreshToken';

export const mapIRefreshTokenApiResponseToIRefreshToken = (data: IRefreshTokenApiResponse): IRefreshToken => ({
    accessToken: data.access_token,
    tokenType: data.token_type,
    expiresIn: data.expires_in,
});