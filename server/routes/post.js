import express from 'express';


//TODO: IMPORT updatePost
import {getPosts, createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts);

router.post('/', createPost);

router.patch('/:id',updatePost)


export default router;