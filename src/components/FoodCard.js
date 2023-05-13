import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';

const FoodCard = ({elem, changeDose, removeFood}) => {

    const [ isEdit, setIsEdit ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const { id, name, kcal, dose } = elem;
    const { carbo, prot, fat } = elem.macro;

    let calcCarbo = +carbo / 100 * dose;
    let calcProt = +prot / 100 * dose;
    let calcFat = +fat / 100 * dose;
    let calcKcal = +kcal / 100 * dose;

    const editClick = (e, id)=> {
        e.preventDefault();

        if (e.target.food) {
            let food = e.target.food.value;

            if (food === "" ) {
                setIsEdit(false);
                return;
            }

            let numFood = parseFloat(food);
        
            if ( isEdit && (isNaN(numFood) || numFood<=0 ) ) {
                alert("Inserisci un numero valido");
                setIsError(true);
                return;
            }
            setIsError(false);
            changeDose(id, food);
        }
   
        setIsEdit( (prevIsEdit) => !prevIsEdit );
    };

  return (
    <form className="form food-container" onSubmit={ (e)=>{ editClick(e, id) } }>
        <h4>{name}</h4>
        <div className="food-description">

            <span>kcal: <strong>{calcKcal.toFixed(1)}</strong></span>
            <div className="edit-input-container">
                { 
                    isEdit ? 
                    <input 
                        className={ isError ? "input-error" : "" }
                        type='text' 
                        onChange={ ()=>{ 
                            setIsError(false); 
                        } }
                        name='food'
                        id='food'
                        placeholder="100"
                    /> :
                    <span><strong>{dose}</strong> g</span> 
                }
                    <button className='icon-btn' type='submit' >
                        <AiOutlineEdit
                            className='generic-icon'
                        />
                    </button>
            </div> 

        </div>

            <button
                onClick={()=>{ removeFood(elem.id) }}
                type='button'
                className='close-btn'
            >
                <IoCloseOutline/>
            </button>


    </form>
  )
}

export default FoodCard