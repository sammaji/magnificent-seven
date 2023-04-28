## Installation

First clone this repository. You can also fork this repository and then clone the forked one.

```gitattributes
git clone https://github.com/samyabrata-maji/magnificent-seven.git
```

Make sure you have Node Package Manager (npm) installed. The latest stable version of Node Js is recommended. After installing node, you need to install all the required dependencies.
```gitattributes
# for installing yarn
# skip if yarn is already installed
npm i --D yarn

# installing required dependencies
# inside the cloned subdirectory
cd experiments-website
yarn install
```

Once you are done with installation, you can start your development server using the following command.
```gitattributes
# starts a development server
# defaults to http://localhost:5173/
yarn dev

# creates a production build
# and serves it a local port
# defaults to http://localhost:4173/
yarn build
yarn serve
```
