require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  stats: {
    all: undefined, // fallback value for stats options when an option is not defined (has precedence over local webpack defaults)
    assets: false, // Add asset Information
    assetsSort: 'field', // Sort assets by a field, You can reverse the sort with `!field`.
    builtAt: true, // Add build date and time information
    cached: false, // Add information about cached (not built) modules
    cachedAssets: false, // Show cached assets (setting this to `false` only shows emitted files)
    children: true, // Add children information
    chunks: false, // Add chunk information (setting this to `false` allows for a less verbose output)
    chunkModules: false, // Add built modules information to chunk information
    chunkOrigins: false, // Add the origins of chunks and chunk merging info
    chunksSort: 'field', // Sort the chunks by a field, You can reverse the sort with `!field`. Default is `id`.
    colors: true, // `webpack --colors` equivalent
    depth: true, // Display the distance from the entry point for each module
    entrypoints: false, // Display the entry points with the corresponding bundles
    env: true, // Add --env information
    errors: true, // Add errors
    errorDetails: true, // Add details to errors (like resolving log)
    hash: false, // Add the hash of the compilation
    maxModules: 15, // Set the maximum number of modules to be shown
    modules: false, // Add built modules information
    modulesSort: 'field', // Sort the modules by a field, You can reverse the sort with `!field`. Default is `id`.
    moduleTrace: true, // Show dependencies and origin of warnings/errors (since webpack 2.5.0)
    performance: true, // Show performance hint when file size exceeds `performance.maxAssetSize`
    providedExports: false, // Show the exports of the modules
    publicPath: true, // Add public path information
    reasons: true, // Add information about the reasons why modules are included
    source: true, // Add the source code of modules
    timings: true, // Add timing information
    usedExports: false, // Show which exports of a module are used
    version: true, // Add webpack version information
    warnings: true // Add warnings
  }
};
