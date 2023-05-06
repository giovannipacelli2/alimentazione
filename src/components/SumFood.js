import {React, useEffect, useState} from 'react'

const SumFood = ({total, setCopyTotal}) => {   
    
    /* const updateTotal = ()=>{
        for ( let elem of food ) {
            total.kcal += parseFloat( elem.kcal / 100 * elem.dose );
            total.carbo += parseFloat( elem.macro.carbo / 100 * elem.dose );
            total.prot += parseFloat( elem.macro.prot / 100 * elem.dose );
            total.fat += parseFloat( elem.macro.fat / 100 * elem.dose );
        }
    };
    const VOID_MACRO = {
        kcal:0,
        carbo: 0,
        prot:0,
        fat:0    
      };

    let total = VOID_MACRO;
    updateTotal();

      
    useEffect( ()=>{
        updateTotal();
    }, [] ); */

    return (
        <section className='section sum'>
            <div className="food-container">
                <h3>Totale</h3>
                <div className='food-description'>
                    
                    <h4>carbo: <span className='macro-color'>{total.carbo.toFixed(1)}</span></h4>
                    <h4>prot: <span className='macro-color'>{total.prot.toFixed(1)}</span></h4>
                    <h4>fat: <span className='macro-color'>{total.fat.toFixed(1)}</span></h4>
                    <h4>kcal: <span className='macro-color'>{total.kcal.toFixed(1)}</span></h4>
                </div>

                <button 
                    type='button'
                    className='btn'
                    onClick={()=>{setCopyTotal(total)}}
                >
                    copia
                </button>
            </div>
           
        </section>
    )
}


export default SumFood