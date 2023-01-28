import { npmPublish } from "./npm-publish.mjs";
import { npmVersion } from "./npm-version.mjs";

await npmVersion('patch', './packages/one');
await npmPublish('./packages/one')
await npmVersion('patch', './packages/two');
await npmPublish('./packages/two')
