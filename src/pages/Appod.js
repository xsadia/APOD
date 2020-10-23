import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/api';
import '../styles/pages/Appod.css';

function Appod(){
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [data, setData] = useState({});
    const [submited, setSubmited] = useState(false);

    

    async function handleSubmit(evt){
        evt.preventDefault();
       await api.get(`?date=${year}-${month}-${day}&api_key=cFD6Cviv7xrrxZhScSpnLgf3Wifn5MFc8J7fUA6L`).then(res => {
            setData(res.data);
            setSubmited(true);
        });
    }

    function handleClick(evt){
        setSubmited(false);
        setYear('');
        setDay('');
        setMonth('');
    }

    let content;

    if(submited === false){
        content = (
                <form onSubmit={handleSubmit} >
                    <label htmlFor='Year'>Year</label>
                    <input id='Year'
                     type="number"
                     min="1995"
                     max="2020"
                     value={year}
                     onChange={evt => setYear(evt.target.value)}
                     className='input-field'
                     />

                    <label htmlFor='Month'>Month</label>
                    <input id='Month'
                     type="number"
                     min="1"
                     max="12"
                     value={month}
                     onChange={evt => setMonth(evt.target.value)}
                     className='input-field'
                     />

                    <label htmlFor='Day'>Day</label>
                    <input id='Day'
                     type="number"
                     min="1"
                     max="31"
                     value={day}
                     onChange={evt => setDay(evt.target.value)}
                     className='input-field'
                     />

                     <input className="submit-btn" type='submit' value="Search" />
                     
                </form>
        )
    } else {
        content = (
            <div>
                <img src={data.url} alt={data.title} className='astro-photo' />
                <h2>{data.title}</h2>
                <p> {data.date} </p>
                <button className="submit-btn" onClick={handleClick} >Search Another Photo</button>
            </div>
        )
    }

    return(
        <div id="Appod">
            <div className="content-wrapper">
                {content}
            </div>
        </div>
    )
}

export default Appod;