import { useState } from 'react'
import img_icon from '../../../assets/icons/img.svg'

const PhotoCreate = () => {

    const [webImage, setWebImage] = useState(null)

    const [appImage, setAppImage] = useState(null)

    const onImageChangeWeb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setWebImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onImageChangeApp = (event) => {
        if (event.target.files && event.target.files[0]) {
            setAppImage(URL.createObjectURL(event.target.files[0]));
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
                                <div className='col-xl-4 mb-4'>
                                    {
                                        webImage === null
                                            ?
                                            <>
                                                <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                                    <img src={img_icon} alt="" className='img-fluid mb-2' />
                                                    <div className='text-green'>App surat goş</div>
                                                </label>

                                                <input type="file" name="banner_img" id="upload" hidden onChange={onImageChangeWeb} />
                                            </>
                                            :
                                            <>
                                                <img alt="" src={webImage} className='img-fluid' />
                                            </>
                                    }
                                </div>
                                <div className='col-xl-8 mb-4'>
                                    {
                                        appImage === null
                                            ?
                                            <>
                                                <label className='label text-center d-flex justify-content-center align-items-center flex-column' htmlFor="upload">
                                                    <img src={img_icon} alt="" className='img-fluid mb-2' />
                                                    <div className='text-green'>Web surat goş</div>
                                                </label>

                                                <input type="file" name="banner_img" id="upload" hidden onChange={onImageChangeApp} />
                                            </>
                                            :
                                            <>
                                                <img alt="" src={appImage} className='img-fluid' />
                                            </>
                                    }
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationDefault02">Title</label>
                                    <input type="text" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationDefault02">Note</label>
                                    <textarea type="number" className="form-control" id="validationDefault02" required rows={6}></textarea>
                                </div>
                                <div className='col-xl-12'>
                                    <div className="form-check form-switch ms-3">
                                        <input name='isActive' className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Is Active</label>
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

export default PhotoCreate