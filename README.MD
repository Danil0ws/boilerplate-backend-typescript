# Create Module Node.js

Create Module Node.js with TypeScript and Test(Jest).

Create Module Node.js works on macOS, Windows, and Linux.
If something doesn’t work, please [file an issue](https://github.com/Danil0ws/base-modules-nodejs/issues/new).
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/Danil0ws/base-modules-nodejs/discussions).

## Quick Overview

```sh
git clone https://github.com/Danil0ws/base-modules-nodejs.git my-modules
cd my-modules
npm install
```


### Get Started Immediately

You **don’t** need to install or configure tools like TypeScript or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new module, you may choose one of the following methods:

### npm

```sh
git clone https://github.com/Danil0ws/base-modules-nodejs.git my-modules
cd my-modules
npm install
```

### Yarn

```sh
git clone https://github.com/Danil0ws/base-modules-nodejs.git my-modules
cd my-modules
yarn install
```


It will create a directory called `my-modules` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:


No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm dev` or `yarn dev`

Runs the app in development mode.<br>

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.


### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.


### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Module in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

- [@Danil0Ws](https://github.com/Danil0Ws)

## License

Create Module Nodejs is open source software [licensed as MIT](https://github.com/Danil0ws/base-modules-nodejs/blob/master/LICENSE). The Create Module Node.js  logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
