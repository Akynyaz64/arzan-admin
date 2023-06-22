import React from 'react'
import card_1 from '../../../assets/notification/1.png'
import card_2 from '../../../assets/notification/2.png'
import card_3 from '../../../assets/notification/3.png'
import { Link } from 'react-router-dom'

const Notifications = () => {
    return (
        <div style={{ height: "61vh" }}>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <div className='h3'>Bildirişler</div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-xl-8'>
                        <ul className="nav nav-pills d-flex justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button style={{ borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500", paddingLeft: "156px", paddingRight: "156px" }} className="text-dark nav-link active bg-light" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                    Arzan TM
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500", paddingLeft: "156px", paddingRight: "156px" }} className="text-dark nav-link bg-light" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                    Yzarlayanlar
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mt-3" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                <Link to="/bildiris/:notificationId" className='d-flex justify-content-center text-decoration-none text-dark'>
                                    <div className='card mb-3' style={{ width: "780px" }}>
                                        <div className='row g-0 align-items-center'>
                                            <div className='col-xl-auto p-0'>
                                                <img src={card_1} alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-xl-10'>
                                                <div className='ms-3 py-1'>
                                                    <div>Koton kids dukanymyzda Gyshky harytlara -50% skidka bashlandygyny size habar beryarin. Koton Kids Türk..</div>
                                                    <div className='small text-secondary mt-1'>19.02.2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/bildiris/:notificationId" className='d-flex justify-content-center text-decoration-none text-dark'>
                                    <div className='card mb-3' style={{ width: "780px" }}>
                                        <div className='row g-0 align-items-center'>
                                            <div className='col-xl-auto p-0'>
                                                <img src={card_2} alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-xl-10'>
                                                <div className='ms-3 py-1'>
                                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e..</div>
                                                    <div className='small text-secondary mt-1'>19.02.2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/bildiris/:notificationId" className='d-flex justify-content-center text-decoration-none text-dark'>
                                    <div className='card mb-3' style={{ width: "780px" }}>
                                        <div className='row g-0 align-items-center'>
                                            <div className='col-xl-auto p-0'>
                                                <img src={card_3} alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-xl-10'>
                                                <div className='ms-3 py-1'>
                                                    <div>Aşgabatda we ähli welaýatlarda dükanlary bolan «Nur Ýüpek» düz bambuk, özünden gülli, suzanna, fla..</div>
                                                    <div className='small text-secondary mt-1'>19.02.2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                                <Link to="/bildiris/:notificationId" className='d-flex justify-content-center text-decoration-none text-dark'>
                                    <div className='card mb-3' style={{ width: "780px" }}>
                                        <div className='row g-0 align-items-center'>
                                            <div className='col-xl-auto p-0'>
                                                <img src={card_3} alt="" className='img-fluid' />
                                            </div>
                                            <div className='col-xl-10'>
                                                <div className='ms-3 py-1'>
                                                    <div>Aşgabatda we ähli welaýatlarda dükanlary bolan «Nur Ýüpek» düz bambuk, özünden gülli, suzanna, fla..</div>
                                                    <div className='small text-secondary mt-1'>19.02.2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications