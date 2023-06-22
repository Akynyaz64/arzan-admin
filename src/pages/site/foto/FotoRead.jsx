import React from 'react'
import arzanTm from '../../../assets/cards/posts/arzanTm.png'

import img_1 from '../../../assets/cards/foto-detail/1.png'
import img_2 from '../../../assets/cards/foto-detail/2.png'
import img_3 from '../../../assets/cards/foto-detail/3.png'
import img_4 from '../../../assets/cards/foto-detail/4.png'
import img_5 from '../../../assets/cards/foto-detail/5.png'
import img_6 from '../../../assets/cards/foto-detail/6.png'
import img_7 from '../../../assets/cards/foto-detail/7.png'
import img_8 from '../../../assets/cards/foto-detail/8.png'
import img_9 from '../../../assets/cards/foto-detail/9.png'

const FotoRead = () => {
    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div className='text-green'>Surat</div>
                <div className='mx-2'>/</div>
                <div>ArzanTM-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
            </div>

            <div className='container mt-2'>
                <div className='d-flex align-items-center mb-4'>
                    <img src={arzanTm} alt="" className='img-fluid me-2' style={{ width: "60px" }} />
                    <div>ArzanTm</div>
                </div>

                <div className='row gx-3 justify-content-start'>
                    <div className='col-auto mb-3'>
                        <img src={img_1} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_2} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_3} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_4} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_5} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_6} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_7} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_8} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={img_9} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FotoRead