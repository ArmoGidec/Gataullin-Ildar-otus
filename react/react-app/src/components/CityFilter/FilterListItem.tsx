import React from 'react';
import { ICity } from '$src/utils/db';
import { Link } from 'react-router-dom';

interface IProps {
    city: ICity
}

const FilterListItem = ({city}: IProps) => 
    <li><Link to={`/${city.en}`} className="btn filter-link">{city.ru} ({city.en})</Link></li>;

export default FilterListItem;