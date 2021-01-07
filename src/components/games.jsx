import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDataAction} from "./redux/actions";
import GamesList from "./gamesList";

const Games = () => {
    const dispatch = useDispatch();
    const {gameData} = useSelector(state => state.games);
    const alldata = useSelector(state => state.games);

    useEffect(() => {
        dispatch(getDataAction());
    }, [dispatch]);

    return (
        <div>
            <GamesList data={gameData.games} allData={alldata} favorites={alldata.favorites}/>
        </div>
    );
};

export default Games;