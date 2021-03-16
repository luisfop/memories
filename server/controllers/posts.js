import PostMassage from '../models/postMessage.js';


export const getPosts = async (req , res) => {
    try{
        const postMessage = await PostMassage.find();
        console.log('Get posts Sucessed');
        res.status(201).json(postMessage);
    }catch(error){
        console.log('ERROR GETTING POSTS ->', error);
        res.status(409).json({message: error.message});
    }
}


export const createPost = (req, res) => {
    res.send('POST CREATION!');
}