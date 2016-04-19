exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {
      var client = new XMLHttpRequest();
      client.open('GET', url);
      client.send();

      client.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          var resultat = JSON.parse(this.response).people.map(function(a) {
            return a.name;
          });
          resolve(resultat.sort());
        } else {
          reject(this.statusText);
        }
      };

      client.onerror = function() {
        reject(this.statusText);
      };
    });
  }
};
