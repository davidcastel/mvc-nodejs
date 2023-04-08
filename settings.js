// This will load our .ENV file andd add the values to process.env

require("dotenv").config({ silent: true });

module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",

    // Environment-Dependent Settings
    development: {
        db: {
            dialect: "sqlite3",
            storage: ":memory:"
        }
    },
    production: {
        db: {
            dialect: "sqlite3",
            storage: "db/database.sqlite3"
        }
    }
};
