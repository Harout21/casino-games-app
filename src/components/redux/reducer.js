import * as actions from './actionTypes';

const initialState = {
    gameData: {},
    favorites: [],
    fav: false,
    error: ''
};

export const games = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_DATA:
            return {
                ...state,
                loading: true,
                favorites: [],
                fav: false
            };
        case actions.GET_DATA_SUCCESS:
            return {
                gameData: action.payload,
                error: '',
                loading: false,
                favorites: [],
                fav: false
            };
        case actions.GET_DATA_FAIL:
            return {
                gameData: {},
                error: action.payload,
                loading: false,
                favorites: [],
                fav: false
            };
        case actions.ADD_TO_FAV:
            return {
                ...state,
                favorites: state.favorites.includes(action.payload) ? [...state.favorites] : [...state.favorites, action.payload],
                loading: false,
                fav: true
            };
        case actions.REMOVE_FAV:
            return {
                ...state,
                favorites: [...state.favorites.filter((item) => item.id !== action.payload.id)],
                loading: false,
                fav: false
            };
        default:
            return state
    }
};
