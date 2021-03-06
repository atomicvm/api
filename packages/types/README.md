# @astar-network/types

[![NPM](https://nodei.co/npm/@astar-network/types.png?downloads=true)](https://www.npmjs.com/package/@astar-network/types)

This package is meant to be used with the [@polakdot-js/api](https://github.com/polkadot-js/api) library.

## Available Types

* shidenDefinitions (Kusama Parachain)
* shibuyaDefinitions (Shiden Testnet)
* dustyDefinitions [deprecated]
* plasmDefinitions [deprecated] 

## Usage

### Importing Types

You can use the `ApiOptions` interface to set the node configuration before initializing the Polkadot API instance.

```ts
import { WsProvider, ApiPromise } from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';
import { shidenDefinitions} from '@astar-network/types';

// using ApiOptions interface
const options: ApiOptions = {
    provider: new WsProvider('ws://localhost:9944'),
    types: {
        ...shidenDefinitions,
    },
};

const api = new ApiRx(options);
```

Or, you can pass the node types directly when initializing the API instance.

```ts
import { WsProvider, ApiPromise } from '@polkadot/api';
import { shidenDefinitions} from '@astar-network/types';

// using the ApiPromise class
const api = await ApiPromise.create({
    provider: new WsProvider('ws://localhost:9944'),
    types: {
        ...shidenDefinitions,
    }
});

await api.isReady;
```

Finally, you can register the types after the API instance has already been created.

```ts
import { shidenDefinitions} from '@astar-network/types';

// already initialized api instance
await api.registerTypes(shidenDefinitions);
```

### Generating Types

First, you'll have to manually define chain specific types for each pallets from the `src/interfaces/<module-name>/definitions.ts` file.

The script should export an object that looks something like this:

```ts
export default {
    types: {
        StructA: {
            id: 'u8',
            value_hash: 'H256',
        },
        TypeA: 'H256',
        ...
    },
};
```
