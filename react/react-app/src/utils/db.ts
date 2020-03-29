export interface ICity {
    id: number,
    ru: string,
    en: string
}

const cities = [
    {
        id: 0,
        ru: "Уфа",
        en: "Ufa"
    }, {
        id: 1,
        ru: "Москва",
        en: "Moskva"
    }, {
        id: 2,
        ru: "Казань",
        en: "Kazan"
    }, {
        id: 3,
        ru: "Самара",
        en: "Samara"
    },
];

const getCities = () => cities;

export default { getCities };
