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
                                <a href="catalog">Catalog</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a href="member">Members</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a href="checkout">Checkout</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a href="discount">Discount</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a href="erm">ERM</a>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <a href="order">Orders</a>
                            </div>
                        </li>
                    </ul>
                </aside>

    </div>

)

export default Columnleft