import {AppsApi, MachinesApi, VolumesApi, Configuration} from "./flyfetch";
import {$} from "bun";

// get fly token	
let token_bytes = await $`flyctl auth token`
Bun.env.FLY_API_TOKEN = new TextDecoder("utf-8").decode(token_bytes.stdout)
Bun.env.FLY_ORG_SLUG = "personal"

let config = new Configuration({
	headers : {
		Authorization : `Bearer ${Bun.env.FLY_API_TOKEN}`
	}
});

// root objects
let apps = new AppsApi(config);
let machines = new MachinesApi(config);
let volumes = new VolumesApi(config);

// get apps for an org
console.log(await apps.appsList({
	orgSlug : Bun.env.FLY_ORG_SLUG
}))