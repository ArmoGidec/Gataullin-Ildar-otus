import React, {Component} from 'react';

interface IProps {}

class WeatherApp extends Component<IProps>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            favorites: []
        };
    }

    render() {
        return (
            <div className="container">
                
            </div>
        )
    }
}

export default WeatherApp;