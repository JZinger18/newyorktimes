$(document).ready(function() {


var startYear;

	$('#submit').on('click', function(event) {

		event.preventDefault();

	$(".articleDiv").empty();
	searchTerm = $('#searchTerm').val()
	console.log(searchTerm)
	limit = $('#limit').val();
	var limitF = parseInt(limit);
	console.log(limit)


	// startYear = $('#startYear').val();
	if ($('#startYear').val() == "") {
		startYear = "19890101";
	}
	else {
		startYear = $('#startYear').val();
	}

	if ($('#endYear').val() == "") {
		endYear = "20170101";
	}
	else {
		endYear = $('#endYear').val();
	}

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
			currentNumber = i + 1;

			// console.log(currentArticle);
			console.log(currentTitle);
			console.log(currentUrl);
			console.log(currentSection);
			console.log(currentPubDate);

			var newDiv = $("<div>");
			var articleTitle = $("<p>" + currentNumber + " " + currentTitle + "</p>");
			var articleSection = $("<p>Section: " + currentSection + "</p>");
			var articlePubDate = $("<p>" + currentPubDate + "</p>");
			var articleUrl = $("<a href='" + currentUrl + "'>" + currentUrl + "</a>");
			newDiv.append(articleTitle).append(articleSection).append(articlePubDate).append(articleUrl);
			$(".articleDiv").append(newDiv);

		}





	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});


})

});



