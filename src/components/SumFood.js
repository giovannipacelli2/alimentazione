import React from 'react'
import { useEffect, useState} from 'react'

const SumFood = ({total, setCopyTotal}) => {   
    
    return (
        <section className='section sum'>
            <div className="food-container">
                
                <div className='food-description'>                    
                    <h3>Totale kcal: <span className='macro-color'>{total.kcal.toFixed(1)}</span></h3>
                </div>

                <div className='food-description'> 
                    <div className="macro">
                        <h4>carbo: <span className='macro-color'>{total.carbo.toFixed(1)}</span></h4>
                    </div>    

                    <div className="macro">
                        <h4>prot: <span className='macro-color'>{total.prot.toFixed(1)}</span></h4>
                    </div>    
                                   
                    <div className="macro">
                        <h4>fat: <span className='macro-color'>{total.fat.toFixed(1)}</span></h4>
                    </div>                   
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