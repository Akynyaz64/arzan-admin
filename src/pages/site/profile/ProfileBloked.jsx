import React from 'react'

import banner from '../../../assets/banners/profile/1.png'
import profile from '../../../assets/icons/mikki-big.png'
import danger from '../../../assets/icons/danger.svg'
import phone from '../../../assets/icons/phone-bold.svg'
import location from '../../../assets/icons/location.svg'

const ProfileBloked = () => {
    return (
        <>
            <div className='container my-4'>
                <div className='text-center'>
                    <img src={banner} alt="" className='img-fluid' style={{ height: "400px" }} />
                    <div className='row justify-content-center g-0'>
                        <div className='col-xl-12 position-relative'>
                            <img src={profile} alt="" className='img-fluid' style={{ marginTop: "-80px" }} />
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
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div style={{ width: "60%" }}>
                        <div className='d-flex align-items-center justify-content-center px-5 py-3' style={{ backgroundColor: "rgba(229, 0, 39, 0.1)", color: "#E50027", fontWeight: "500" }}>
                            <img src={danger} alt="" className='img-fluid me-3' />
                            <div>Siziň hasabyňyz bloklandy. Galan wagt: 3 gün 23 sagat 54 minut</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileBloked