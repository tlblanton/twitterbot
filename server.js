//This is a test bot. 
//
//	1: Create basic functionality and ideas. Calling to APIs and that.
//	2: Connect to twitter
//	3: Host online 

var express = require('express')
	request = require('request')
	querystring = require('querystring')


	/*
	/* specs for twitter API
	*/
	var twitterSearchUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi'
	var twitterApiKey = 'y2qwEsGm3LvDeHhRu0hFcumby'
	var twitterApiSecret = 'Lcp6nXP8jNrrD7xgulcQt3S8YOp5m67DoYkUUDqHsD6KZlZGkP'
	var udReqUrl = "https://mashape-community-urban-dictionary.p.mashape.com/define?term=new%20yorker"
	var udXMashapeKey = 'd9Oo4i2rbgmsh6GOFwi8w103p6LUp19lLQjjsnfP5VTieOFrX1'
	var nyTimesBaseUrl = 'https://api.nytimes.com/svc/archive/v1/2016/1.json'
	var nyTimesArchiveUrl = 'https://api.nytimes.com/svc/archive/v1/1995/2.json'
	var nyTimesSearchApiKey = 'e9f5306de9ae4dccb175c0f56f1258dd'
	var nyTimesArchiveApiKey = 'e9f5306de9ae4dccb175c0f56f1258dd'
	var owlDictBaseUrl = 'https://owlbot.info/api/v1/dictionary/'
		

	request.get({
		url: 'https://api.twitter.com/oauth/request_token'
	}, function(error, response, body){
		console.log(body)
	})













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
/*	request({
		url: owlDictBaseUrl + 'food',
		method: 'GET'
	}, function(error, response, body){
		var jsonBody = JSON.parse(body)
		console.log(jsonBody[0])
	})
*/

//search
/*
	request.get({
		url: nyTimesBaseUrl,
		qs: {
    		'api-key': nyTimesSearchApiKey,
    		'q': "Denver",
    		'sort': "newest",
    		'page': 0
  		}
	}, function(error, response, body){
		body = JSON.parse(body)
		console.log(body)
	})
*/

	//archive
	request.get({
		url: nyTimesArchiveUrl,
		qs: {
			'api-key': nyTimesArchiveApiKey
		}
	}, function(error, response, body){
		body = JSON.parse(body);
		for(var i = 0; i < 30; ++i){
			console.log(body.response.docs[i].headline.main)
			console.log(body.response.docs[i].section_name)
			console.log('----------------------------------------------------')
		}
	})




