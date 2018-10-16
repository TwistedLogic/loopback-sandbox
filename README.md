# Steps to reproduce the issue

* run `npm install`
* run `node .`
* open url `http://localhost:3000/explorer` 
* click on the resource `Website` and expand `/websites/{id}/logins`
* fill parameter `id` with value `1`
* fill parameter filter with value `{"include": "accounts", "fields": ["accounts", "provider_name"]}`
* press enter (or click the button "Try it out!")
* check that the server crashed with the following error:

```
/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include_utils.js:69
  var keyToString = function(key) { return key.toString(); };
                                               ^

TypeError: Cannot read property 'toString' of undefined
    at keyToString (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include_utils.js:69:48)
    at Object.set (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include_utils.js:75:13)
    at Object.buildOneToOneIdentityMapWithOrigKeys (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include_utils.js:26:11)
    at includeHasManySimple (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include.js:594:36)
    at processIncludeItem (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include.js:366:16)
    at /Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include.js:184:5
    at /Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/async/dist/async.js:3110:16
    at eachOfArrayLike (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/async/dist/async.js:1069:9)
    at eachOf (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/async/dist/async.js:1117:5)
    at Object.eachLimit (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/async/dist/async.js:3172:5)
    at Function.Inclusion.include (/Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/include.js:183:9)
    at /Users/antonio/Projects/moneymour/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/connectors/memory.js:510:33
    at _combinedTickCallback (internal/process/next_tick.js:131:7)
    at process._tickCallback (internal/process/next_tick.js:180:9)
```
