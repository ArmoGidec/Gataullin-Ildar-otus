import {
    weatherApiKey,
    forecastApiUrl,
    weatherApiUrl
} from "$src/utils/config";

const request = async (apiUrl: string, city: string) => {
    let searchResult = null;
    const searchResponseResult = await fetch(
        `${apiUrl}?appid=${weatherApiKey}&units=metric&q=${city}`
    );
    if (searchResponseResult.status === 200) {
        return await searchResponseResult.json();
    }

    return searchResult;
};

const getWeather = (city: string) =>
    request(weatherApiUrl, city).then(responseObj => ({
        name: responseObj.name,
        ...responseObj.main
    }));

const getForecast = (city: string) =>
    request(forecastApiUrl, city).then(({ list }) => ({ list }));

export default { getWeather, getForecast };
