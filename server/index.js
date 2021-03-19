import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from './routes/post.js';

const app = express();


app.use(cors());

//Routes
app.use('/posts', postsRoutes);



// Setting bodyParser so it can properly send our requests

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))





//MongoDB

let CONNECTION_URL = 'mongodb+srv://luisdev:teste@cluster0.00ujy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log( `Server running on port: ${PORT}`)))
.catch((error) => console.log('Error', error.message));

mongoose.set('useFindAndModify', false);