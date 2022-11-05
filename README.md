# Slate v0 starter

### [Official documentation](https://shopify.github.io/slate.shopify.com/docs/0.14.0/)

### Basic commands

**npm install** - Once at the start of the project

**slate start** - Performs a full deploy of your theme and starts the watchers (see slate watch).

**slate watch** - Sets up the watchers for all theme assets and deploys the compiled versions to your specified environment (default is development). Also opens a Browsersync window with live reloading after changing and saving a file.

**slate zip** - performs a fresh build of your theme and zips it into a file that’s compatible with Shopify, that you can upload a ZIP-archive to the your store.

#### Theme download

Slate by default, not have a command for download themes from Shopify store.
But, you can use default [Shopify Theme Kit](https://shopify.github.io/themekit/)

**theme download** - will download the entire theme

#### Options

*-e, --env* - specific environment;
For example (**theme download -e staging**, **slate watch -e staging**).

*-d* - select a folder, when you will download the theme files.
For example (**theme download -d src**).
