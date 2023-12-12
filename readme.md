## Links

https://www.npmjs.com/package/@cyntler/react-doc-viewer

## Using monorepos

https://ruanmartinelli.com/posts/npm-7-workspaces-1/

## How monorepos are working actually?

- Basically here we are having two workspaces frontend and backend
- When we are doing `npm install` the npm is installing the common packages of all the workspaces in the root folder. Then other packages such as react is installed in the frontend and express in the backend

```
root(.)
├── node_modules
│   ├── lodash # `lodash` is installed in the root `node_modules/`
│   ├── package-a # package-a is symlinked
│   └── package-b # package-b is symlinked
├── package.json
└── packages
    └── # ...
```

## Basic Commands for understanding

```
# Install `lodash` on `package-a`
npm install lodash --workspace package-a

# Install `tap` on `package-b` as a dev dependency
npm install tap --workspace package-b --save-dev

# Install `package-a` on `package-b`
npm install package-a --workspace package-b

# Install `eslint` in all packages
npm install eslint --workspaces
```
