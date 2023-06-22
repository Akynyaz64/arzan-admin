import { useState } from "react";
import img_icon from '../../../assets/icons/img.svg'

const PostCreate = () => {

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Photo Create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form>
                            <div className="form-row">
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
                                <div className='col-xl-12 mb-4'>
                                    <label htmlFor="validationDefault02">Title</label>
                                    <input type="text" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className='col-xl-12 mb-4'>
                                    <label htmlFor="validationDefault02">Description</label>
                                    <textarea type="text" className="form-control" id="validationDefault02" required rows={6}></textarea>
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault04">Category</label>
                                    <select className="form-control" id="validationDefault04" required>
                                        <option defaultValue>Category</option>
                                        <option value="Ashgabat">Ashgabat</option>
                                        <option value="Ahal">Ahal</option>
                                        <option value="Mary">Mary</option>
                                        <option value="Lebap">Lebap</option>
                                        <option value="Dashoguz">Dashoguz</option>
                                        <option value="Balkan">Balkan</option>
                                    </select>
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault04">Subcategory</label>
                                    <select className="form-control" id="validationDefault04" required>
                                        <option defaultValue>Subcategory</option>
                                        <option value="Ashgabat">Ashgabat</option>
                                        <option value="Ahal">Ahal</option>
                                        <option value="Mary">Mary</option>
                                        <option value="Lebap">Lebap</option>
                                        <option value="Dashoguz">Dashoguz</option>
                                        <option value="Balkan">Balkan</option>
                                    </select>
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault02">Price</label>
                                    <input type="number" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault02">Discount Price</label>
                                    <input type="number" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className='col-xl-12 mb-4'>
                                    <label htmlFor="validationDefault02">Phone number</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend2">+993</span>
                                        </div>
                                        <input type="number" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault01">Start Date</label>
                                    <input type="date" className="form-control" id="validationDefault01" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault02">End Date</label>
                                    <input type="date" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className='col-xl-12 mb-4'>
                                    <label htmlFor="validationDefault02">Hashtags</label>
                                    <input type="text" className="form-control" id="validationDefault02" required />
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col-xl-3'>
                                    <select className="form-control" id="validationDefault04" required>
                                        <option defaultValue>Welayats</option>
                                        <option value="Ashgabat">Ashgabat</option>
                                        <option value="Ahal">Ahal</option>
                                        <option value="Mary">Mary</option>
                                        <option value="Lebap">Lebap</option>
                                        <option value="Dashoguz">Dashoguz</option>
                                        <option value="Balkan">Balkan</option>
                                    </select>
                                </div>
                                <div className='col-xl-7 ms-auto d-flex align-items-center justify-content-between'>
                                    <div className="form-check form-switch">
                                        <input name='isRecomended' className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label small" htmlFor="flexSwitchCheckChecked">Is Recommended</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input name='isPinned' className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label small" htmlFor="flexSwitchCheckChecked">Is Pinned</label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input name='publishDiscount' className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label small" htmlFor="flexSwitchCheckChecked">Publish Discount</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button className="btn btn-green" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCreate