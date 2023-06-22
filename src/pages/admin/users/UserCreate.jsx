import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../../assets/icons/logo-circle.svg'
import { useState } from "react";

const UserCreate = () => {

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
                            <h3>User Create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form>
                            <div className="row">
                                <div className='col-xl-12 mb-4'>
                                    <div className="avatar-upload">
                                        <div className="avatar-edit">
                                            <input type='file' id="imageUpload" onChange={onImageChange} />
                                            <label htmlFor="imageUpload">
                                                <FontAwesomeIcon icon={faPenAlt} />
                                            </label>
                                        </div>
                                        <div className="avatar-preview">
                                            <div id="imagePreview" style={{ backgroundImage: `url(${image || logo})` }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault02">Name</label>
                                    <input type="text" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="validationDefault02">Phone number</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend2">+993</span>
                                        </div>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault02">Password</label>
                                    <input type="password" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className='col-xl-6 mb-4'>
                                    <label htmlFor="validationDefault02">Confirim password</label>
                                    <input type="password" className="form-control" id="validationDefault02" required />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationDefault04">Role</label>
                                        <select className="form-control" id="validationDefault04" required>
                                            <option defaultValue>Role</option>
                                            <option value="User">User</option>
                                            <option value="Offical">Offical</option>
                                        </select>
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

export default UserCreate