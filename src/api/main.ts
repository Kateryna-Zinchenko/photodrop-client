import HttpClient from "./http-client";

export interface VerificationResponse {
    message: string
}

class Main extends HttpClient {
    private static instanceCached: Main;

    private constructor() {
        super(process.env.REACT_APP_BASE_URL);
    }

    static getInstance = () => {
        if (!Main.instanceCached) {
            Main.instanceCached = new Main();
        }

        return Main.instanceCached;
    };

    public verificationCode = (data: {phone: any}) =>
        this.instance.post<VerificationResponse>("/auth/send-code", data);

    public verificationUser = (data: {phone: any, code: string}) =>
        this.instance.post<any>("/auth/verify-user", data);

}

export default Main;