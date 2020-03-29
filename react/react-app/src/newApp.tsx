import React from "react";

import '$src/assets/style/main.css';
import CityFilter from "./components/CityFilter/";
import db from "./utils/db";

interface IProps {}

const cities = db.getCities();

const App = () => <div className="container">
    <h1>Погода</h1>
    <CityFilter cities={cities}/>
</div>

export default App;