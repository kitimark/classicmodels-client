import React from 'react'
import Columnright from '../components/column-right'
import Columnleft from '../components/column-left'
import Columnmiddle from '../components/colmn-mid'
import Level from '../components/Navuser'
import Head from '../components/header'

const Prototype = () => (
    <div className="columns is-full is-gapless       " style={{ minHeight: '-webkit-fill-available', background: "#FAFAFA" }}>
        {/* left */}
        <div className="column is-2 " style={{ background: "#FFFFFF" }}>
            <Columnleft />
        </div>
        {/* right */}
        <div className="column   "  >
            <div className="row" style={{ background: 'linear-gradient(to right , #5897FF, #C24DFF)' }}>
                <section class="section"  >
                    <div class="container">
                        <Level />
                    </div>
                </section>
                {/* header */}
                <section class="hero " style={{ background: "#FFFFFF", marginLeft: 40, marginRight: 40 }}>
                    <Head />
                
            
                </section>
            </div>
            {/* maincontains */}
            <Columnmiddle />
            
        </div>

    </div>

)

export default Prototype;