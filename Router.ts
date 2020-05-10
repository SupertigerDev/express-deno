import Request from './Request.ts'
import Response from './Response.ts'

export default class Router  {
    path: string;
    routes: any;
    constructor(path: string) {
        this.path = path
        this.routes = {}
    }
    _setListener(type: string, path: string, cb: any) {
        type = type.toUpperCase();
        if (this.routes[type]) {
            this.routes[type].push({path, cb})
        } else {
            this.routes[type] = [{path, cb}];
        }
    }
    _filterRoute(method: string, url: string) {
        if (!this.routes[method]) {
            return undefined;
        }
        const routesArr = this.routes[method];
        const routes: any[] = []
        for (let index = 0; index < routesArr.length; index++) {
            const route = routesArr[index];
            if (`${this.path !== "/" ? this.path : ''}${route.path}` === url) {
                routes.push(route.cb);
            }
        }
        return routes;
    }
    use(path: string, cb:(req: Request, res: Response) => void) {

    }
    get(path: string, cb:(req: Request, res: Response) => void) {
        this._setListener("get", path, cb)
    }
    post(path: string, cb:(req: Request, res: Response) => void) {
        this._setListener("post", path, cb)
    }
}


