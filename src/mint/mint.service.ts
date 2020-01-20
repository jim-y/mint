export class MintService {
    private _links: any = {};

    public addLink(key: string, value: any) {
        if (this._links[key] != null) throw new Error('Link already occupied');
        this._links[key] = value;
    }

    public getLink(key: string) {
        return this._links[key];
    }
}