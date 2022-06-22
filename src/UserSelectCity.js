
import { useState } from 'react';

const UserSelectCity = (props) => {
    const { cityResults } = props;

    // useState initialize for saving input text from the user
    const [textInput, setTextInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        cityResults(textInput);
        setTextInput('');
    }

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
           
            <label htmlFor="searchField" className="searchField sr-only"></label>
            <input type="text"
            className="searchField" 
            placeholder="Enter your city"
            onChange={ (event) => setTextInput(event.target.value) }
            value={textInput}
            />

            <button className="submit" >Get Forecast</button>
        </form>
    )
}

export default UserSelectCity;