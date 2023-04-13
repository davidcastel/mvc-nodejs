"use strict";

const PATH = require("path");
const Home = require("./controllers/home.js");
const Note = require("./controllers/note");

module.exports = [
    // we're going to define our routes here
    {
        method: "GET",
        path: "/",
        handler: Home,
        config: {
            description: "Get all the notes available"
        }
    },
    {
      method: "GET",
      path: "/{param}",
      handler: {
        directory: {
          path: Path.join(__dirname, "../static/public")
        }
      },
      config: {
        description: "Provides static resources"
      }
    },
    {
        method: "POST",
        path: "/note",
        handler: Note.create,
        config: {
            description: "Adds a new Note",
            payload: {
                allow: 'multipart/form-data',
            }
        }
    },
    {
        method: "GET",
        path: "/note/{slug}",
        handler: Note.read,
        config: {
            description: "Gets the content of a note"
        }
    },
    {
        method: "PUT",
        path: "/note/{slug}",
        handler: Note.update,
        config: {
            description: "Updates the selected note",
            payload: {
                allow: 'multipart/form-data',
            }
        }
    },
    {
        method: "GET",
        path: "/note/{slug}/delete",
        handler: Note.delete,
        config: {
            description: "Deletes the selected one"
        }
    }
];
