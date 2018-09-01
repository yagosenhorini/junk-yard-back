import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/productRoutes';
import cors from 'cors';
import swagger from 'swagger-node-express';
import minimist from 'minimist';

const app = express()
const PORT = 3000

const subpath = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:minu182@mongo-junkyard-gon2z.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(PORT, ()=>{
    console.log(`Express running at port ${PORT}`);
})