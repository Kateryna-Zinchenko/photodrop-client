import HttpClientProtected from './http-client-protected';

export default class MainProtected extends HttpClientProtected {
    private static instanceCached: MainProtected;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!MainProtected.instanceCached) {
            MainProtected.instanceCached = new MainProtected();
        }

        return MainProtected.instanceCached;
    };

    public setAvatar = (data: {contentType: string}) =>
        this.instance.post<any>(`/profile/avatar/s3url`, data);

    public updateAvatar = (data: {key: string}) =>
        this.instance.put<any>(`/profile/avatar/`, data);

    public getUser = () =>
        this.instance.get<any>(`/profile`);

    public changeName = (data: {fullName: string}) =>
        this.instance.put<any>(`/profile/name`, data);

    public getGallery = () =>
        this.instance.get<any>(`/gallery`);

    public getAlbum = (albumId: string) => {
        this.instance.get<any>(`/gallery/album`, {
            params: {
                id: albumId
            }
        })
    }
}