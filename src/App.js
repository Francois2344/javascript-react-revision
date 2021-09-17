import WilderCard from './components/wilder/WilderCard';
import Counter from "./components/Counter";
import Surname from "./components/Surname";
import CreateWilder from "./components/CreateWilder";
import './App.css';
import {useEffect, useState} from "react";
import {fetchWilders} from "./api/wildersApi";

function App() {
  const [wilders, setWilders] = useState([]);
  const [surname, setSurname] = useState('');

  // Charger les donner au montage du composant
  useEffect(async () => {
    const wildersResponse = await fetchWilders();
    // Etat => state => mettrem les données chargées dans le state du composant
    console.log(wildersResponse);
    setWilders(wildersResponse);
  }, []);

  const updateSurname = (value) => {
    setSurname(value);
  }

  const addWilder = (newWilder) => {
    setWilders([
      ...wilders,
      newWilder
    ]);
  }

  const removeWilder = (id) => {
    setWilders(wilders.filter((wilder) => wilder._id != id));
  }

  return (
    <div>
      <Surname surname={surname} updateSurname={updateSurname}></Surname>
      <div className="container">
        {
          wilders.map((wilder) => <WilderCard key={wilder.name} wilder={wilder} onRemoveWilder={removeWilder}></WilderCard>)
        }
      </div>
      <CreateWilder onWilderCreated={addWilder}></CreateWilder>
    </div>
  );
}

export default App;
