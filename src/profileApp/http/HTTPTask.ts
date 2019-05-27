import HelperHTTP from "../../helpers/HelperHTTP";
import HTTPBase from "../../http/HTTPBase";

class HTTPTask {
    private readonly Endpoint = "/todos";

    private HTTP = new HTTPBase();

    async GetTasksByUser(userId: number = 1) {
        const postFix = `/?userId=${userId}`;
        const url = HelperHTTP.joinURL(this.Endpoint, postFix);

        return await this.HTTP.get(url);
    }

}

export default HTTPTask;