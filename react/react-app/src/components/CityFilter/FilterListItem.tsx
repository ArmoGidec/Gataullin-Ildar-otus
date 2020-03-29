import React from 'react';
import { ICity } from '$src/utils/db';

interface IProps {
    city: ICity
}

const FilterListItem = ({city}: IProps) => <li><button>{city.ru} ({city.en})</button></li>;

export default FilterListItem;