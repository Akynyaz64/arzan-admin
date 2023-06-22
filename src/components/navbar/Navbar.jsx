import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { Link, NavLink } from 'react-router-dom';

//COMPONENTS
import Auth from '../auth/Auth';
import CheckSms from '../auth/CheckSms';
// import User from '../users/User';
// import Offical from '../users/Offical';

//IMAGES
import logo from '../../assets/logo/logo.svg'
import location from '../../assets/icons/location.svg'
import search from '../../assets/icons/search.svg'
import globus from '../../assets/icons/globus.svg'
import bell from '../../assets/icons/bell.svg'
import logo_circle from '../../assets/icons/logo-circle.svg'

const Navbar = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
                <div className="container">

                    {/* LOGO */}
                    <Link to="/" className="navbar-brand ps-2">
                        <img src={logo} alt="" style={{ width: "120px" }} />
                    </Link>

                    {/* RESPONSOVE BUTTON */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* NAVBAR */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4">
                            <li className="nav-item dropdown me-5">
                                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>
                                        <img src={location} alt="" className='img-fluid me-1' />
                                        Ashgabat
                                    </span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item">Ashgabat</Link></li>
                                    <li><Link to='/' className="dropdown-item">Ahal</Link></li>
                                    <li><Link to='/' className="dropdown-item">Balkan</Link></li>
                                    <li><Link to='/' className="dropdown-item">Dashoguz</Link></li>
                                    <li><Link to='/' className="dropdown-item">Mary</Link></li>
                                    <li><Link to='/' className="dropdown-item">Lebap</Link></li>
                                </ul>
                            </li>
                            <form className="d-flex ms-5">
                                <input className="form-control me-2 rounded-0 ps-5" type="search" placeholder="Gözle..." style={{ background: `url(${search}) no-repeat left`, backgroundPositionX: "20px", width: "500px" }} />
                            </form>
                            <li className="nav-item dropdown me-5 ms-5">
                                <NavLink to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>
                                        <img src={globus} alt="" className='img-fluid me-1' />
                                        Türkmençe
                                    </span>
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><Link to='/' className="dropdown-item text-capitalize">русский</Link></li>
                                    <li><Link to='/' className="dropdown-item">English</Link></li>
                                </ul>
                            </li>
                            <div className="dropdown mt-2">
                                <div className="position-relative" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={bell} alt="" className='me-1' style={{ width: "20px" }} />
                                    <span className="position-absolute translate-middle badge rounded-circle px-1 bg-danger" style={{ top: "6px", left: "22px" }}>
                                        23
                                    </span>
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/" className="dropdown-item">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </div>

                            <>
                                <div className="ms-5">
                                    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <img src={logo_circle} alt="" className='me-1' style={{ width: "40px" }} />
                                    </div>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <Auth />
                                </div>

                                <div className="modal fade" id="exampleModalVertification" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <CheckSms />
                                </div>
                            </>

                            <>
                                {/* <User />

                                <Offical /> */}
                            </>

                        </ul>
                    </div>
                </div>
            </nav >

            {/* SIDEBAR */}
            <div className={darkMode ? `offcanvas offcanvas-start bg-dark` : `offcanvas offcanvas-start bg-white`} style={{ width: "250px" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
                <div className="offcanvas-header flex-column align-items-start p-0">
                    <div className='d-flex align-items-center justify-content-between p-3'>
                        <h5 className="offcanvas-title me-5 pe-5" id="offcanvasWithBothOptionsLabel">Logo</h5>
                        <button type="button" className={`btn-close ms-4`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar