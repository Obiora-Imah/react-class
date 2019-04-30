import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPosts = () => async dispatch => {
  const respononse = await jsonPlaceHolder.get("posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: respononse.data
  }) 
}


// make direct api call if you don't need to memoize
const _fetchUserRaw = async (id, dispatch) => {
  const respononse = await jsonPlaceHolder.get(`users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: respononse.data
  });
}


export const fetchPostAnduser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

// Lodash syntax
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUserRaw(id)))
    .value();
}
// memoize the api call to not make multiple call for a specific action
const _fetchUser =_.memoize((id, dispatch) => _fetchUserRaw(id, dispatch));

export const fetchUserMemoized = id =>  dispatch => _fetchUser(id, dispatch);
export const fetchUserRaw =  id =>  dispatch => _fetchUserRaw(id, dispatch);

