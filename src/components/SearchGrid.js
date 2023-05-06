import {React, useState} from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SearchGrid = ({matchElem, addElem}) => {

  return (
    <section>
        {
            matchElem.map( (item)=>{
                return (
                    <div 
                        key={item.id}
                        id={item.id}
                        className={ "item food-item" }
                    >
                        <div className={ `selected ${item.selected ? `visible` : ``}` }></div>
                        <h4>{item.name}</h4>
                        <h4>kcal: {item.kcal}</h4>
                        <button 
                            type='button'
                            onClick={()=>{addElem(item.id)}}
                        >
                            { item.selected ? <AiOutlineMinus className='food-icon-minus'/> : <AiOutlinePlus className='food-icon-plus'/> }
                        </button>
                    </div>
                );
            } )
        }
    </section>
  )
}

export default SearchGrid