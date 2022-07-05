const functions = require("firebase-functions");
const textJson = require("./data/test.json");
const newItems = require("./data/newItems.json");
const authors = require("./data/authors.json");
const explore = require("./data/explore.json");
const hotCollections = require("./data/hotCollections.json");

exports.authorsAll = functions.https.onRequest((data, context) => {
  context.send(textJson);
});

exports.authors = functions.https.onRequest((data, context) => {
  const authorId = data.query.author;
  const resBack = authors.find((item) => +item.authorId === +authorId);
  context.send(resBack);
});

exports.newItems = functions.https.onRequest((data, context) => {
  context.send(newItems);
});

exports.explore = functions.https.onRequest((data, context) => {
  context.send(explore);
});

exports.hotCollections = functions.https.onRequest((data, context) => {
  context.send(hotCollections);
});
