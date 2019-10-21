import React from 'react'
import Columnleft from '../components/column-left'
import Level from '../components/Navuser'


const Prototype = ({ children }) => (
    <div className="columns is-gapless " style={{ minHeight: '-webkit-fill-available', background: "#FAFAFA" }}>
        {/* left */}
        <div className="column is-2  " style={{ background: "#FFFFFF" }}>
            <Columnleft />
        </div>
        {/* right */}
        <div className="column  "  >
            {/* header */}
            <div  style={{ background: 'linear-gradient(to right , #509CFF, #C948FF)' ,paddingBottom:100}}>
                <section className ="section container" >
                    <Level />
                </section>
            </div>
            {/* maincontains */}
            <div  className="container" style={{ background:"#FFFFFF" ,marginTop:-100,marginRight:65,marginLeft:65,borderRadius:"23px",boxShadow:'3px 3px 0px #00000029'}}>
                <section className ="section container" >
                    {children}
                </section>
            </div>
        </div>
    </div>
)

export default Prototype;