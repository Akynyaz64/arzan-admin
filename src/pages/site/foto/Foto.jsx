import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/banners/foto/1.png'

import img_1 from '../../../assets/cards/foto/1.png'
import img_2 from '../../../assets/cards/foto/2.png'
import img_3 from '../../../assets/cards/foto/3.png'
import img_4 from '../../../assets/cards/foto/4.png'
import img_5 from '../../../assets/cards/foto/5.png'
import img_6 from '../../../assets/cards/foto/6.png'

import haryt100 from '../../../assets/cards/posts/100haryt.png'
import arzanTm from '../../../assets/cards/posts/arzanTm.png'
import lays from '../../../assets/cards/posts/lays.png'
import halk_market from '../../../assets/cards/posts/halk-market.png'
import balary from '../../../assets/cards/posts/balary.png'
import mercedes_benz from '../../../assets/cards/posts/mercedes-benz.png'

import gallery from '../../../assets/icons/gallery.svg'
import eye from '../../../assets/icons/eye.png'

import grid_little from '../../../assets/icons/grid-little.svg'
import grid_big from '../../../assets/icons/grid-big.svg'

const Foto = () => {

    const [grid, setGrid] = useState(false)

    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div>Surat</div>
            </div>

            <div className='container mt-2 '>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='h3'>Surat <span className='text-green'>(+21)</span></div>
                    <div className='d-flex align-items-center'>
                        <img src={grid_little} alt="" className='me-2' style={{ width: "24px", cursor: "pointer" }} onClick={() => setGrid(false)} />
                        <img src={grid_big} alt="" className='ms-2' style={{ width: "25px", cursor: "pointer" }} onClick={() => setGrid(true)} />
                    </div>
                </div>

                <div className='my-3'>
                    <img src={banner} alt="" className='img-fluid w-100' />
                </div>

                <div className='row my-5 gx-3'>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={haryt100} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_1} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={arzanTm} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_2} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={lays} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_3} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={halk_market} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_4} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={balary} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_5} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/foto/arzanTm" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={mercedes_benz} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <img src={img_6} alt="" className='img-fluid' />
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center'>
                                    <div className='text-secondary d-flex align-items-center me-3'>
                                        <img src={gallery} alt="" className='img-fluid me-1' />
                                        <span>12</span>
                                    </div>
                                    <div className='text-secondary d-flex align-items-center'>
                                        <img src={eye} alt="" className='img-fluid me-1' />
                                        <span>14,756</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Foto