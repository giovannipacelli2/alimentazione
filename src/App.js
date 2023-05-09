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

const PATH = window.location.pathname.split(`/`)[1];

const VOID_MACRO = {
  kcal:0,
  carbo: 0,
  prot:0,
  fat:0    
};

function App() {

  let [ food, setFood ] = useState([]);

  const [ total, setTotal ] = useState("");

  const [ copyTotal, setCopyTotal ] = useState("");

  let [ database, setDatabase ] = useState([]);

  useEffect( ()=>{  

    // Aggiunge SELECTED al database
    setDatabase( valoriNutrizionali.map( (food)=>{
      return {
        ...food,
        selected: false
      }
    } ) );

    let saveLocal = localStorage.getItem("saveLocal");

    if ( saveLocal ) {

      saveLocal = saveLocal.json();

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
  }, [food] );


  /*--------------utile al debug--------------*/

  /* useEffect( ()=>{
    setDatabase( prevState => [
      ...prevState,
      {
        ...prevState[0],
        selected: true
      },
      {
        ...prevState[2],
        selected: true
      }
    ] );
  }, [] ); */

/*--------------utile al debug--------------*/

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
          return { ...food, selected:!food.selected }
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
              </> : <h2 className='home-phrase'>Cerca un alimento</h2>
              
            }
            { copyTotal && <SaveFood copyTotal={copyTotal} close={removeSaveMacro}/> }
            
          </>
        }/>
          
          <Route path = {`${PATH}/search`} element={
            <SearchForm database={database} setDatabase={setDatabase} />
          }/>

          <Route path = {`${PATH}/add`} element={
            <AddLocal database={database} setDatabase={setDatabase} />
          }/>
        </Routes>
        </main>
    </Router>
    
  );
}

export default App;
