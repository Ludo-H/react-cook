import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Plat = () => {

    const [platsData, setPlatsData] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then((data) => setPlatsData(data.data.meals))
    }, [input])


    const displayPlats =
        platsData
            .map((plat, index) => (
                <Card key={index} plat={plat} />
            ))

    return (
        <div className="container">
            <input 
            type="text" 
            placeholder='Saisissez un plat (en anglais)'
            onChange={(e)=> setInput(e.target.value)}
            />
            <div className='plat'>
                {displayPlats}
            </div>
        </div>

    );
};

export default Plat;