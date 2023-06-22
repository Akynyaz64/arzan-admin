import React from 'react'
import { useState } from 'react';
import img_icon from '../../../assets/icons/img.svg'

const NoticeCreate = () => {
    
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Habarnama goşmak</div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div style={{ width: "70%" }}>
                        <div className='row mt-3 gx-2'>
                            <div className='col-xl-12 mb-4'>
                                {
                                    image === null
                                        ?
                                        <>
                                            <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                                <img src={img_icon} alt="" className='img-fluid mb-2' />
                                                <div className='text-green'>Surat goş</div>
                                            </label>

                                            <input type="file" name="discount_img" id="upload" hidden onChange={onImageChange} />
                                        </>
                                        :
                                        <>
                                            <img alt="" src={image} className='img-fluid' />
                                        </>
                                }
                            </div>

                            <div className="col-xl-12 mb-4">
                                <input type="text" className="form-control" placeholder='Baş sözi (heading)' required />
                            </div>
                            <div className='col-xl-12 mb-4'>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Hatynyz' required></textarea>
                            </div>

                            <div className='col-xl-12 text-center mb-5'>
                                <button className='btn btn-green py-1' style={{ padding: "10px 245px" }}>Ugrat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticeCreate