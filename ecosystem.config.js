module.exports = {
    apps: [
        {
            name: "main-app",
            script: "lib/main.js",
            instances: 1,
            env: {
                NODE_ENV: "production",
            },
        },
        {
            name: "graphql-server",
            script: "node_modules/.bin/squid-graphql-server",
            instances: 1,
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
