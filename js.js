// variables

var autKey = "&api-key=04af26cdd76f4b8da348f53553eadcb3";
var queryTerm = "trump";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var queryURLbase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

var queryURL = queryURLbase + queryTerm + autKey;
console.log("this is the query search url: " + queryURL);
// var to track the number of articles
var articleCounter = 0;
var numArticles = 10;
// retreive user inputs and convert to variables
// use those variables to run ajax call to the nyt
// break down the nyt object into usable fields
// dymamically generate html content

function runQuery(numArticles, queryURL) {  //example has numArticles before queryURL
    console.log("this is the query 2nd search url: " + queryURL);
    $.ajax({url: queryURL, method: 'GET'})
    .then(function(NYTData) {
        
        console.log(NYTData);
    })
}



$("#search-btn").on("click", function() {
    runQuery();
})