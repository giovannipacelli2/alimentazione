
import {React, useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import SearchGrid from "./SearchGrid";

function SearchForm({database, setDatabase}) {

  let [ matchFood, setMatchFood ] = useState([]);
  let [ form, setForm ] = useState({ search : "" });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value.toLowerCase();

    setForm( (prevState) => {
      return { 
        ...prevState,
        [name] : value
      }
    } );

    filteredArr(value);

    if ( value === "" ) {
      setMatchFood([]);
    }

  };

  const filteredArr = (value) => {

    let filtered = database.filter( food => food.name.toLowerCase().includes(value) );

    setMatchFood( filtered );
  };

  const addElem = (id) => {
    // Aggiorna l'interfaccia grafica
    setMatchFood( (prevFood)=>{
      return prevFood.map( (food)=>{
        if ( food.id === id ) {
          return { ...food, selected:!food.selected }
        }
        else return food;
      } )
    } );

    // Aggiorna il database

    setDatabase( (prevDatabase)=>{
      return prevDatabase.map( (food)=>{
        if ( food.id === id ) {
          return { ...food, selected:!food.selected }
        }
        else return food;
      } );
    } );
    
  };

  return (

    <div className='container'>

      <form className='form' onSubmit={(e)=>{e.preventDefault()}}>

        <label htmlFor="search"><h4>Cerca alimento</h4></label>
        <div className='search-container'>
          <input 
            autoComplete='off'
            type="text"
            name="search"
            id="search" 
            value={ form.search }
            onChange={ (e)=>{ handleChange(e) } }
          />
          <AiOutlineSearch className='icon-search'/>
        </div>

      </form>

      <SearchGrid matchElem={matchFood} addElem={addElem}/>
    </div>
    
  );
}

export default SearchForm;
