import React from 'react';
import Post from './Post/Post';

import {Grid, CircularProgress} from '@material-ui/core';

import useStyles from './styles';

import {useSelector} from 'react-redux';



const Posts = ({setCurrentId}) => {

    const classes = useStyles();
                                        //FETCHING posts from reducers/index.js
    const posts = useSelector((state) => state.posts); 
    

    console.log('POSTS =>', posts);
    return (
            !posts.length ? <CircularProgress/> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts.map(post =>(
                        <Grid item key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            )
        
    )
}

export default Posts