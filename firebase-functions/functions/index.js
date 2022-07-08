const functions = require("firebase-functions");
const textJson = require("./data/test.json");
const newItems = require("./data/newItems.json");
const authors = require("./data/authors.json");
const explore = require("./data/explore.json");
const hotCollections = require("./data/hotCollections.json");
const topSellers = require("./data/topSellers.json");
const itemDetails = require("./data/itemDetails.json");

exports.authorsAll = functions.https.onRequest((_, context) => {
  context.send(textJson);
});

exports.authors = functions.https.onRequest((data, context) => {
  const authorId = data.query.author;
  const resBack = authors.find((item) => +item.authorId === +authorId);
  context.send(resBack);
});

exports.newItems = functions.https.onRequest((_, context) => {
  context.send(newItems);
});

exports.explore = functions.https.onRequest((_, context) => {
  context.send(explore);
});

exports.hotCollections = functions.https.onRequest((_, context) => {
  context.send(hotCollections);
});

exports.topSellers = functions.https.onRequest((_, context) => {
  context.send(topSellers);
});

exports.itemDetails = functions.https.onRequest((data, context) => {
  const nftId = data.query.nftId;
  const resBack = itemDetails.find((item) => +item.nftId === +nftId);
  context.send(resBack);
});
