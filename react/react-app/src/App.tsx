import React from 'react';

interface IProps {
    name: string,
}

const App = ({name}: IProps) => (
    <h1>Hello, {name}!</h1>
)

export default App;