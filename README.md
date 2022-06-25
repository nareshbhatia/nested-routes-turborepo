# Nested Routes | Turborepo

Evaluation of nested routes using the following frameworks.

1. [React](https://reactjs.org/)
2. [Next.js](https://nextjs.org/)
3. [Remix](https://remix.run/)

This version uses Turborepo. Previous version is
[here](https://github.com/nareshbhatia/nested-routes).

## Building Nested Routes

### Development Build

```shell
# Run ci in the root directory to install dependencies
npm ci

# Run a full build to make sure libraries are available to the apps
npm run build

# Run the apps
npm run dev
```

Open browser windows at each of the following URLs to see the respective demo
apps:

1. http://localhost:3000/: Bullsfirst | React
2. http://localhost:3001/: Bullsfirst | Next.js
3. http://localhost:3002/: Bullsfirst | Remix

> Note: Do not run `npm install` or `npm ci` in any of the subdirectories. It
> will break the build. There should be only one `package-lock.json` file in the
> entire repo (at the root).

### Production Build

To build all packages and apps for production, run the following command:

```shell
npm ci
npm run build
```

### Clean Build

Removes all build artifacts and performs a clean build.

```shell
npm run clean
npm ci
npm run dev
```

For an "aggressive" clean build, add one more step as shown below. This will
build the lock file from scratch.

```shell
npm run clean
rm package-lock.json
npm install
npm run dev
```

## Code Formatting

```shell
npm run format
```
