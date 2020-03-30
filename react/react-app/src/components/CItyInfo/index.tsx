import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "$src/utils/api";
import ForecastTable, { IForecast } from '$src/components/ForecastTable/';

interface IState {
    list: IForecast[] 
}

const initialState: IState = {
    list: []
};


const CityInfo = () => {
    const { cityName } = useParams();

    const [forecast, setForecast] = useState(initialState);

    useEffect(() => {
        getForecast();
    }, [cityName]);

    const getForecast = async () => {
        setForecast(initialState);
        const responseData = await api.getForecast(cityName as string);
        setForecast(responseData);
    };

    return (
        <div className="block-wrapper">
            {cityName?.toUpperCase()}
            {forecast.list.length > 0 &&
                <ForecastTable forecast={forecast} />
            }
        </div>
    )
};

export default CityInfo;