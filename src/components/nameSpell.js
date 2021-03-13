import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../css/spellbox.css'

const url = "https://www.dnd5eapi.co"


export default function SplName({ spell }){
    const [spellData, setSpellData] = useState({});

    useEffect(() => {
        getSpecific();
    },[]);

    const getSpecific = async () => {
        const response = await axios.get(url + spell.url);
        setSpellData(response.data);
    };
    

    return(
        <div className="spellBox">
            <h5>{spellData.name}</h5>
            <p>level: {spellData.level}</p>
            <p>casting time: {spellData.casting_time}</p>
        </div>

    );
}