import React from 'react'
import card_1 from '../../../assets/notice/1.png'
import card_2 from '../../../assets/notice/2.png'
import card_3 from '../../../assets/notice/3.png'
import card_4 from '../../../assets/notice/4.png'
import { Link } from 'react-router-dom'

const Notices = () => {
    return (
        <div style={{ height: "61vh" }}>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='h3'>Habarnama</div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-xl-8'>
                        <Link to="/habarnama/:noticeId" className='d-flex justify-content-center text-decoration-none text-dark'>
                            <div className='card mb-3' style={{ width: "780px" }}>
                                <div className='row g-0 align-items-center'>
                                    <div className='col-xl-auto p-0'>
                                        <img src={card_1} alt="" className='img-fluid' />
                                    </div>
                                    <div className='col-xl-10'>
                                        <div className='ms-3 py-1'>
                                            <div>Koton kids dukanymyzda Gyshky harytlara -50% skidka bashlandygyny size habar beryarin. Koton Kids Türk..</div>
                                            <div className='small text-primary mt-1 fw-black'>Barlanylýar..</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/habarnama/:noticeId" className='d-flex justify-content-center text-decoration-none text-dark'>
                            <div className='card mb-3' style={{ width: "780px" }}>
                                <div className='row g-0 align-items-center'>
                                    <div className='col-xl-auto p-0'>
                                        <img src={card_2} alt="" className='img-fluid' />
                                    </div>
                                    <div className='col-xl-10'>
                                        <div className='ms-3 py-1'>
                                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e..</div>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div className='small text-green mt-1 fw-black'>Tassyklandy!</div>
                                                <button className='btn btn-green btn-sm px-4'>Ugrat</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/habarnama/:noticeId" className='d-flex justify-content-center text-decoration-none text-dark'>
                            <div className='card mb-3' style={{ width: "780px" }}>
                                <div className='row g-0 align-items-center'>
                                    <div className='col-xl-auto p-0'>
                                        <img src={card_3} alt="" className='img-fluid' />
                                    </div>
                                    <div className='col-xl-10'>
                                        <div className='ms-3 py-1'>
                                            <div>Aşgabatda we ähli welaýatlarda dükanlary bolan «Nur Ýüpek» düz bambuk, özünden gülli, suzanna, fla..</div>
                                            <div className='small text-success mt-1 fw-black'>Ugradyldy!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/habarnama/:noticeId" className='d-flex justify-content-center text-decoration-none text-dark'>
                            <div className='card mb-3' style={{ width: "780px" }}>
                                <div className='row g-0 align-items-center'>
                                    <div className='col-xl-auto p-0'>
                                        <img src={card_4} alt="" className='img-fluid' />
                                    </div>
                                    <div className='col-xl-10'>
                                        <div className='ms-3 py-1'>
                                            <div>Aşgabatda we ähli welaýatlarda dükanlary bolan «Nur Ýüpek» düz bambuk, özünden gülli, suzanna, fla..</div>
                                            <div className='small text-success mt-1 fw-black'>Ugradyldy!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-6 d-flex justify-content-center mt-3'>
                        <Link to='/habarnama-gos' className='btn btn-green' style={{ width: "538px" }}>Täze habarnama goş</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notices