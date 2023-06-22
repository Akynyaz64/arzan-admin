import { useState } from 'react';

//FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

//IMAGES
import user_tick from '../../assets/icons/user-bold-tick.svg'
import key from '../../assets/icons/key.svg'
import not_see from '../../assets/icons/not-see.svg'
import phone_img from '../../assets/icons/phone-bold.svg'
import user from '../../assets/icons/user.svg'
import { Link } from 'react-router-dom';

const Auth = () => {

    //PASSWORD SHOW
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);

    const toggle1 = () => {
        setVisible1(!isVisible1);
    };

    const toggle2 = () => {
        setVisible2(!isVisible2);
    };

    const toggle3 = () => {
        setVisible3(!isVisible3);
    };


    //REGISTER
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const registerUser = async (e) => {
        e.preventDefault();
    }

    //LOGIN
    const [login_phone, setLogin_phone] = useState("")
    const [login_pass, setLogin_Password] = useState("")

    const loginUser = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content px-4 py-2">
                    <div className="modal-header d-flex justify-content-center border-0">
                        <div className="modal-title" id="staticBackdropLabel">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button style={{ borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500" }} className="text-dark nav-link active px-5 bg-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        Ulgama girmek
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500" }} className="text-dark nav-link px-5 bg-light" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                        Agza bolmak
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="tab-content" id="pills-tabContent">
                            {/* Login */}
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                <div className="d-flex justify-content-center align-items-center flex-column">

                                    <input value={login_phone} onChange={(e) => setLogin_phone(e.target.value)} name='name' className="form-control ps-5" type="text" placeholder="Ulanyjy ady" style={{ background: `url(${user}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                    <div className="input-group ms-3 mb-4">
                                        <input value={login_pass} onChange={(e) => setLogin_Password(e.target.value)} name='password' className="form-control ps-5 mt-4 border-end-0 flex-grow-0" type={!isVisible1 ? "password" : "text"} placeholder="Açar sözi" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                        <span className="input-group-text mt-4 bg-white border-start-0" id="basic-addon1" style={{ cursor: "pointer" }} onClick={toggle1}>
                                            {isVisible1 ? <FontAwesomeIcon icon={faEye} className='text-muted' /> : <img src={not_see} alt="" className='img-fluid' />}
                                        </span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="ms-2">
                                        <input type="checkbox" className="form-check-input me-2 p-2" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Ýatda sakla</label>
                                    </div>
                                    <div className='me-2'>
                                        <Link to='/' className='text-secondary text-decoration-none'>Açar sözi unutdym</Link>
                                    </div>
                                </div>
                                <div className="border-0 d-grid mt-3" style={{ justifyContent: 'unset' }}>
                                    <button onClick={loginUser} type="button" className="btn btn-green">Ulgama gir</button>
                                </div>
                            </div>
                            {/* Login */}

                            {/* Register */}
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                <div className="d-flex justify-content-center flex-column">
                                    <label className="mb-2 ms-1 fw-black small">Çagyranyň linki, QR-kody ýa-da nomeri</label>
                                    <input className="form-control ps-5 mb-4" type="text" placeholder="Çagyranyň linki, QR-kody ýa-da nomeri" style={{ background: `url(${user_tick}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                    <label className="mb-2 ms-1 fw-black small">Ulanyjy ady <span className='text-danger'>*</span></label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' className="form-control ps-5 mb-4" type="text" placeholder="Ulanyjy ady" style={{ background: `url(${user}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                    <label className="ms-1 mb-1 fw-black small">Telefon belgisi <span className='text-danger'>*</span></label>
                                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" min="60000000" max="65999999" name='phone' className="form-control ps-5 mb-4" placeholder="Telefon belgisi" style={{ background: `url(${phone_img}) no-repeat left`, backgroundPositionX: "20px", width: "400px" }} />

                                    <div className="input-group mb-4">
                                        <label className="mb-2 ms-1 fw-black small">Açar sözi <span className='text-danger'>*</span></label>
                                        <input type={!isVisible2 ? "password" : "text"} value={pass} onChange={(e) => setPassword(e.target.value)} name='pass' className="form-control ps-5 border-end-0 flex-grow-0 rounded" placeholder="Açar sözi" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                        <span className="input-group-text bg-white border-start-0" id="basic-addon1" style={{ cursor: "pointer" }} onClick={toggle2}>
                                            {isVisible2 ? <FontAwesomeIcon icon={faEye} className='text-muted' /> : <img src={not_see} alt="" className='img-fluid' />}
                                        </span>
                                    </div>

                                    <div className="input-group mb-4">
                                        <label className="mb-2 ms-1 fw-black small">Açar sözi (tassykla) <span className='text-danger'>*</span></label>
                                        <input type={!isVisible3 ? "password" : "text"} value={cPassword} onChange={(e) => setCPassword(e.target.value)} name='confirm_pass' className="form-control ps-5 border-end-0 flex-grow-0 rounded" placeholder="Açar sözi (tassykla)" style={{ background: `url(${key}) no-repeat left`, backgroundPositionX: "20px", width: "360px" }} />
                                        <span className="input-group-text bg-white border-start-0" id="basic-addon1" style={{ cursor: "pointer" }} onClick={toggle3}>
                                            {isVisible3 ? <FontAwesomeIcon icon={faEye} className='text-muted' /> : <img src={not_see} alt="" className='img-fluid' />}
                                        </span>
                                    </div>
                                </div>

                                <label className="ms-1 mb-1 fw-black small">Tassyklama görnüşi</label>
                                <select className="form-select mb-3" aria-label="Tassyklama koduny al" style={{ width: "400px" }} disabled>
                                    <option defaultValue>Tassyklama koduny al</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                                <div className="ms-2">
                                    <input type="checkbox" className="form-check-input me-2 p-2" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Düzgunnamany okadym we kabul etdim</label>
                                </div>

                                <div className="border-0 d-grid mt-3" style={{ justifyContent: 'unset' }}>
                                    <button onClick={registerUser} data-bs-toggle="modal" data-bs-target="#exampleModalVertification" type="button" className="btn btn-green">Ulgama gir</button>
                                </div>
                            </div>
                            {/* Register */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth