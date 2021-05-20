import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [foundValue, setFoundValue] = React.useState('');
    const [reviewValue, setReviewValue] =React.useState('');
    const onSubmit = data => console.log(data);

  return (
    <div>
        <form onSubmit={}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="name">Naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <label htmlFor="age">Leeftijd:</label>
                <input
                    id="name"
                    type="number"
                    placeholder="0"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                />
            </fieldset>
            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="howDidYouFindUs">
                    Hoe heb je dit recept gevonden?
                </label>
                <select
                    name="howDidYouFindUs"
                    id="howDidYouFindUs"
                    value={foundValue}
                    onChange={(e) => setFoundValue(e.target.value)}
                >
                    <option value="google">Google</option>
                    <option value="vriend">Vriend</option>
                    <option value="advertentie">Advertentie</option>
                    <option value="anders">Anders</option>
                </select>
                <label htmlFor="review">
                    Opmerkingen:
                    <textarea
                        name="review"
                        id="review"
                        cols="30"
                        rows="5"
                        placeholder="Wat vond je van het recept?"
                        value={reviewValue}
                        onChange={(e) => setReviewValue(e.target.value)}
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
