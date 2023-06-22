import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NewAnimalForm(props) {
  const INITAL_FORM_DATA = {
    name: "",
    age: 0,
    species: ""
  };
  
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [species, setSpecies] = useState("");
  const [animalFormData, setAnimalFormData] = useState(INITAL_FORM_DATA)

  const anInputChanged = (evt) => {
    // if (evt.target.name === "name") {
    //   setName(evt.target.value);
    // } else if (evt.target.name === "age") {
    //   setAge(evt.target.value);
    // } else if (evt.target.name === "species") {
    //   setSpecies(evt.target.value);
    // };

    const newAnimalFormData = {
      ...animalFormData,
      [evt.target.name]: evt.target.value
    };

    setAnimalFormData(newAnimalFormData)
  };

  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Create New Animal</h2>
      <form>
        <section>
          <label htmlFor="animalName">Name:</label>
          <input 
            id="animalName" 
            name="name" 
            type="text" 
            value={ animalFormData.name } 
            onChange={ anInputChanged }
          />
        </section>
        <section>
          <label htmlFor="animalAge">Age:</label>
          <input 
            id="animalAge" 
            name="age" 
            type="number" 
            value={ animalFormData.age } 
            onChange={ anInputChanged }
          />
        </section>
        <section>
          <label htmlFor="animalSpecies">Species:</label>
          <input 
            id="animalSpecies" 
            name="species" 
            type="text" 
            value={ animalFormData.species } 
            onChange={ anInputChanged }
          />
        </section>

      </form>
    </div>
  )
};

NewAnimalForm.propTypes = {
  // Probably a function will go here later
};