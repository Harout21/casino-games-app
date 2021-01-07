import React from 'react';
import IconHeartActive from "./iconHeart";
import IconHeartNoActive from "./iconHeartNoActive";
import {addToFav, removeFav} from "./redux/actions";
import {useDispatch} from "react-redux";

const GamesList = ({data, favorites, allData}) => {
    const dispatch = useDispatch();
    //
    const findArrayOfGames = (id) => {
        let arr = allData && allData.gameData && allData.gameData.categories && allData.gameData.categories[0].games.find((item) => item.id === id);
        if (arr) {
            return arr.top
        }
        return false
    };


    return (
        <div className="container-games">
            <div className="larges">
                {
                    data && data.map((item, i) => {
                        return (
                            <div key={i} className={`${findArrayOfGames(item.id) ? "gamesList-large" : "NoGame"}`}>
                                <img src={findArrayOfGames(item.id) ? item.img.large : ""} alt={item.name}/>
                                <div className="like" onClick={() => dispatch(addToFav(item))}
                                     onDoubleClick={() => dispatch(removeFav(item))}>{
                                    favorites.includes(item) ? <> <IconHeartActive/>Double Click to UnFav </> :
                                        <IconHeartNoActive/>
                                }</div>
                                <p className="bottom-left">{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>
            <div className="smalls">
                {
                    data && data.map((item, i) => {
                        return (
                            <div key={i} className="gamesList-small">
                                <img src={item.img.small} alt={item.name}/>
                                <div className="like" onDoubleClick={() => dispatch(removeFav(item))}
                                     onClick={() => dispatch(addToFav(item && item))}>{
                                    favorites.includes(item) ? <> <IconHeartActive/>Double Click to UnFav </> :
                                        <IconHeartNoActive/>
                                }</div>
                                <p className="bottom-left">{item.name}</p>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default GamesList;
