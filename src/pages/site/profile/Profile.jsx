import React from 'react'

import banner from '../../../assets/banners/profile/1.png'
import profile from '../../../assets/icons/mikki-big.png'
import edit from '../../../assets/icons/edit.svg'
import phone from '../../../assets/icons/phone-bold.svg'
import location from '../../../assets/icons/location.svg'
import coin from '../../../assets/icons/coin.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import cheap_1 from '../../../assets/cards/cheap/1.png'
import cheap_2 from '../../../assets/cards/cheap/2.png'
import cheap_3 from '../../../assets/cards/cheap/3.png'
import cheap_4 from '../../../assets/cards/cheap/4.png'
import cheap_5 from '../../../assets/cards/cheap/5.png'

const Profile = () => {
    return (
        <>
            <div className='container mt-4'>
                <div className='text-center'>
                    <img src={banner} alt="" className='img-fluid' style={{ height: "400px" }} />
                    <div className='row justify-content-center g-0'>
                        <div className='col-xl-12 position-relative'>
                            <img src={profile} alt="" className='img-fluid' style={{ marginTop: "-80px" }} />
                            <span className="position-absolute translate-middle badge rounded-circle px-1 bottom-0 bg-white" style={{ right: "43%" }}>
                                <img src={edit} alt="" className='img-fluid' />
                            </span>
                        </div>
                        <div className='col-xl-12 h5 mt-1 mb-3'>
                            ulanyjy_001
                        </div>
                        <div className='col-xl-12 mb-3 text-secondary'>
                            <img src={phone} alt='' className='img-fluid me-2' />
                            993 61 000000
                        </div>
                        <div className='col-xl-12 mb-3 text-secondary'>
                            <img src={location} alt='' className='img-fluid me-2' />
                            Ashgabat
                        </div>
                        <div className='col-xl-2 border-end my-3'>
                            <b>150</b>
                            <div className='text-muted'>Garaşylýar</div>
                        </div>
                        <div className='col-xl-2 border-end my-3'>
                            <b>267</b>
                            <div className='text-muted'>Kabul edilmedi</div>
                        </div>
                        <div className='col-xl-2 my-3'>
                            <b>94</b>
                            <div className='text-muted'>Tassyklandy</div>
                        </div>
                        <div className='col-xl-12 my-3 d-flex justify-content-center'>
                            <button className='btn border-green me-2' style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                <img src={coin} alt="" className='img-fluid me-2' />
                                1285
                            </button>
                            <button className='btn btn-green ms-2' style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                Resmi hasap aç
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

export default Profile