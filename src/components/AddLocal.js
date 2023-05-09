import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react';

const AddLocal = ({database, setDatabase}) => {

    const VOID_FORM = {
        name:"",
        kcal: "",
        carbo: "",
        prot: "",
        fat: ""
    };

    const [ form, setForm ] = useState(VOID_FORM);

    const handleChange = (e)=> {
        let { name, value } = e.target;

        setForm( (prevForm)=>{
            return {
                ...prevForm,
                [name] : value
            };
        } );
    };

    const resetForm = ()=> {
        setForm( VOID_FORM );
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        let { name, kcal, carbo, prot, fat } = form;
        let lastId = database.length;

        let tmpObj = {
            id: lastId,
            name: name,
            kcal: kcal,
            macro: {
                carbo: carbo,
                prot: prot,
                fat: fat,
            },
            dose: 100,
            selected: false
        };

        let find = database.filter( (food) => food.name === name.toLowerCase() );
        console.log(find);
        if (find[0]) return;

        setDatabase( (prevDatabase)=>{
            return [
                ...prevDatabase,
                tmpObj
            ];
        } );
    };

  return (
    <form className='form' onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input 
                autoComplete='off'
                type="text"
                name='name'
                id='name'
                value={form.name}
                onChange={(e)=>{handleChange(e)}}
            />
        </div>

        <div className="input-container">
            <label htmlFor="kcal">Kcal</label>
            <input 
                autoComplete='off'
                type="number"
                name='kcal'
                id='kcal'
                value={form.kcal}
                onChange={(e)=>{handleChange(e)}}
            />
        </div>

        <div className="input-container">
            <label htmlFor="carbo">Carboidrati</label>
            <input 
                autoComplete='off'
                type="number"
                name='carbo'
                id='carbo'
                value={form.carbo}
                onChange={(e)=>{handleChange(e)}}
            />
        </div>

        <div className="input-container">
            <label htmlFor="prot">Proteine</label>
            <input 
                autoComplete='off'
                type="number"
                name='prot'
                id='prot'
                value={form.prot}
                onChange={(e)=>{handleChange(e)}}
            />
        </div>

        <div className="input-container">
            <label htmlFor="fat">Grassi</label>
            <input 
                autoComplete='off'
                type="number"
                name='fat'
                id='fat'
                value={form.fat}
                onChange={(e)=>{handleChange(e)}}
            />
        </div>

        <button
            type='submit'
            className='btn-2'
        >
            Aggiungi
        </button>
        <button
            type='button'
            className='btn-2'
            onClick={resetForm}
        >
            Reset
        </button>

    </form>
  )
}

export default AddLocal