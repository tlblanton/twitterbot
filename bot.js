//This is a test bot. 
//
//	1: Create basic functionality and ideas. Calling to APIs and that.
//	2: Connect to twitter
//	3: Host online 

/*
	|	IDEAS 	|

	-Take news headlines and replace names with cat description. 
		"Obama called a meeting today with the russian administration."
		"The orange american kitty called a meeting today with the calico from the hood. Russia to apologize"
*/

var express = require('express')
	request = require('request')
	querystring = require('querystring')
	fs = require('fs')

var headlineFile = 'previousHeadlines.txt';
var replacementText = "The Green Bastard from Parts Unknown";

	/*
	/* specs for twitter API
	*/
	var twitterSearchUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi'
	var twitterApiKey = 'y2qwEsGm3LvDeHhRu0hFcumby'
	var twitterApiSecret = 'Lcp6nXP8jNrrD7xgulcQt3S8YOp5m67DoYkUUDqHsD6KZlZGkP'

	var udReqUrl = "https://mashape-community-urban-dictionary.p.mashape.com/define?term=new%20yorker"
	var udXMashapeKey = 'd9Oo4i2rbgmsh6GOFwi8w103p6LUp19lLQjjsnfP5VTieOFrX1'

	var nyTimesBaseUrl = 'https://api.nytimes.com/svc/archive/v1/2016/1.json'
	var nyTimesArchiveUrl = 'https://api.nytimes.com/svc/archive/v1/2016/12.json'
	var nyTimesSearchApiKey = 'e9f5306de9ae4dccb175c0f56f1258dd'
	var nyTimesArchiveApiKey = 'e9f5306de9ae4dccb175c0f56f1258dd'

	var owlDictBaseUrl = 'https://owlbot.info/api/v1/dictionary/'
	
	var newsApiKey = 'a506f34728284a5badbe9dc90e72a685'
	var newsApiArticlesBaseUrl = 'https://newsapi.org/v1/articles?'	
/*
	request.get({
		url: 'https://api.twitter.com/oauth/request_token'
	}, function(error, response, body){
		console.log(body)
	})
*/







	//Call to Urban Dictionary API
/*	request({
		headers: {
			//'Access Token': '2387644729-z5VHzOPI6thbtdkC3eXBVvHwFhFfiKSwgqCtSwc'
			'X-Mashape-Key': udXMashapeKey,
			 'Accept' : 'text/plain'
		},
		url: udReqUrl,
		method: 'GET'
	}, function(error, response, body){
		var jsonBody = JSON.parse(body)
		console.log(jsonBody.list[0])
	})
*/
	/*
	/* request to owl dictionary API
	*/
	/*
	request({
		url: owlDictBaseUrl + 'foods',
		method: 'GET'
	}, function(error, response, body){
		var jsonBody = JSON.parse(body)
		console.log(jsonBody[0])
	})

*/
//search

request.get({
  url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
  qs: {
    'api-key' : "e9f5306de9ae4dccb175c0f56f1258dd",
    'q' : "Trump",
    'sort' : "newest",
    'page' : 0
  }
}, function(err, response, body) {
	var trumpInHeadline = false;
	var contents = fs.readFileSync(headlineFile, 'utf8')	//read current file contents
	body = JSON.parse(body)	
	//console.log(JSON.stringify(body))
	var numOfDocs = parseInt(JSON.stringify(body.response.docs.length))
	console.log(numOfDocs)
	//var index = Math.floor(Math.random() * (numOfDocs-1))
	var index = 1
	console.log(index)
	var strHeadline = "-1";
	for(var i = 0; i < 20; ++i){
		strHeadline = JSON.stringify(body.response.docs[i].headline.main)
		if(strHeadline.indexOf("Trump") > -1){
			console.log('Trump is in ', strHeadline);
			if(strHeadline.indexOf('Donald Trump\'s') != -1){
				strHeadline = strHeadline.replace('Donald Trump\'s', replacementText + "'s")
			}
			else if(strHeadline.indexOf("Donald Trump") != -1){
				strHeadline = strHeadline.replace("Donald Trump", replacementText)
			}
			else if(strHeadline.indexOf("Mr. Trump") != -1){
			strHeadline = strHeadline.replace("Mr. Trump", replacementText)
			}
			else{
				strHeadline = strHeadline.replace("Trump", replacementText)
			}
			if(contents.indexOf(strHeadline) < 0){	//If the headline has not already been published, break from the loop and publish it
				break;
			}
			else{
				trumpInHeadline = true;
			}
		}	
	}
 	if(!trumpInHeadline){
 		console.log('Could not retrieve unique Trump headline');
 	}
 	else{
 		console.log('NEW HEADLINE: ', strHeadline);
 		fs.appendFile(headlineFile, (strHeadline + '\n'), 'utf-8', function(err){
			if(err !== null){
				console.log(err);
			}
			return;
		})		
 	}

	if(trumpInHeadline){
		console.log('Trump is in headline')
	}
	else{
		console.log("Trump not in headline")
	}
})





	//archive
	/*
	request.get({
		url: nyTimesArchiveUrl,
		qs: {
			'api-key': nyTimesArchiveApiKey
		}
	}, function(error, response, body){
		body = JSON.parse(body);
		for(var i = 0; i < 300; ++i){
			if(body.response.docs[i].section_name.toUpperCase() == 'BUSINESS'){
				console.log(body.response.docs[i].headline.main)
				console.log(body.response.docs[i].section_name)
				console.log(typeof body.response.docs[i].section_name)
				console.log('----------------------------------------------------')		
			}
			
		}
	})
*/



