import React from 'react'
import Columnleft from './column-left'
import Level from './Navuser'


const Prototype = ({ children, title }) => (
    <div className="columns is-gapless " style={{ minHeight: '-webkit-fill-available', background: "#EBEDF2" }}>
        {/* left */}
        <div className="column is-2  " style={{ background: "#FFFFFF" }}>
            <Columnleft />
        </div>
        {/* right */}
        <div className="column  "  >
            {/* header */}
            <div  style={{ background: "#2C5097" ,paddingBottom:100}}>
                <section className ="section container" >
                    <Level title={title} />
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