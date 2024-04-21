export class UrlBuilder {
    public baseUrl: string = '';

    public constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public withQueryParameter(name: string, value: string): UrlBuilder {
        this.baseUrl = `${this.baseUrl}&${name}=${value}`;
        return this;
    }

    public build(): string {
        return this.baseUrl.trim();
    }
}