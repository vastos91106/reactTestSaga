import {EnumHTTPCode} from "../Enum/http/EnumHTTPCode";
import {EnumHTTPMethod} from "../Enum/http/EnumHTTPMethod";
import ModelHTTP from "./HTTPBaseModel";

export default class HTTPBase {
    async get(endpoint: string): Promise<ModelHTTP> {
        return await this.request(endpoint, EnumHTTPMethod.Get);
    }

    private async request(
        endpoint: string,
        method: EnumHTTPMethod,
    ): Promise<ModelHTTP> {

        const url = this.prepareURL(endpoint);
        const headers = this.prepareHeaders();

        const response: Response = await fetch(url, {
            method: EnumHTTPMethod[method],
            mode: 'cors',
            headers: headers,
        });

        return await this.prepareResponse(response);
    }

    private prepareHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', '*');

        return headers;
    }

    private prepareURL(endpoint: string): string {
        let host = 'https://jsonplaceholder.typicode.com';

        return host + endpoint;
    }

    private async prepareResponse(response: Response): Promise<ModelHTTP> {
        let model;
        let json;
        let text;

        try {
            text = await response.text();
            json = !!text ? JSON.parse(text) : {};
        } catch (e) {
            throw new Error(`invalid json ${text}`);
        }

        if (response.status === EnumHTTPCode.Ok) {
            model = new ModelHTTP(EnumHTTPCode.Ok, json);
        } else if (response.status === EnumHTTPCode.Created) {
            model = new ModelHTTP(EnumHTTPCode.Created);
        } else if (response.status === EnumHTTPCode.BadRequest) {
            model = new ModelHTTP(EnumHTTPCode.BadRequest, json);
        } else if (response.status === EnumHTTPCode.InterServerError) {
            document.location.href = '/beta/#/500';
            model = new ModelHTTP(EnumHTTPCode.InterServerError, null);
        } else if (response.status === EnumHTTPCode.NotFound) {
            model = new ModelHTTP(EnumHTTPCode.NotFound);
        } else if (response.status === EnumHTTPCode.UnAuthorized) {
            model = new ModelHTTP(EnumHTTPCode.UnAuthorized);
        } else if (response.status === EnumHTTPCode.Forbidden) {
            model = new ModelHTTP(EnumHTTPCode.Forbidden);
        } else {
            throw new Error('unsupported http code');
        }
        return model;
    }
}