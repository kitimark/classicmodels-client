import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_ME = gql`
{
    me {
        firstName
    }
}
`

const Level = ({ title }) =>  {
    const {loading, error, data} = useQuery(GET_ME)

    // if (loading) return <p>loading</p>
    // if (error) return <p>{error.message}</p>

    return (
        <div>
            <nav className="level">
                {/* left */}
                <div className="level-left">
                    <div className="level-item">
                        <h1 class="title has-text-light">{title}</h1>
                    </div>
                </div>

                {/* right */}
                <div>
                    <div className="level-right">
                        <p className="level-item">
                            <h1 class="title has-text-white">{(!loading) ? (error) ? error.message : data.me.firstName : 'loading'}</h1>
                        </p>
                        <div style={{color: "#383839", paddingTop:10 , paddingRight:10}}>
                            <FontAwesomeIcon icon={faUserTie}  size="2x"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Level