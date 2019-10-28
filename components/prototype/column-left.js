import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Columnleft = () =>(
    <div >
                <aside className="menu is-hidden-mobile "  style={{ paddingLeft: 50, paddingTop: 100 }}>
                    <ul className="menu-list  ">
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="catalog">
                                    <a>Catalog</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="member">
                                    <a>Members</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="checkout">
                                    <a>Checkout</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="discount">
                                    <a>Discount</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="erm">
                                     <a>ERM</a>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div style={{ display: 'flex' }}>
                                <div style={{ margin: 'auto 0' }}>
                                    <FontAwesomeIcon icon={faGem} />
                                </div>
                                <Link href="order">
                                     <a>Orders</a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </aside>

    </div>

)

export default Columnleft