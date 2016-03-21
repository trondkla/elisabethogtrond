var Utils = require("./utils");

var getWishlist = function(maxItems, success, error) {
    var header = {
        "Content-Type": "application/json",
        "x-apikey": "56e873018de46ef5786b3119"
    };
    if (maxItems) {

    }
    return Utils.getJSON("https://elisabethogtrond-3291.restdb.io/rest/wishlist", header, success, error);
}

module.exports = getWishlist;
