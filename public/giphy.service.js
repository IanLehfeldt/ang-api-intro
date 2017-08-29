app.service('GiphyService', ['$http', function($http){
    var self = this;
    var giphyAPIKey = '&api_key=ea316e4919cd497b84c42fa122a3ee80';
    var offSetter = 0;
    
    self.gotGiphs = { list: [] };
    self.randomGiph = { list: [] };

    self.randomGiphy = function() {
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += '&limit=5&rating=g';
        baseUrl += giphyAPIKey;

        console.log('baseUrl: ', baseUrl);

        $http.get(baseUrl).then(function (response) {
            self.randomGiph.list = response.data;
            console.log('giphys found: ', self.randomGiph.list);
        });
    };

    self.searchGiphy = function (giphTag) {
        offSetter = 0;
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
        //console.log(self.giphTag.tag);
        baseUrl += '&limit=5&rating=g$offset=0';
        baseUrl += "&q="+giphTag;
        baseUrl += giphyAPIKey;

        console.log('baseUrl: ', baseUrl);

        $http.get(baseUrl).then(function (response) {
            self.gotGiphs.list = response.data;
            console.log('giphys found: ', self.gotGiphs.list);
        });
        //example request:
        //"http://api.giphy.com/v1/gifs/search
        //?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
        // ^All variables meant to request specific parameters
    };

    self.offsetGiphs = function (giphTag) {
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
        offSetter += 5;
        baseUrl += '&limit=5&rating=g&offset='+offSetter;
        baseUrl += "&q="+giphTag;
        baseUrl += giphyAPIKey;

        console.log('baseUrl: ', baseUrl);

        $http.get(baseUrl).then(function (response) {
            self.gotGiphs.list = response.data;
            console.log('giphys found: ', self.gotGiphs.list);
        });
        //example request:
        //"http://api.giphy.com/v1/gifs/search

        //?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
        // ^All variables meant to request specific parameters
    };
}]);