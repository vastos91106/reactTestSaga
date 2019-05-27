import HelperHTTP from "../../helpers/HelperHTTP";
import HTTPBase from "../../http/HTTPBase";

class HTTPUser {
    private readonly Endpoint = "/users";

    private HTTP = new HTTPBase();


    async GetById(userId: number = 1) {
        const postFix = `/?id=${userId}`;
        const url = HelperHTTP.joinURL(this.Endpoint, postFix);

        return await this.HTTP.get(url);
    }
}

export default HTTPUser;