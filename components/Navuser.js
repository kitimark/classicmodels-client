import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
const Level = () => (
    <div>
        <nav className="level">
            {/* left */}
            <div className="level-left">
                <div className="level-item">
                    <h1 class="title has-text-light">PROTOTYPE</h1>
                </div>
            </div>

            {/* right */}
            <div>
                <div className="level-right">
                    <p className="level-item">
                        <h1 class="title has-text-light">user  </h1>
                    </p>
                    <div style={{ paddingTop:10 }}>
                        <FontAwesomeIcon icon={faUserTie}  size="2x"/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default Level