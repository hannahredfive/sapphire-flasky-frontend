import { useState } from "react";
import './App.css';
import AnimalList from './components/AnimalList';
import NewAnimalForm from "./components/NewAnimalForm";
import axios from "axios";
import { useEffect } from "react";

// const INITIAL_ANIMALS = [
//   {
//     id: 100,
//     name: "Violet",
//     species: "pitbull mix",
//     isBookmarked: false,
//   },
//   {
//     id: 101,
//     name: "Norman",
//     species: "Pyrenees puppy",
//     isBookmarked: false,
//   },
//   {
//     id: 102,
//     name: "Juni",
//     species: "Poodle",
//     photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
//     isBookmarked: false,
//   },
//   {
//     id: 103,
//     name: "Sabine",
//     species: "Dog",
//     isBookmarked: false,
//   },
//   {
//     id: 104,
//     name: "Paprika and Braven",
//     species: "Kittens",
//     photo:
//       "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg",
//     isBookmarked: false,
//   },
// ];


function App() {
  const [animals, setAnimals] = useState([]);

  useEffect( () => {
    axios.get('127.0.1:5000/Animals')
      .then( (response) => {
        const initialAnimalData = [];
        response.data.forEach(animal => {
          initialAnimalData.push(animal);
        });
        setAnimals(initialAnimalData);
      })
      .catch( (error) => {
        console.log('error', error);
      })
  }, [])

  const updateBookmark = (animalId) => {

    // create a new list of animals with updated bookmark value
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        // let animal2 = { ...animal };
        // animal2.isBookmarked = !animal.isBookmarked;
        // return animal2;

        // The above is the same as the below

        return {
          ...animal,
          isBookmarked: !animal.isBookmarked
        }
      };
      return animal;
    });

    setAnimals(updatedAnimals);
  }

  const updateDelete = (animalId) => {
    const updatedAnimals = animals.map(animal => {
      if (animal.id !== animalId) {
        return { ...animal };
      }
    });

    // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
    const filteredUpdatedData = updatedAnimals.filter(function (element) {
      return element !== undefined;
    });

    setAnimals(filteredUpdatedData);
  }


  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <NewAnimalForm />
      <AnimalList 
        listOfAnimals={animals} 
        updateBookmark={updateBookmark} 
        updateDelete={updateDelete}
      ></AnimalList>
    </section>
  );
}

export default App;
