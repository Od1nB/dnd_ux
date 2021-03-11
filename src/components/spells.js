// import Hode from './header.js';
import './../css/spells.css';
import Spellcomp from './spellcomp.js'
import Navn from './Naaavn.js'

function spellsPage() {
    return(
        <div className="spellsPage">
            <Spellcomp/>
            <Navn/>
        </div>
    );
}

export default spellsPage