const express = require('express');  
const router = express.Router();
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    hosts: [ 'http://localhost:9200']
});
var indexName = "randomindex";

router.post('/addData',function(req,res) {
    const data = req.body;
    client.index({
       index: data.index,
       type: data.type,
       id:  data.id,
       body: {
           title: data.body.title,
           content: data.body.content,
       }
   },function(err,resp,status) {
       if(err) {
           console.log('error = ',err);
       } else { 
        console.log('response = ',resp);
        res.send('data added');
       }
   });
});

router.get('/',function(req,res) {
    console.log('hello')
    res.send('hello')
});

router.post('/createIndex', function(req,res) {
    client.indices.exists({
        index: req.body.index
    }, function(err,resp,status) {
        if(err) {
            console.log(err);
        } else {
            if(resp === true) {
                console.log('index already created');
                res.send('index already created');
            } else {
                client.indices.create({
                    index: req.body.index
                }, function(errr,resp,status) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('index created');
                        res.send('index created');
                    }
                });
            }
        }
    });
});

router.post('/searchData', function(req,res) {
    client.search({
        index: indexName,
        type: "document",
        body: {
            title: "title",
            content: "content",
        }
        },function(err,resp) {
            if(err) {
                console.log(err);
            } else {
                console.log('data = ',resp);
                res.send(resp);
            }
        }
    );
});

router.post('/deleteData', function(req,res) {
    client.delete({
        index: req.body.index,
        type: req.body.type,
        id: req.body.id
        }, function(err,response) {
            if(err) {
            console.log(err);
            } else {
            console.log('**********');
            console.log(response);
            console.log('**********');
            }
        }
    );
});

router.get('/deleteAllIndex', function(req,res) {
    client.indices.delete({
        index:'_all'
        }, function(err,response) {
            if(err) {
                console.log(err);
            } else {
                console.log('**********');
                console.log('all indices deleted = ',response);
                console.log('**********');
            }
        }
    );
})

module.exports = router;