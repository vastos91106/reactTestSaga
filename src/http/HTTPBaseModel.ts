import {EnumHTTPCode} from "../Enum/http/EnumHTTPCode";

class ModelHTTP {
    readonly Code: EnumHTTPCode;
    readonly Model: any;

    constructor(code: EnumHTTPCode, model: any = null) {
        this.Code = code;
        this.Model = model;
    }
}

export default ModelHTTP;