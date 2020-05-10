import {Express} from 'https://raw.githubusercontent.com/supertiger1234/express-deno/master/mod.ts'
import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";


const s = serve({ port: 8080 });
const app = new Express(s);
console.log("Serving on port *8080");


app.get("/api/users", (req, res) => {
    res.json({user: "Supertiger"})
})
