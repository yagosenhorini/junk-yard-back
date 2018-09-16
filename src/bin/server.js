import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from '../routes/productRoutes';
import cors from 'cors';

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:minu182@mongo-junkyard-gon2z.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({extended: false}))
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain)

routes(app)

app.listen(PORT, ()=>{
    console.log(`Express running at port ${PORT}`);
})