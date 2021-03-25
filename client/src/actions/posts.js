import * as api from '../api/index';

//Action Creators
                                //redux-thunk
export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts()
        dispatch({type: 'FETCH_ALL', payload: data})
    
        
        // const action = {type: 'FETCH_ALL', payload: []} 
        //instead of return, dispatch the action(thunk)
        // dispatch(action)
        
        
    }catch(error){
        console.log('ERROR GETTING POST => ',error);
    }

} 


export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        // const resp = await api.createPost(post);
        
        dispatch({type:'CREATE', payload: data})

    }catch(error){
        console.log('ERROR CREATING POST ->', error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{

        const { data } = await api.updatePost(id,post);
        // const response = await api.updatedPost(id,post);

        dispatch({type: 'UPDATE', payload: data});
    }catch(error){
        console.log('ERROR UPDATING POST ->', error);
    }
}