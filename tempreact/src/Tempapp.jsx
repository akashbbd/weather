import React, {useEffect,useState} from 'react';
import "./style.css";
const Tempapp = () =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Lucknow");

    useEffect( () =>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=28998588a48f84843527caafc2ce498c`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };

        fetchApi();

    },[search])


    return (
        <>
        <div className="box">
            {/* <img src = "https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-sunny-sky-sunny-blue-sky-white-clouds-background-skywhite-cloudsbackground-image_85793.jpg" alt = "Logo"></img> */}
            <div className="inputData">
                <input type = "search"
                className="inputField"
                onChange={(event) => { setSearch(event.target.value)

                }} />
                
            </div>

            {!city ? (
                <p className="errorMsg">No Data Found</p>
            ) : (
                <div>
                <div className = "info">
                <h2 className="location">
            <i className="fa-solid fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}°C

            </h1>
            <h3 className="tempmin_max">
                Min - {city.temp_min}°C :: Max - {city.temp_max}°C
            </h3>
            </div>

                <div className = "wave-one"></div>
                <div className = "wave-two"></div>
                <div className = "wave-three"></div>

                </div>
            )}
        

            

            </div>

        </>
    )
}

export default Tempapp;