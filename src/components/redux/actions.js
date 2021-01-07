import * as actions from './actionTypes'
import axios from 'axios'

export const getDataSuccess = (data) => {
    return {
        type: actions.GET_DATA_SUCCESS,
        payload: data
    }
};
export const getDataFail = (err) => {
    return {
        type: actions.GET_DATA_FAIL,
        payload: err
    }
};
export const addToFav = (item) => {
    return {
        type: actions.ADD_TO_FAV,
        payload: item
    }
};
export const removeFav = (item) => {
    return {
        type: actions.REMOVE_FAV,
        payload: item
    }
};

export const getDataAction = (search) => {
    return async (dispatch) => {
        try {
            const resp = await axios.get('gamesList.json');
            if (search) {
                resp.data.games = resp.data.games.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            }
            dispatch(getDataSuccess(resp.data));
        } catch (err) {
            dispatch(getDataFail(err));
            console.log(err);
        }
    }
};
