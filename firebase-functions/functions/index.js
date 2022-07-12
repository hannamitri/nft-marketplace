const functions = require("firebase-functions");
const newItems = require("./data/newItems.json");
const authors = require("./data/authors.json");
const explore = require("./data/explore.json");
const hotCollections = require("./data/hotCollections.json");
const topSellers = require("./data/topSellers.json");
const itemDetails = require("./data/itemDetails.json");

exports.authors = functions.https.onRequest((data, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  const authorId = data.query.author;
  const author = authors.find((item) => +item.authorId === +authorId);
  context.send(author);
});

exports.newItems = functions.https.onRequest((_, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  const items = newItems.map((item) => {
    const obj = {
      id: item.id,
      authorId: item.authorId,
      authorImage: item.authorImage,
      nftImage: item.nftImage,
      nftId: item.nftId,
      title: item.title,
      price: item.price,
      likes: item.likes,
      expiryDate: item.countdownInMinutes ?
      Date.now() + item.countdownInMinutes * 60 * 1000 :
      null,
    };

    delete obj.countdownInMinutes;

    return obj;
  });

  context.send(items);
});

exports.explore = functions.https.onRequest((data, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  const filterOption = data.query.filter;
  const items = explore.map((item) => {
    const obj = {
      id: item.id,
      authorId: item.authorId,
      authorImage: item.authorImage,
      nftImage: item.nftImage,
      nftId: item.nftId,
      title: item.title,
      price: item.price,
      likes: item.likes,
      expiryDate: item.countdownInMinutes ?
      Date.now() + item.countdownInMinutes * 60 * 1000 :
      null,
    };

    delete obj.countdownInMinutes;

    return obj;
  });

  if (!filterOption) {
    return context.send(items);
  }

  const itemsCopy = items.slice();

  if (filterOption === "price_high_to_low") {
    context.send(itemsCopy.sort((a, b) => b.price - a.price));
  } else if (filterOption === "price_low_to_high") {
    context.send(itemsCopy.sort((a, b) => a.price - b.price));
  } else if (filterOption === "likes_high_to_low") {
    context.send(itemsCopy.sort((a, b) => b.likes - a.likes));
  }
});

exports.hotCollections = functions.https.onRequest((_, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  context.send(hotCollections);
});

exports.topSellers = functions.https.onRequest((_, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  context.send(topSellers);
});

exports.itemDetails = functions.https.onRequest((data, context) => {
  context.set("Access-Control-Allow-Origin", "*");
  const nftId = data.query.nftId;
  const nftItem = itemDetails.find((item) => +item.nftId === +nftId);
  context.send(nftItem);
});
