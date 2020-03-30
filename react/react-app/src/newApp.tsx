import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '$src/assets/style/main.css';
import CityFilter from "./components/CityFilter/";
import db from "./utils/db";
import CityInfo from "./components/CityInfo/";

const App = () => {
    const cities = db.getCities();
    return (
        <Router>
            <div className="container">
                <h1>Погода</h1>
                <CityFilter cities={cities} />

                <Switch>
                    <Route path="/:cityName">
                        <CityInfo />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;