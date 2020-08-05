var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/getall', function(req, res, next) {
	return res.status(200).json(blogs);
});

router.get('/getbyid/:id', function(req, res, next) {
	const result = blogs.filter(entry => {
		return entry.objectId == req.params.id;
	});

	if(result.length) return res.status(200).json(result[0]);
	else return res.status(404).json({status: "fail", message: "objectId not found"});
});

router.post('/addblog', function(req, res, next) {
	if(req.body.title && req.body.author && req.body.subject && req.body.article) {
		const newBlog = { // Create new object so that extraneous data in req.body won't be included
			title: req.body.title,
			author: req.body.author,
			subject: req.body.subject,
			article: req.body.article,
			objectId: Date.now()
		}

		blogs.push(newBlog);
		return res.status(200).json({status: "success", newBlogcount: blogs.length});
	} else {
		return res.status(500).json({status: "fail", message: "invalid object"});
	}
	//blogs.push()
	return res.status(200).json(req.body);
});

router.put('/changeblog', function(req, res, next) {
	if(!req.body.title || !req.body.author || !req.body.subject || !req.body.article) return res.status(500).json({status: "fail", message: "invalid object"});

	for(let blog in blogs) {
		if(blogs[blog].objectId == req.body.objectId) {
			const newBlog = { // Create new object so that extraneous data in req.body won't be included
				title: req.body.title,
				author: req.body.author,
				subject: req.body.subject,
				article: req.body.article,
				objectId: req.body.objectId
			}
			blogs[blog] = newBlog;
			return res.status(200).json({status: "success"});
		}
	}
	return res.status(404).json({status: "fail", message: "objectId not found"});
});

// router.put('/changeblog/:id', function(req, res, next) {
// 	if(!req.body.title || !req.body.author || !req.body.subject || !req.body.article) return res.status(500).json({status: "fail", message: "invalid object"});

// 	for(let blog in blogs) {
// 		if(blogs[blog].objectId == req.params.id) {
// 			const newBlog = { // Create new object so that extraneous data in req.body won't be included
// 				title: req.body.title,
// 				author: req.body.author,
// 				subject: req.body.subject,
// 				article: req.body.article,
// 				objectId: req.params.id
// 			}
// 			blogs[blog] = newBlog;
// 			return res.status(200).json({status: "success"});
// 		}
// 	}
// 	return res.status(404).json({status: "fail", message: "objectId not found"});
// });

router.delete('/deleteblog/:id', function(req, res, next) {
	const result = blogs.filter(entry => {
		return entry.objectId != req.params.id;
	});

	if(result.length != blogs.length) {
		blogs = result;
		return res.status(200).json({status: "success", newBlogcount: blogs.length});
	} else return res.status(404).json({status: "fail", message: "objectId not found"});

});


let blogs = [
	{
		title: 'Is Ebola Worse?',
		author: 'John Peters',
		subject: 'news',
		article:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

		objectId: '1'
	},
	{
		title: 'What to do in isolation',
		author: 'Wanda Simon',
		subject: 'news',
		article:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

		objectId: '2'
	},
	{
		title: 'My Plants are Dying',
		author: 'Lucy Grand',
		subject: 'outdoors',
		article:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

		objectId: '3'
	},
	{
		title: 'Stuck in A Room',
		author: 'Burke Ginsen',
		subject: 'news',
		article:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

		objectId: '4'
	},
	{
		title: 'Outside My Window',
		author: 'Laura Nivers',
		subject: 'outdoors',
		article:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',

		objectId: '5'
	}
];


module.exports = router;
