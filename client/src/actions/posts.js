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
        console.log('ERROR DISPATCHING ACTION => ',error.message);
        
    }

} 