$(document).ready(function() {




	$('#submit').on('click', function(event) {
		event.preventDefault();

	searchTerm = $('#searchTerm').val()
	console.log(searchTerm)
	limit = $('#limit').val();
	var limitF = parseInt(limit);
	console.log(limit)


	startYear = $('#startYear').val();



	endYear = $('#endYear').val();

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "e9260116e3524634878292734e9eda91",
	  'q': searchTerm,
	  'begin_date': startYear,
	  'end_date': endYear
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
		for(var i = 0; i < limitF;i ++) {
			currentArticle = result.response.docs[i];
			currentTitle = currentArticle.headline.main;
			currentSection = currentArticle.section_name;
			currentPubDate = currentArticle.pub_date;
			currentUrl = currentArticle.web_url;

			// console.log(currentArticle);
			console.log(currentTitle);
			console.log(currentUrl);
			console.log(currentSection);
			console.log(currentPubDate);

			var newDiv = $("<div>");
			var articleTitle = $("<p>" + i+1 + currentTitle + "</p>");
			var articleSection = $("<p>Section: " + currentSection + "</p>");
			var articlePubDate = $("<p>" + currentPubDate + "</p>");
			var articleUrl = $("<a href='" + currentUrl + "'>");
			newDiv.append(articleTitle).append(articleSection).append(articlePubDate).append(articleUrl);
			$(".test").append(newDiv);

		}





	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});


})

});



