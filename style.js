
   
   
   var nyArticles = $("#ny-times-articles");
  
    var searchTerm = $("#search-term");
    var numberOfRecords = $("#number-of-records");
    var startYear = $("#start-year");
    var endYear = $("#end-year");
  
  //Sets the articles blank everytime a new search is started.
    nyArticles.text("");
    $("#button").on("click", function() {
  //The NY API request with the value of the search input.
     var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '?begin_date=' + startYear + '?end_date=' + endYear + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';
  
     $.ajax({url: queryURL, method: "GET" })
        .then(function(data) {
            console.log(searchTerm);
 
         var search = data.response.docs;
        console.log(search);
  
        for(var i = 0; i < search.length; i++){
          var articles = search[i];
  
  //Appends the the Articles in a list.
          nyArticles.append('<li class="article">'+
                  '<a href="'+data.response.doc.web_url+'">'+data.response.doc.web_url+'</a>'+
                  
                  '<p>' + data.response.doc.headline.main + '</p>'+
                  '<p>' + data.response.doc.snippett + '</p>'+
                  '<p>' + data.response.doc.pub_date + '</p>'+
              '</li>');
         }
   })
});
