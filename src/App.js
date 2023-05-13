import './css/index.css';
import './css/app.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import valoriNutrizionali from "./database/valoriNutrizionali.js";

import Navbar from './components/Navbar';
import MainFoodList from './components/MainFoodList';
import SearchForm from "./components/SearchForm";
import SumFood from './components/SumFood';
import SaveFood from './components/SaveFood';
import AddLocal from './components/AddLocal';
import Summary from './components/Summary';

const PATH = window.location.pathname.split(`/`)[1];
/* const PATH = window.location.pathname; */

const VOID_MACRO = {
  kcal:0,
  carbo: 0,
  prot:0,
  fat:0    
};

function App() {

  // Controllo sul peso memorizzato localmente
  let localWeight = localStorage.getItem("weight");
  if ( localWeight ) {
      localWeight = parseFloat(localWeight);
  }
  else { localWeight = 0 }

  let [ food, setFood ] = useState([]);

  const [ total, setTotal ] = useState("");

  const [ copyTotal, setCopyTotal ] = useState("");

  let [ database, setDatabase ] = useState([]);

  const [ weight, setWeight ] = useState(localWeight);

  useEffect( ()=>{  

    // Aggiunge SELECTED al database
    setDatabase( valoriNutrizionali.map( (food)=>{
      return {
        ...food,
        selected: false
      }
    } ) );

    // Controllo sul database Locale
    let saveLocal = localStorage.getItem("saveLocal");

    if ( saveLocal ) {

      saveLocal = JSON.parse(saveLocal);

      setDatabase( (prevDatabase)=>{
        return [
          ...prevDatabase,
          ...saveLocal
          ];
      });
    }

  }, [] );

  useEffect( ()=>{
    let selectedItem = database.filter((item)=> item.selected === true );

    setFood(selectedItem);
  }, [database] );

  useEffect( ()=>{
    if ( food[0] ) {
      setTotal( food.reduce((acc, item)=> {
        let { kcal, dose } = item;
        let { carbo, prot, fat } = item.macro;
      
        acc.kcal += kcal /100 * dose;
        acc.carbo += carbo /100 * dose;
        acc.prot += prot /100 * dose;
        acc.fat += fat /100 * dose;

        return acc;
      }, {...VOID_MACRO} )  );
    }
    else if ( !food[0] ) {
      setTotal("");
    }
  }, [food] );

  // ----Controlla la variablie WEIGHT
  useEffect( ()=>{
    localStorage.setItem("weight", weight);
  }, [weight] );


  const changeDose = (id, newDose) => {
    setDatabase((prevFood)=>{
      return (
        prevFood.map( (food)=>{
          if (food.id === id) {
            return {
              ...food,
              dose: newDose
            };
          }
          else return food;
        } )
      );
    });
  };

  const removeFood = (id) => {
    setDatabase( (prevDatabase)=>{
      return prevDatabase.map( (food)=>{
        if ( food.id === id ) {
          return { 
            ...food, 
            dose: 100,
            selected:!food.selected 
          }
        }
        else return food;
      } );
    } );
  };

  const removeSaveMacro = () => {
    setCopyTotal("");
  };

  return (
    <Router>

      <Navbar />
      
        <main className='container'>

        <Routes>

        <Route exact path={`/${PATH}/`} element={
          <>
            <MainFoodList food={food} changeDose={changeDose} removeFood={removeFood} />
            { 
               food[0] ? <> <hr className='hr'/> 
                <SumFood total={total} setCopyTotal={setCopyTotal} />
              </> : <h3 className='page-title'>Cerca un alimento</h3>
              
            }
            { copyTotal && <SaveFood copyTotal={copyTotal} close={removeSaveMacro}/> }
            
          </>
        }/>
          
          <Route path = {`${PATH}/search`} element={
            <SearchForm database={database} setDatabase={setDatabase} />
          }/>

          <Route path = {`${PATH}/add`} element={
            <AddLocal 
              database={database}
              setDatabase={setDatabase} 
              weight={weight}
              setWeight={setWeight}
            />
          }/>

          <Route path = {`${PATH}/summary`} element={
            (total && weight !==0 ) ? 
              <Summary weight={weight} total={total} /> : 
              <>
                <h3 className='page-title'>Nessun dato da mostrare</h3>
                { weight ===0 && <h4 className='red-message'>Vai nella sezione "Modifica" ed inserisci il tuo peso</h4> }
              </>
          }/>
        </Routes>
        </main>
    </Router>
    
  );
}

export default App;
