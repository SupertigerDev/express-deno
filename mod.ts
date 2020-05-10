import { Server } from "https://deno.land/std@v0.42.0/http/server.ts";
import Router from './Router.ts'
import Request from './Request.ts'
import Response from './Response.ts'

export class Express extends Router {
    server: Server;

    constructor(server: Server) {
        super("/");
        this.server = server;
        this._setup()
    }
    async _setup() {
        for await (const req of this.server) {
            
            const routes: any = this._filterRoute(req.method, req.url);
            if (!routes || !routes.length){
                req.respond({body: notFound(req.method, req.url), status: 404})
            }

            routes[0](new Request(req), new Response(req));
        }
    }

}

function notFound(method: string, path: string) {
    return `<pre>Cannot ${method} ${path}</pre>`   
}