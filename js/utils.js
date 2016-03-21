var Utils = {};

Utils.getJSON = function(url, headers, success, error) {
    var request = new XMLHttpRequest();

    request.open('GET', url, true);

    for(var header in headers) {
        console.log(header, headers[header]);
        request.setRequestHeader(header, headers[header]);
    }

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        success(data, request);
      } else {
        // We reached our target server, but it returned an error
        error(request);
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      error(request);
    };

    request.send();
}

Utils.ready = function(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

module.exports = Utils;
