import React from 'react';

interface IProps { 
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleInput: (event: React.FormEvent<HTMLInputElement>) => void,
    searchValue: string,
    fetching: boolean,
}

const Searchform = ({ handleSubmit, handleInput, searchValue, fetching }: IProps) => (
    <form onSubmit={handleSubmit} className="input-group">
        <input placeholder="Введите город" type="text"
            value={searchValue} onChange={handleInput} />
        <button disabled={searchValue?.length === 0 || fetching} type="submit">
            Показать
        </button>
    </form>
)

export default Searchform;