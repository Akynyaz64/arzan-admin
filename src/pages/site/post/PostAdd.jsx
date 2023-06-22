import React, { useState } from 'react'
import img from '../../../assets/icons/img.svg'
import phone from '../../../assets/icons/phone-bold.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const PostAdd = () => {

    const [formData, setFormData] = useState([]);

    const handleChange = (e) => {
        var files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            setFormData([...formData, URL.createObjectURL(files[i])])
        }
    };

    const handleDelete = async (id) => {
        try {
            const afterDelete = formData.filter((formData, index) => {
                return index !== id
            })
            setFormData(afterDelete)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Post goşmak</div>
                </div>

                <div className='d-flex justify-content-center'>
                    <div style={{ width: "70%" }}>
                        <div className='row mt-3 gx-2'>
                            {
                                formData.map((item, index) =>
                                    <div className='col-xl-6 mb-2' key={index}>
                                        <div className='card border-0 '>
                                            <img src={item} alt="" className='card-img' />
                                            <div className='position-absolute end-0 bottom-0'>
                                                <button onClick={() => handleDelete(index)} className='btn btn-danger' style={{ borderRadius: "5px 0px 0px 0px!important" }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='col-xl-6 mb-2 '>
                                <label className='label text-center w-100 d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                    <img src={img} alt="" className='img-fluid mb-2' />
                                    <div className='text-green'>Surat goş</div>
                                </label>
                                <input type="file" title="" id="upload" hidden multiple onChange={handleChange} />
                            </div>
                            <div className="col-xl-12 mb-4">
                                <input type="text" className="form-control" placeholder='Post ady' required />
                            </div>
                            <div className='col-xl-12 mb-4'>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Doly maglumaty' required></textarea>
                            </div>
                            <div className='col-xl-12 mb-4'>
                                <select className="form-select" disabled required>
                                    <option defaultValue>Kategoriýa saýlaň</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-xl-12 mb-4">
                                <input type="text" className="form-control" placeholder='Hash tag (#tag #tag2)' required />
                            </div>
                            <div className='col-xl-12 mb-4'>
                                <div className='d-flex align-items-center'>
                                    <input className="form-check-input me-3" type="checkbox" value="" style={{ width: "20px", height: "20px", borderRadius: "3px" }} required />
                                    <input className="form-control ps-5" type="number" placeholder="Telefon belgi" style={{ background: `url(${phone}) no-repeat left`, backgroundPositionX: "20px" }} required />
                                </div>
                            </div>
                            <div className='col-xl-6 mb-3'>
                                <div className='d-flex align-items-center'>
                                    <input className="form-check-input me-3" type="checkbox" value="" style={{ width: "20px", height: "20px", borderRadius: "3px" }} required />
                                    <input type="text" className="form-control" placeholder='Baha' required />
                                </div>
                            </div>
                            <div className='col-xl-6 mb-3'>
                                <input type="text" className="form-control" placeholder='Arzanladyş' required />
                            </div>
                            <div className='ms-4 ps-3 mb-1'>Mahabat döwri</div>
                            <div className='col-xl-6 mb-4'>
                                <div className='d-flex align-items-center'>
                                    <input className="form-check-input me-3" type="checkbox" value="" style={{ width: "20px", height: "20px", borderRadius: "3px" }} required />
                                    <input disabled type="date" className="form-control" required />
                                </div>
                            </div>
                            <div className='col-xl-6 mb-5'>
                                <input disabled type="date" className="form-control" />
                            </div>
                            <div className='col-xl-12 d-flex justify-content-between align-items-center mb-4'>
                                <div className='d-flex align-items-center'>
                                    <input className="form-check-input me-3" type="checkbox" value="" style={{ width: "20px", height: "20px", borderRadius: "3px" }} id="flexCheckDefault" required />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Düzgünleri okadym
                                    </label>
                                </div>
                                <Link to="/" className='d-flex align-items-center text-green text-decoration-none'>
                                    <FontAwesomeIcon icon={faEye} className='me-2' />
                                    Öňünden syn
                                </Link>
                            </div>
                            <div className='col-xl-12 text-center mb-5'>
                                <button className='btn btn-green' style={{ padding: "10px 145px" }}>Goşmak</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostAdd