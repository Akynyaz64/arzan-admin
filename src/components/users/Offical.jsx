import { Link } from 'react-router-dom'

//IMAGES
import user_bold from '../../assets/icons/user-bold.svg'
import haryt100 from '../../assets/cards/offical/circle/100haryt.png'
import wallet from '../../assets/icons/wallet.svg'
import plus from '../../assets/icons/plus.svg'
import news from '../../assets/icons/news.svg'
import foot from '../../assets/icons/foot.svg'
import service from '../../assets/icons/service.svg'
import selected from '../../assets/icons/selected.svg'
import logout_img from '../../assets/icons/logout.svg'
import bell from '../../assets/icons/bell.svg'

const Offical = () => {

    const handleLogout = () => {

    };

    return (
        <>
            <div className="dropdown ms-5">
                <div className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={haryt100} alt="" className='me-1' style={{ width: "40px" }} />
                </div>
                <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link to="/offical" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={user_bold} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Profil
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile/wallet" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={wallet} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Gapjyk
                        </Link>
                    </li>
                    <li>
                        <Link to="/post-gosmak" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={plus} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Post goşmak
                        </Link>
                    </li>
                    <li>
                        <Link to="/post-gosmak" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={service} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Hyzmat aatyn almak
                        </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <div className="dropdown-item d-flex align-items-center mb-2" style={{ cursor: "pointer" }} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img src={foot} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Myhmanlar
                        </div>
                    </li>
                    <li>
                        <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={news} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Rassylka
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={selected} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Bellenenler
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
                            <img src={bell} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Bildirişler
                            <span className='small bg-danger px-1 rounded-circle ms-2 text-white' style={{ fontSize: "8px" }}>23</span>
                        </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <div onClick={handleLogout} className="dropdown-item d-flex align-items-center mb-2 pe-4 text-danger" style={{ cursor: "pointer" }}>
                            <img src={logout_img} alt='' className='img-fluid me-2' style={{ width: "16px" }} />
                            Ulgamdan çykmak
                        </div>
                    </li>
                </ul>
            </div>

            {/* GUESTS  */}
            <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header shadow">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Myhmanlar <span className='text-green'>(+57)</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ backgroundColor: "#F9FAFC" }}>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='rounded-circle bg-green p-1 small d-inline-block me-3'></div>
                                <div className='card border-0 py-2 px-3 shadow-sm w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img src={haryt100} alt="" style={{ width: "30px" }} />
                                            <span className='small ms-2'>Kemal Hojayew</span>
                                        </div>
                                        <div className='text-secondary small'>
                                            5 minut öň
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='card border-0 py-2 px-3 shadow-sm w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img src={haryt100} alt="" style={{ width: "30px" }} />
                                            <span className='small ms-2'>Kemal Hojayew</span>
                                        </div>
                                        <div className='text-secondary small'>
                                            5 minut öň
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

export default Offical