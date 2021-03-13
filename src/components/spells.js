// import Hode from './header.js';
import './../css/spells.css';
import Spellcomp from './spellcomp.js'
import Navn from './Naaavn.js'
import { useState , useEffect } from 'react';
import axios from "axios";
import SplName from './nameSpell.js'

const apilvl1 = 'https://www.dnd5eapi.co/api/spells/?level=5'

function SpellsPage() {
        const [spell2 , setSpe] = useState([]);

        useEffect(() => {
            getSpellLVL1();
        }, []);

        const getSpellLVL1 = async () => {
            const response = await axios.get(apilvl1);
            setSpe(response.data.results);
        };
        
        // console.log(spell2);
        
        return(
            <div className="spellsPage">
                {/* <Spellcomp/> */}
                {
                    spell2.map(spellElem =>(
                        // <h3>name: {spellElem.name}</h3>
                        // console.log(spellElem),
                        <SplName spell = {spellElem}/>
                    ))
                }
                {/* <Navn/> */}
                {/* <h3>name: {one}</h3> */}
            </div>
        )
}

export default SpellsPage