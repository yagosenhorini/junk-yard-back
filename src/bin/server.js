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
app.use(cors())

routes(app)

app.listen(PORT, ()=>{
    console.log(`Express running at port ${PORT}`);
})