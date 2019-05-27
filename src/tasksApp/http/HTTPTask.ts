import HelperHTTP from "../../helpers/HelperHTTP";
import HTTPBase from "../../http/HTTPBase";

class HTTPTask {
    private readonly Endpoint = "/todos";

    private HTTP = new HTTPBase();

    async GetTasks() {
        return await this.HTTP.get(this.Endpoint);
    }
}

export default HTTPTask;