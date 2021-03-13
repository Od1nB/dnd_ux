// import Hode from './header.js';
import './../css/spells.css';
import { useState , useEffect } from 'react';
import axios from "axios";
import SplName from './nameSpell.js'
import './../css/spellpage/spellcontainer.css'
import './../css/spellpage/spellbutton.css'

const apilvl1 = 'https://www.dnd5eapi.co/api/spells/?level=3'


function SpellsPage() {
        let [spell2 , setSpe] = useState([]);

        useEffect(() => {
            getSpellLVL1();
        }, []);

        const getSpellLVL1 = async () => {
            const response = await axios.get(apilvl1);
            setSpe(response.data.results);
        };

        function buttonClick(){
            console.log("yeaaa");
        };
        
        // console.log(spell2);
        const stats = [0,1,2,3,4,5,6,7,8,9];

        return(
            <div className="spellsPage">
                <div className="spellButtons">
                    {stats.map(numb =>(<button onClick={buttonClick}> {numb} </button>))}
                </div>
                <div className="spellContainer">
                    {
                        spell2.map(spellElem =>(
                            <SplName spell = {spellElem}/>
                        ))
                    }
                </div>
            </div>
        )
}

export default SpellsPage