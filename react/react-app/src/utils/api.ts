import { weatherApiUrl, weatherApiKey } from "$src/utils/config";

const getWeather = async (searchValue: string) => {
    let searchResult = null;
    const searchResponseResult = await fetch(
        `${weatherApiUrl}?appid=${weatherApiKey}&units=metric&q=${searchValue}`);
    if (searchResponseResult.status === 200) {
        const responseObj = await searchResponseResult.json()
        searchResult = {
            name: responseObj.name,
            ...responseObj.main
        };
    }

    return searchResult;
};

export default { getWeather };
