import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

const Columnleft = () =>(
    <div >
                <aside className="menu is-hidden-mobile "  style={{ paddingLeft: 50, paddingTop: 100 }}>
                    <ul className="menu-list  ">
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>Catalog</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>Members</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>Checkout</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>Discount</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>ERM</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a>Orders</a>
                            </div>
                        </li>
                    </ul>
                </aside>

    </div>

)

export default Columnleft