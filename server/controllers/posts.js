import PostMessage from '../models/postMessage.js';



export const getPosts = async (req , res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log('Get posts Succefully');
        res.status(201).json(postMessages);
    }catch(error){
        console.log('ERROR GETTING POSTS ->', error);
        res.status(409).json({message: error.message});
    }
}



export const createPost = async (req, res) => {
    const post = req.body;
    
    const newPost = new PostMessage(post);
    
    try{
        await newPost.save()
        
        res.status(201).json(newPost);
        
    }catch(error){
        res.status(409).json({message: error.message});
    }
}