import streams from "../apis/streams"
import * as Variables from "./type";
import history  from "../history"


export const signIn = (userId) => {
    return {
        type: Variables.SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: Variables.SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post("/streams", {...formValues, userId: userId});
    dispatch({type: Variables.CREATE_STREAM, payload: response.data});
    history.push("/")
}

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({type: Variables.FETCH_STREAMS, payload: response.data})
}

export const fetchStream = (streamId) => async (dispatch) => {
    const response = await streams.get(`/streams/${streamId}`);
    dispatch({type: Variables.FETCH_STREAM, payload: response.data})
}

export const deleteStream = (streamId) => async (dispatch) => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({type: Variables.DELETE_STREAM, payload: streamId})
}

export const editStream = (streamId, formValues) => async (dispatch) => {
    const response = await streams.put(`/streams/${streamId}`, formValues);
    dispatch({type: Variables.EDIT_STREAM, payload: response.data})
}