import React from 'react'

import banner2 from '../../../assets/banners/offical/3.png'
import profile from '../../../assets/cards/offical/circle/100haryt.png'
import phone from '../../../assets/icons/phone-bold.svg'
import location from '../../../assets/icons/location.svg'
import { Link } from 'react-router-dom'
import OfficalBanner from '../../../components/banners/OfficalBanner'

const OfficalExpired = () => {
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
                        <div className='row justify-content-center' style={{ color: "#D7D7D7" }}>
                            <div className='col-xl-12 h5 mt-1 mb-3'>
                                @100haryt.com
                            </div>
                            <div className='col-xl-12 mb-3 '>
                                <img src={phone} alt='' className='img-fluid me-2' />
                                993 61 000000
                            </div>
                            <div className='col-xl-12 mb-3 '>
                                <img src={location} alt='' className='img-fluid me-2' />
                                Ashgabat
                            </div>
                            <div className='col-xl-12 mb-3  d-flex justify-content-center'>
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

                <div className='text-center'>
                    <img src={banner2} alt="" className='img-fluid' />
                </div>
            </div>
        </>
    )
}

export default OfficalExpired