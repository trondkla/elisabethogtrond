Utils = require("./utils");
var getWishlist = require("./getWishlist");
var React  = require("react");
var ReactDOM = require("react-dom");
var Wishlist = require("./components/wishlist.jsx");
var _ = require("underscore");

var daysUntilElem = document.getElementsByClassName("days-until")[0];
var bryllupstid = 1471096800000;

var updateDaysUntil = function() {
    if (!!daysUntilElem) {
        var daysElem = daysUntilElem.getElementsByClassName("days")[0]
                                            .getElementsByClassName("text")[0];
        var now = new Date().getTime();
        var diff = (bryllupstid - now) / 1000;
        var aDay = 24*60*60;

        var days = Math.floor(diff / aDay);

        if (days < 0) {
            days = Math.abs(days);
            daysUntilElem.getElementsByClassName("verb")[0].innerText = "siden";
        }

        if (days == 1) {
            daysUntilElem.getElementsByClassName("flertall")[0].innerText = "";
        }

        daysElem.innerText = days;
    }
};

viewWishlist = function(maxItems) {
    maxItems = _.isNumber(maxItems) ? maxItems : false;

    ReactDOM.render(<Wishlist loading="true" />, document.getElementById('wishlist'));
    getWishlist(maxItems, function(data, request){
        ReactDOM.render(<Wishlist wishes={data} />, document.getElementById('wishlist'));
    }, function(request){
        debugger;
        console.log("error, ", request.responseText);
    });
}

Utils.ready(function() {
    updateDaysUntil();
    window.setInterval(updateDaysUntil, 1000);
});
