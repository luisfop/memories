import * as api from "../api/index";

//4

//Action Creators
//redux-thunk
export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });

    // const action = {type: 'FETCH_ALL', payload: []}
    //instead of return, dispatch the action(thunk)
    // dispatch(action)
  } catch (error) {
    console.log("ERROR GETTING POST => ", error);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    // const resp = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("ERROR CREATING POST ->", error);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post);
    // const response = await api.updatedPost(id,post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("ERROR UPDATING POST ->", error);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log("ERROR DELETING POST -> ", error);
  }
};


export const likePost = (id) => async(dispatch) => {
    try{

        const { data } = await api.likePost(id);
        dispatch({type: 'LIKE', paylaod: data});
    }catch(error){
        console.log('ERROR LIKING THIS POST', error);
    }
}
