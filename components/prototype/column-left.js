import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import './column-left.scss'

const Columnleft = () =>(
    <div>
        <div style={{background: "#2C5097", paddingTop:30,paddingBottom:30 ,textAlign:"center"}} > 
            <Link href="index">
                <a className="text-menu-button-home" >WEBSITE NAME</a>
            </Link>
        </div>
        
                <aside className="menu is-hidden-mobile "  style={{color:"#8D9094", paddingLeft: 50, paddingTop: 80 }}>
                    <ul className="menu-list  ">
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/catalog">
                                    <a className="text-menu-button">CATALOG</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/member">
                                    <a className="text-menu-button">MEMBERS</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/checkout">
                                    <a className="text-menu-button">CHECKOUT</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/discount">
                                    <a className="text-menu-button">DISCOUNT</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/erm">
                                     <a className="text-menu-button">ERM</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="/order">
                                     <a className="text-menu-button">ORDERS</a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </aside>

    </div>

)

export default Columnleft