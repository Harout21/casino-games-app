import React, {useState} from 'react'
import './App.css';
import Games from "./components/games";
import {useDispatch, useSelector} from "react-redux";
import {getDataAction} from "./components/redux/actions";


function App() {
    const [show, setShow] = useState(false);
    const [fav, setShowFav] = useState(false);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const {gameData} = useSelector(state => state.games);
    const alldata = useSelector(state => state.games);

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "200px";
    };
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };
    const showText = () => {
        setShow(!show)
    };
    const openFavs = () => {
        setShowFav(!fav)
    };
    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(getDataAction(e.target.value))

    };


    return (
        <div className="App">
            <div id="mySidenav" className="sidenav">
                <p className="closebtn" onClick={() => closeNav()}>&times;</p>
                <p className="categories" onClick={() => openFavs()}>
                    Favorites {alldata.favorites.length}</p>
                {
                    fav && alldata.favorites.length > 0 && alldata.favorites.map((item, i) => {
                        return <div key={i} className="categories-nameKey">{item.name}</div>
                    })
                }
                <p className="categories" onClick={() => showText()}> Categories</p>
                {
                    show && gameData && gameData.categories && gameData.categories.map((item, i) => {
                        return <div className="categories-nameKey" key={i}>{item.nameKey}</div>
                    })
                }
                <input value={value} onChange={(e) => handleChange(e)} placeholder="Search Games"/>

            </div>
            <div className="open-span">
                <span className="span-open-side-menu" onClick={() => openNav()}><span
                    className="three-lines-icon">&#9776;</span>&nbsp;</span>
            </div>
            <Games/>
        </div>
    )
}

export default App;
