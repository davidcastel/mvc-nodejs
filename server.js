"use strict";

// Import the index.js file inside the models dir
const Models = require("./lib/models/");
const Routes = require("./lib/routes");
const Hapi = require("@hapi/hapi");
const Settings = require("./settings");
const Path = require("path");

const init = async () => {
  const server = new Hapi.Server({ port: Settings.port });
  
  await server.register([require("@hapi/vision")]), require("@hapi/inert");

  server.views({
    engines: { pug: require("pug") },
    path: Path.join(__dirname, "lib/views"),
    compileOptions: {
      pretty:false
    },
    isCached: Settings.env === "production"
  });

  // Add routes
  server.route(Routes);

  await Models.sequelize.sync();

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
