import React, { Fragment, CSSProperties } from 'react';

import '$src/assets/style/forecastTable.css';

export interface IForecast {
    dt: number,
    dt_txt: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
    }
}

interface IProps {
    forecast: {
        list: IForecast[]
    }
}

const times = [
    '00:00',
    '03:00',
    '06:00',
    '09:00',
    '12:00',
    '15:00',
    '18:00',
    '21:00',
];


const round = Math.round;
const toTemp = (tempStr: number) => <Fragment>{round(tempStr)} &#xb0;C</Fragment>;

const formatDatetime = (datetime: string) => {
    const [date, time] = datetime.split(' ');
    return { date, time };
}
const getDate = (datetime: string) => formatDatetime(datetime).date;
const getTime = (datetime: string) => formatDatetime(datetime).time;

const ForecastTable = ({ forecast }: IProps) => {

    const dates = [...(
        new Set(
            forecast.list.map(forecastData =>
                getDate(forecastData.dt_txt).split('-').reverse().join('.')
            )
        )
    )];

    const fTime = getTime(forecast.list[0].dt_txt).split(':').slice(0, 2).join(':');
    const firstSpan = times.findIndex(timeValue => timeValue === fTime) + 1;
    const style = { '--span': firstSpan } as CSSProperties;

    return (
        <div className="forecast-table">
            <div className="forecast-table-header">
                {times.map((time, i) => <div className="forecast-table-time" key={i}>{time}</div>)}
            </div>
            <div className="forecast-table-aside">
                {
                    dates.map((date, i) => <div className="forecast-table-date" key={i}>{date}</div>)
                }
            </div>
            <div className="forecast-table-body" style={style}>
                {forecast.list.map((forecastData, i) => (
                    <div className="forecast-table-data" key={i}>
                        {toTemp(forecastData.main.temp)}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ForecastTable;