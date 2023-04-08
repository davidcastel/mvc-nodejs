"use strict";

const PATH = require("path");
const Home = require("./controllers/home.js");

module.export = [
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
        method: "POST",
        path: "/note",
        handler: (request, h) => {
            return "New Note";
        },
        config: {
            description: "Adds a new Note"
        }
    },
    {
        method: "GET",
        path: "/note/{slug}",
        handler: (request, h) => {
            return "This is a note";
        },
        config: {
            description: "Gets the content of a note"
        }
    },
    {
        method: "PUT",
        path: "/note/{slug}",
        handler: (request, h) => {
            return "Edit a note";
        },
        config: {
            description: "Updates the selected note"
        }
    },
    {
        method: "GET",
        path: "/note/{slug}/delete",
        handler: (request, h) => {
            return "This note no longer exists";
        },
        config: {
            description: "Deletes the selected one"
        }
    }
];
