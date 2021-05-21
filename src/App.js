import React from 'react';
import './App.css';

function App() {
    // const [nameValue, setNameValue] = React.useState('');
    // const [ageValue, setAgeValue] = React.useState('');
    // const [foundValue, setFoundValue] = React.useState('');
    // const [reviewValue, setReviewValue] =React.useState('');

    const [valueInput, setValueInput] = React.useState({
        name: "",
        age: "",
        foundUs: "",
        yourReview: ""
    })

    // Set criteria for submitting the form
    const submitHandler = (event) => {
        // disable default settings, we don't want the page to refresh on submitting.
        event.preventDefault();
        // Create an object which we push to the
        const pushDataToConsole = {name: valueInput.name, age: valueInput.age, foundUs: valueInput.foundUs, yourReview: valueInput.yourReview};
        console.log(pushDataToConsole);
    };

    // onChange function:

    function handleChange(e) {
        const value = e.target.value;
        setValueInput({
            ...valueInput,
            [e.target.name]: value,
            [e.target.age]: value,
            [e.target.foundUs]: value,
            [e.target.yourReview]: value
        });
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <fieldset>
                <h2>Gegevens</h2>
                <label htmlFor="name">Naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={valueInput.name}
                    onChange={handleChange}
                />
                <label htmlFor="age">Leeftijd:</label>
                <input
                    id="name"
                    type="number"
                    name="age"
                    placeholder="0"
                    value={valueInput.age}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <h2>Jouw review</h2>
                <label htmlFor="howDidYouFindUs">
                    Hoe heb je dit recept gevonden?
                </label>
                <select
                    name="foundUs"
                    id="howDidYouFindUs"
                    value={valueInput.foundUs}
                    onChange={handleChange}
                >
                    <option value="" disabled>Kies een opties...</option>
                    <option value="google">Google</option>
                    <option value="vriend">Vriend</option>
                    <option value="advertentie">Advertentie</option>
                    <option value="anders">Anders</option>
                </select>
                <label htmlFor="review">
                    Opmerkingen:
                    <textarea
                        name="yourReview"
                        id="review"
                        cols="30"
                        rows="5"
                        placeholder="Wat vond je van het recept?"
                        value={valueInput.yourReview}
                        onChange={handleChange}
                    >
                    </textarea>
                </label>
                <button type="submit" id="submitButton">Versturen</button>
            </fieldset>
        </form>
    </div>
  );
}

export default App;
