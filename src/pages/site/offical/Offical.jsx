import React from 'react'

import profile from '../../../assets/cards/offical/circle/100haryt.png'
import phone from '../../../assets/icons/phone-bold.svg'
import location from '../../../assets/icons/location.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import cheap_1 from '../../../assets/cards/cheap/1.png'
import cheap_2 from '../../../assets/cards/cheap/2.png'
import cheap_3 from '../../../assets/cards/cheap/3.png'
import cheap_4 from '../../../assets/cards/cheap/4.png'
import cheap_5 from '../../../assets/cards/cheap/5.png'
import { Link } from 'react-router-dom'
import OfficalBanner from '../../../components/banners/OfficalBanner'

const Offical = () => {
    return (
        <>
            <div className='container mt-4'>
                <div className='text-center'>
                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "60%" }}>
                            <OfficalBanner />
                        </div>
                    </div>
                    <div className='row justify-content-center g-0'>
                        <div className='col-xl-12 position-relative'>
                            <img src={profile} alt="" className='img-fluid' style={{ marginTop: "-80px" }} />
                        </div>
                        <div className='col-xl-12 h5 mt-1 mb-3'>
                            @100haryt.com
                        </div>
                        <div className='col-xl-12 mb-3 text-secondary'>
                            <img src={phone} alt='' className='img-fluid me-2' />
                            993 61 000000
                        </div>
                        <div className='col-xl-12 mb-3 text-secondary'>
                            <img src={location} alt='' className='img-fluid me-2' />
                            Ashgabat
                        </div>
                        <div className='col-xl-12 mb-3 text-secondary d-flex justify-content-center'>
                            <div style={{ width: "60%" }}>
                                Ваш комфорт, наше удовольствие! Мы как интернет-магазин 100haryt предлагаем вам товары на любой вкуc. Компьютеры, телефоны, малая бытовая техника, товары для дома, книги, игрушки для детей и многое другое. Покупка в нашем интернет магазине - это быстро, легко и удобно. Мы еженедельно будем радовать вас скидками, акциями и спец.предложениями.                            </div>
                        </div>
                        <div className='col-xl-2 border-end my-3'>
                            <b>150</b>
                            <div>Garaşylýar</div>
                        </div>
                        <div className='col-xl-2 border-end my-3'>
                            <b>267</b>
                            <div>Kabul edilmedi</div>
                        </div>
                        <div className='col-xl-2 my-3'>
                            <b>94</b>
                            <div>Tassyklandy</div>
                        </div>
                        <div className='col-xl-12 my-3'>
                            <Link to="/offical/follow" className='btn btn-green me-3' style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                Yzarla
                            </Link>
                            <button className='btn btn-light border' style={{ paddingLeft: "60px", paddingRight: "60px" }}>
                                Teswirler ( 45/200 )
                            </button>
                        </div>
                    </div>
                </div>

                {/* CHEAP */}
                <div className='container mt-2'>
                    <div className='d-flex justify-content-center'>
                        <div className='w-75'>
                            <div className='h3'>Pending</div>
                            <div className='row mt-3'>
                                <div className='col-xl-4 mb-3'>
                                    <div className='card rounded-1'>
                                        <img src={cheap_1} alt="" className='img-fluid' />
                                        <div className='position-absolute p-2 end-0'>
                                            <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                                        </div>
                                        <div className='card-body p-2'>
                                            <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                                <div className='small text-secondary'>19.02.2022</div>
                                                <div className='small text-secondary'>
                                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                                    121
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 mb-3'>
                                    <div className='card rounded-1'>
                                        <img src={cheap_2} alt="" className='img-fluid' />
                                        <div className='position-absolute p-2 end-0'>
                                            <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                                        </div>
                                        <div className='card-body p-2'>
                                            <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                                <div className='small text-secondary'>19.02.2022</div>
                                                <div className='small text-secondary'>
                                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                                    121
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 mb-3'>
                                    <div className='card rounded-1'>
                                        <img src={cheap_3} alt="" className='img-fluid' />
                                        <div className='position-absolute p-2 end-0'>
                                            <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                                        </div>
                                        <div className='card-body p-2'>
                                            <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                                <div className='small text-secondary'>19.02.2022</div>
                                                <div className='small text-secondary'>
                                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                                    121
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 mb-3'>
                                    <div className='card rounded-1'>
                                        <img src={cheap_4} alt="" className='img-fluid' />
                                        <div className='position-absolute p-2 end-0'>
                                            <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                                        </div>
                                        <div className='card-body p-2'>
                                            <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                                <div className='small text-secondary'>19.02.2022</div>
                                                <div className='small text-secondary'>
                                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                                    121
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 mb-3'>
                                    <div className='card rounded-1'>
                                        <img src={cheap_5} alt="" className='img-fluid' />
                                        <div className='position-absolute p-2 end-0'>
                                            <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                                        </div>
                                        <div className='card-body p-2'>
                                            <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                                <div className='small text-secondary'>19.02.2022</div>
                                                <div className='small text-secondary'>
                                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                                    121
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offical