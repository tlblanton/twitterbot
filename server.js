//This is a test bot. 
//
//	1: Create basic functionality and ideas. Calling to APIs and that.
//	2: Connect to twitter
//	3: Host online 

var express = require('express')
	request = require('request')
	querystring = require('querystring')

	var reqUrl = "https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat"
	var xMashapeKey = 'd9Oo4i2rbgmsh6GOFwi8w103p6LUp19lLQjjsnfP5VTieOFrX1'

	request({
		headers: {
			'X-Mashape-Key': xMashapeKey,
			'Accept' : 'text/plain'
		},
		url: reqUrl,
		method: 'GET'
	}, function(error, response, body){
		var jsonBody = JSON.parse(body)
		console.log(typeof jsonBody)
		console.log(jsonBody.tags)
	})




