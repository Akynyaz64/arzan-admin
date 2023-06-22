import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'

import youtube from '../../assets/icons/youtube.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import instagram from '../../assets/icons/instagram.svg'

const Footer = () => {
    return (
        <>
            <div className='p-5 text-white' style={{ backgroundColor: "#0A0909" }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xl-3'>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Habarlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Dükan</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Galereýa</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3'>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Top Hasaplar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Resmiler</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Saýlananlar</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3'>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Ulanyş düzgünleri</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Habarlaşmak</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" style={{ color: "#AAAAAA" }}>Biz barada</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-3 text-end'>
                            <img src={logo} alt="" className='img-fluid' />
                            <div className='mt-3' style={{ color: "#747474", fontSize: "12px" }}>@2023 ArzanTM, Turkmenistan. All rights reserved.</div>
                        </div>
                        <div className='col-xl-12 text-center mt-5'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={youtube} alt="" className='img-fluid px-3' />
                                <img src={tiktok} alt="" className='img-fluid px-3' />
                                <img src={instagram} alt="" className='img-fluid px-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer