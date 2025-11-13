const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "org",
        projectName: "app-react",
        webpackConfigEnv,
        argv,
        outputSystemJS: false, // ESM output
    });

    return merge(defaultConfig, {
        output: {
            ...defaultConfig.output,
            filename: "org-app-react.js", // what your import map points to
            publicPath: "/"
            // DO NOT set library.type/module here – singleSpaDefaults handles it for ESM
        },
        // IMPORTANT: remove externals / externalsType if you had added them before
        externals: {},
        externalsType: "var",

        devServer: {
            ...defaultConfig.devServer,
            port: 8500,
            headers: { "Access-Control-Allow-Origin": "*" },
            allowedHosts: "all",
            historyApiFallback: true,
            static: { directory: path.resolve(__dirname, "dist") },
        },
    });
};
