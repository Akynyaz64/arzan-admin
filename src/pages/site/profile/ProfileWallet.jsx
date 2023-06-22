import React from 'react'

import user from '../../../assets/icons/mikki.png'
import location from '../../../assets/icons/location.svg'
import coin from '../../../assets/icons/coin.svg'

import like from '../../../assets/icons/wallet/like.png'
import chat from '../../../assets/icons/wallet/chat.png'
import footprint from '../../../assets/icons/wallet/footprint.png'
import users from '../../../assets/icons/wallet/users.png'
import user_tick from '../../../assets/icons/wallet/user-tick.png'
import calendar from '../../../assets/icons/wallet/calendar.png'

const ProfileWallet = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className='d-flex justify-content-center'>
                    <div style={{ width: "60%" }}>
                        <div className='row justify-content-between align-items-center mb-4'>
                            <div className='col-xl-6 d-flex align-items-center'>
                                <img src={user} alt="" className='img-fluid' style={{ width: "100px" }} />
                                <div className='ms-4'>
                                    <div className='h5'>ulanyjy_001</div>
                                    <div className='d-flex align-items-center text-secondary'>
                                        <img src={location} alt="" className='img-fluid me-1' style={{ width: "11px" }} />
                                        <small>Ashgabat</small>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-6 d-flex justify-content-end'>
                                <div className='btn-coin'>
                                    <div className=''>1285</div>
                                    <img src={coin} alt="" className='img-fluid ms-2' style={{ width: "18px" }} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button style={{ borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500", padding: "10px 110px" }} className="text-dark nav-link active  bg-light border" id="pills-day-tab" data-bs-toggle="pill" data-bs-target="#pills-day" type="button" role="tab" aria-controls="pills-day" aria-selected="true">
                                        Gün
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ fontWeight: "500", padding: "10px 110px" }} className="text-dark nav-link bg-light rounded-0 border" id="pills-week-tab" data-bs-toggle="pill" data-bs-target="#pills-week" type="button" role="tab" aria-controls="pills-week" aria-selected="false">
                                        Hepde
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500", padding: "10px 110px" }} className="text-dark nav-link bg-light border" id="pills-month-tab" data-bs-toggle="pill" data-bs-target="#pills-month" type="button" role="tab" aria-controls="pills-month" aria-selected="false">
                                        Aý
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-day" role="tabpanel" aria-labelledby="pills-day-tab" tabIndex="0">
                                    <div className='table-responsive'>
                                        <table className="table table-borderless align-middle">
                                            <thead className='border-bottom small text-secondary'>
                                                <tr>
                                                    <td>Ady</td>
                                                    <td className='text-end'>Mukdary</td>
                                                    <td className='text-end'>Ball</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={like} alt="" className='img-fluid me-3' />
                                                        Like
                                                    </td>
                                                    <td className='text-end pe-4'>88</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            88
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={chat} alt="" className='img-fluid me-3' />
                                                        Teswir
                                                    </td>
                                                    <td className='text-end pe-4'>16</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            32
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={footprint} alt="" className='img-fluid me-3' />
                                                        Myhmanlar
                                                    </td>
                                                    <td className='text-end pe-4'>530</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            53
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={users} alt="" className='img-fluid me-3' />
                                                        Yzarlaýjylar
                                                    </td>
                                                    <td className='text-end pe-4'>12</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            36
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={user_tick} alt="" className='img-fluid me-3' />
                                                        Çagyrma
                                                    </td>
                                                    <td className='text-end pe-4'>11</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            55
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='border-bottom'>
                                                    <td className='d-flex align-items-center'>
                                                        <img src={calendar} alt="" className='img-fluid me-3' />
                                                        Girilen gün
                                                    </td>
                                                    <td className='text-end pe-4'>5</td>
                                                    <td>
                                                        <div className='d-flex align-items-center justify-content-end' style={{ color: "#E79E12" }}>
                                                            70
                                                            <img src={coin} alt="" className='img-fluid ms-2' />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-week" role="tabpanel" aria-labelledby="pills-week-tab" tabIndex="0">
                                    2
                                </div>
                                <div className="tab-pane fade" id="pills-month" role="tabpanel" aria-labelledby="pills-month-tab" tabIndex="0">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileWallet