import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FoodCard = ({elem, changeDose, removeFood}) => {

    const { id, name, kcal, dose } = elem;
    const { carbo, prot, fat } = elem.macro;

    let calcCarbo = +carbo / 100 * dose;
    let calcProt = +prot / 100 * dose;
    let calcFat = +fat / 100 * dose;
    let calcKcal = +kcal / 100 * dose;

    const handleSubmit = (e, id)=> {
        e.preventDefault();
        let newDose = +e.target.foodInput.value;

        if (!newDose) return;

        changeDose(id, newDose);
    };

  return (
    <div id={id} className='food-container'>

        <div className='row-flex'>
            <h3>{name}</h3>
        </div>


        <hr className='hr'/>
                
        <div className='food-description'>
            
            <h4>carbo: <span className='macro-color'>{calcCarbo.toFixed(1)}</span></h4>
            <h4>prot: <span className='macro-color'>{calcProt.toFixed(1)}</span></h4>
            <h4>fat: <span className='macro-color'>{calcFat.toFixed(1)}</span></h4>
            <h4>kcal: <span className='macro-color'>{calcKcal.toFixed(1)}</span></h4>
            <h4>dose: <span className='macro-color'>{dose}</span></h4>
        </div>

        <form className="input-container" onSubmit={(e)=>{handleSubmit(e, id)}}>
            <input 
                type="number"
                placeholder='Grammi es. 100'
                className='food-input'
                id='foodInput'
                name='foodInput'
            />
            <button 
                className='btn-2'
                type='submit'
            >ok</button>
        </form>

        <button
            onClick={()=>{ removeFood(elem.id) }}
            className='close-btn'
        >
            <AiOutlineCloseCircle/>
        </button>
    </div>
  )
}

export default FoodCard