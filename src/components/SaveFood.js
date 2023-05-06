import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const SaveFood = ({copyTotal, close}) => {  

    return (
        <section className='section sum'>
            <div className="food-container">
                <h3>In considerazione</h3>
                <div className='food-description'>
                    
                    <h4>carbo: <span className='macro-color'>{copyTotal.carbo.toFixed(1)}</span></h4>
                    <h4>prot: <span className='macro-color'>{copyTotal.prot.toFixed(1)}</span></h4>
                    <h4>fat: <span className='macro-color'>{copyTotal.fat.toFixed(1)}</span></h4>
                    <h4>kcal: <span className='macro-color'>{copyTotal.kcal.toFixed(1)}</span></h4>
                </div>
                <button
                    onClick={close}
                    className='close-btn'
                >
                    <AiOutlineCloseCircle/>
                </button>
            </div>
           
        </section>
    )
}

export default SaveFood