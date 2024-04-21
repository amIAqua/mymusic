export interface IAuthorize {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    scope: string;
    refreshToken: string;
}