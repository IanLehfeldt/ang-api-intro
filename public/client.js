var app = angular.module('myApp', []);

app.controller('SwapiController', ['GiphyService', function (GiphyService) {
    console.log('Swapi Controller is loaded');
    var self = this;
    self.gotGiphs = GiphyService.gotGiphs;


    self.getSpecies = function (id) {
        $http.get('https://swapi.co/api/species/' + id).then(function (response) {
            console.log('response.data: ', response.data);
            self.swapiRequest = response.data;
            $http.get(self.swapiRequest.films[0]).then(function (response) {
                console.log('Film Data: ', response.data);
                self.filmResult = response.data;
            });
        });
    };

    self.searchGiphy = function(giphTag){
        GiphyService.searchGiphy(giphTag);
    };

    self.randomGiphy = function(){
        GiphyService.randomGiphy();
        self.randomGiph = GiphyService.randomGiph;
    };

    self.offsetGiphs = function (giphTag) {
        GiphyService.offsetGiphs(giphTag);
    };
}]);
