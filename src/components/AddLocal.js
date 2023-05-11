import {AiOutlineMinus, AiOutlineEdit} from 'react-icons/ai';
import React, { useEffect } from 'react'
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
    const [ local, setLocal ] = useState([]);

    const [ isEdit, setIsEdit ] = useState(true);
    const [ isError, setIsError ] = useState(false);
    const [ weight, setWeight ] = useState(60);

    useEffect( ()=>{
        let tmp = localStorage.getItem("saveLocal");

        if (!tmp) return;

        tmp = JSON.parse(tmp);
        setLocal(tmp);

    }, [localStorage.getItem("saveLocal")] );

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

    const removeCustomFood = (id) => {

        let saveLocal = localStorage.getItem("saveLocal");
        if (!saveLocal) return;

        let newDb = database.filter( (food)=> food.id !== id );
        setDatabase(newDb);
    
        saveLocal = JSON.parse(saveLocal);
        let tmpLocal = saveLocal.filter( (item)=> item.id !== id );
        tmpLocal = JSON.stringify(tmpLocal);

        localStorage.setItem( "saveLocal", tmpLocal );
        
    };

    const handleSubmit = (e)=> {
        e.preventDefault();

        let { name, kcal, carbo, prot, fat } = form;

        for ( let elem in form ) {
            if ( form[elem] === "" ) {
                alert("Compila tutti i campi");
                return;
            }
            if ( +form[elem] < 0 ) {
                alert("Inserisci solo valori positivi");
                return;
            }
        }
        let lastId = database.length+1;

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

        if (find[0]) {
            alert("Alimento già presente");
            return;
        }

        setDatabase( (prevDatabase)=>{
            return [
                ...prevDatabase,
                tmpObj
            ];
        } );

        let local = localStorage.getItem("saveLocal");

        let tmpLocal = local ? JSON.parse(local) : [] ;
        tmpLocal.push(tmpObj);
        localStorage.setItem("saveLocal", JSON.stringify(tmpLocal));

        resetForm();
    };

    const checkWeight = ()=>{
        setIsError(false);
    };

    const editClick = (e)=> {
        e.preventDefault();
        let numWeight = parseFloat(weight);

        if ( isEdit && (isNaN(numWeight) || numWeight<=0 ) ) {
            alert("Inserisci un numero valido");
            setIsError(true);
            return;
        }
        setIsEdit( prevIsEdit => !prevIsEdit );
        setIsError(false);
    };

    

  return (
    <>
        <h3 className='page-title'>Gestisci i tuoi alimenti personalizzati</h3>
        <form className="form weight-setting" onSubmit={ (e)=>{ editClick(e) } }>
            <label htmlFor="weight">Il tuo peso:</label>
            { 
                isEdit ? 
                    <input 
                        className={ isError ? "input-error" : "" }
                        type='text' 
                        onChange={ (e)=>{ 
                            setWeight(e.target.value);
                            checkWeight(); 
                        } }
                        value={weight}
                        name='weight'
                        id='weight'
                    /> :
                    <span><span style={{fontWeight:"700"}}>{weight}</span> kg</span> 
                }
                <button className='icon-btn' type='submit'>
                    <AiOutlineEdit
                        className='generic-icon'
                    />
                </button>


        </form>
        <hr className='hr' />

        <h3 className='page-title'>Gestisci i tuoi alimenti personalizzati</h3>

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
        
        <section className="section">
            {
                local.map( (item)=>{
                    return (
                        <div 
                            key={item.id}
                            id={item.id}
                            className={ "item food-item" }
                        >
                            <h4>{item.name}</h4>
                            <h4>kcal: {item.kcal}</h4>
                            <button 
                                type='button'
                                onClick={()=>{removeCustomFood(item.id)}}
                            >
                                <AiOutlineMinus className='food-icon-minus'/>
                            </button>
                        </div>
                    );
                } )
            }
        </section>
    </>
  )
}

export default AddLocal