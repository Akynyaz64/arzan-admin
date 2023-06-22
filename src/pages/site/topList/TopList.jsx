import React from 'react'
import banner from '../../../assets/banners/top-list/top-list.png'
import { Link, NavLink } from 'react-router-dom'

import user from '../../../assets/icons/mikki.png'
import coin from '../../../assets/icons/coin.svg'

const TopList = () => {
    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div>Surat</div>
            </div>

            <div className='container mt-2 '>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='h3'>Top hasaplar</div>
                    <div className='d-flex align-items-center'>
                        <div className="dropdown me-3">
                            <NavLink to="/" className="nav-link dropdown-toggle border py-1 px-4 bg-light rounded" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link to='/' className="dropdown-item">Top-50</Link></li>
                                <li><Link to='/' className="dropdown-item">Top-100</Link></li>
                                <li><Link to='/' className="dropdown-item">Top-200</Link></li>
                                <li><Link to='/' className="dropdown-item">Top-500</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle border py-1 px-4 bg-light rounded" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link to='/' className="dropdown-item">Bal boýunça</Link></li>
                                <li><Link to='/' className="dropdown-item">Agza bolan wagty boýunça</Link></li>
                                <li><Link to='/' className="dropdown-item">Arzanladyş sany boýunça</Link></li>
                                <li><Link to='/' className="dropdown-item">Like sany boýunça</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                    <img src={banner} alt="" className='img-fluid w-100' />
                </div>

                <div className='mt-3'>

                    <div className='d-flex justify-content-center'>
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button style={{ borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500", padding: "10px 110px" }} className="text-dark nav-link active  bg-light border" id="pills-day-tab" data-bs-toggle="pill" data-bs-target="#pills-day" type="button" role="tab" aria-controls="pills-day" aria-selected="true">
                                    Ulanyjylar
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button style={{ fontWeight: "500", padding: "10px 110px" }} className="text-dark nav-link bg-light rounded-0 border" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab" aria-controls="pills-week" aria-selected="false">
                                    Resmiler
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-day" role="tabpanel" aria-labelledby="pills-day-tab" tabIndex="0">
                                <div className='row justify-content-center'>
                                    <div className='col-xl-12 mb-3 d-flex justify-content-center'>
                                        <div className='w-45'>
                                            <div className='border border-2 rounded border-warning py-2 px-3 d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center fs-18 fw-black'>
                                                    <div className='pe-3'>1</div>
                                                    <img src={user} alt="" style={{ width: "40px" }} />
                                                    <div className='ps-3'>Mad Minion</div>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='text-warning fw-black me-3'>1285</div>
                                                    <img src={coin} alt="" style={{ width: "20px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-xl-12 mb-3 d-flex justify-content-center'>
                                        <div className='w-45'>
                                            <div className='border border-2 rounded border-warning py-2 px-3 d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center fs-18 fw-black'>
                                                    <div className='pe-3'>2</div>
                                                    <img src={user} alt="" style={{ width: "40px" }} />
                                                    <div className='ps-3'>agajan99</div>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='text-warning fw-black me-3'>1285</div>
                                                    <img src={coin} alt="" style={{ width: "20px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-xl-12 mb-3 d-flex justify-content-center'>
                                        <div className='w-45'>
                                            <div className='border border-2 rounded border-warning py-2 px-3 d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center fs-18 fw-black'>
                                                    <div className='pe-3'>3</div>
                                                    <img src={user} alt="" style={{ width: "40px" }} />
                                                    <div className='ps-3'>myradow-aly</div>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <div className='text-warning fw-black me-3'>1285</div>
                                                    <img src={coin} alt="" style={{ width: "20px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-week" role="tabpanel" aria-labelledby="pills-week-tab" tabIndex="0">
                                2
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopList