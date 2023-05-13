import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';

const SaveFood = ({copyTotal, close}) => {  

    return (
        <section className='section sum'>
            <div className="food-container">

                <div className='food-description'>                    
                    <h3>Fissato: <span className='macro-color'>{copyTotal.kcal.toFixed(1)}</span></h3>
                </div>

                <div className='food-description'>

                    <div className="macro">
                        <h4>carbo: <span className='macro-color'>{copyTotal.carbo.toFixed(1)}</span></h4>                        
                    </div>

                    <div className="macro">
                        <h4>prot: <span className='macro-color'>{copyTotal.prot.toFixed(1)}</span></h4>
                    </div>

                    <div className="macro">
                        <h4>fat: <span className='macro-color'>{copyTotal.fat.toFixed(1)}</span></h4>
                    </div>
                    
                </div>
                <button
                    onClick={close}
                    className='close-btn'
                >
                    <IoCloseOutline/>
                </button>
            </div>
           
        </section>
    )
}

export default SaveFood