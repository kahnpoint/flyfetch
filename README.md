# flyfetch

Unofficial Fly.io Typescript Client

## Installation
```bash
npm install flyfetch
```

## Usage (Bun)
```typescript
import {AppsApi, MachinesApi, VolumesApi, Configuration} from "flyfetch";
import {$} from "bun";

// get fly token	
let token_bytes = await $`flyctl auth token`
Bun.env.FLY_API_TOKEN = new TextDecoder("utf-8").decode(token_bytes.stdout)

// create a configuration
let config = new Configuration({
	headers : {
		Authorization : `Bearer ${Bun.env.FLY_API_TOKEN}`
	}
});

// root objects
let apps = new AppsApi(config);
let machines = new MachinesApi(config);
let volumes = new VolumesApi(config);

// usage - get apps for an org
console.log(await apps.appsList({
	orgSlug: "personal"
}))
```

## Development 
To generate a new flyfetch client:
- Install `openapi-generator-cli` with `bash .sh/install-openapi-generator-cli.sh`
- Update `machines-openapi.json` with the spec from [here],(https://docs.machines.dev/#description/introduction) 
- Update `package.json` with your data
- To generate, run:
	```bash
	bash .sh/generate.sh
	```
- To test, run:
	```bash
	bash .sh/test.sh
	```
- To publish, run:
	```bash
	bash .sh/publish.sh
	```