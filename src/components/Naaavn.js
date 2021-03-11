import React from 'react';
import { useState, useEffect } from 'react'
import './../css/Navn.css';
import axios from "axios";

const apiUrl = 'http://www.dnd5eapi.co/api/spells/cure-wounds';

function Navn(){
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        getSpell();
    }, []);
    
    const getSpell = async () => {
        const response = await axios.get(apiUrl);
        setUserData(response.data);
    };

    return(
        <div className="Navn">
                    <h3>name: {userData.name}</h3>
                    <h3>lvl: {userData.desc}</h3>
                </div>
            )
        
    }
    
    export default Navn