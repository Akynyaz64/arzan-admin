import { Link } from 'react-router-dom'

//IMAGES
import profile from '../../assets/icons/mikki.png'
import user_bold from '../../assets/icons/user-bold.svg'
import wallet from '../../assets/icons/wallet.svg'
import plus from '../../assets/icons/plus.svg'
import selected from '../../assets/icons/selected.svg'
import logout_img from '../../assets/icons/logout.svg'
import bell from '../../assets/icons/bell.svg'

const User = () => {

    const handleLogout = () => {

    };

    return (
        <div className="dropdown ms-5">
            <div className="" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={profile} alt="" className='me-1' style={{ width: "40px" }} />
            </div>
            <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
                <li>
                    <Link to="/profile" className="dropdown-item d-flex align-items-center mb-2">
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
                <li><hr className="dropdown-divider" /></li>
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
    )
}

export default User