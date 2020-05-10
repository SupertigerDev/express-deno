import { ServerRequest } from "https://deno.land/std@v0.42.0/http/server.ts";

export default class Response {
    _status: number;
    req: ServerRequest;
    constructor(req: ServerRequest) {
        this.req = req;
        this._status = 200 
    }
    send(body: string) {
        this.req.respond({body, status: this._status})
    }
    json(json: any) {
        this.send(JSON.stringify(json));
    }
    status(code: number) {
        this._status = code;
        return this;
    }
}