
var nyArticles = $("#ny-times-articles");
  
var searchTerm = $("#search-term");
var numberOfRecords = $("#number-of-records");
var startYear = $("#start-year");
var endYear = $("#end-year");



$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var startYear = $




    var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '?begin_date=' + startYear + '?end_date=' + endYear + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });