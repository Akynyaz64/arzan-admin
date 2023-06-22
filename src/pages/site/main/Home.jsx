import HomeBanner from '../../../components/banners/HomeBanner'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons'

import img_1 from '../../../assets/cards/selected/1.png'
import img_2 from '../../../assets/cards/selected/2.png'
import img_3 from '../../../assets/cards/selected/3.png'
import img_4 from '../../../assets/cards/selected/4.png'
import img_5 from '../../../assets/cards/selected/5.png'

import konkurs from '../../../assets/cards/others/konkurs.png'
import top from '../../../assets/cards/others/top.png'
import foto from '../../../assets/cards/others/foto.png'
import video from '../../../assets/cards/others/video.png'
import offical from '../../../assets/cards/others/offical.png'

import cheap_1 from '../../../assets/cards/cheap/1.png'
import cheap_2 from '../../../assets/cards/cheap/2.png'
import cheap_3 from '../../../assets/cards/cheap/3.png'
import cheap_4 from '../../../assets/cards/cheap/4.png'
import cheap_5 from '../../../assets/cards/cheap/5.png'
import cheap_6 from '../../../assets/cards/cheap/6.png'
import cheap_7 from '../../../assets/cards/cheap/7.png'
import cheap_8 from '../../../assets/cards/cheap/8.png'
import cheap_9 from '../../../assets/cards/cheap/9.png'
import cheap_10 from '../../../assets/cards/cheap/10.png'

import offical_1 from '../../../assets/cards/offical/1.png'
import offical_2 from '../../../assets/cards/offical/2.png'
import offical_3 from '../../../assets/cards/offical/3.png'
import offical_4 from '../../../assets/cards/offical/4.png'
import offical_5 from '../../../assets/cards/offical/5.png'
import offical_6 from '../../../assets/cards/offical/6.png'
import offical_7 from '../../../assets/cards/offical/7.png'
import offical_8 from '../../../assets/cards/offical/8.png'

import mobile_banner from '../../../assets/banners/home/mobile-banner.png'
import { Stories } from '../../../components'

const Home = () => {
    return (
        <>
            <HomeBanner />

            {/* Stories */}
            <Stories />

            {/* CARDS */}
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Saýlananlar</div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='row justify-content-between mt-3'>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_1} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Iýmit
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_2} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Oýun
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_3} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Multik
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_4} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Multik
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-5'>
                        <div className='position-relative card-about'>
                            <img src={img_5} alt="About Us" className='img-fluid' />
                            <div className='position-absolute bottom-0 start-0 w-100 footer-rgba px-3 py-2'>
                                <div className='h5 text-white'>
                                    Oýun
                                </div>
                                <small className='' style={{ color: "#C4C4C4" }}>19.02.2022</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OTHERS */}
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4'>
                        <img src={konkurs} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4'>
                        <img src={top} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4'>
                        <Link to='/foto'>
                            <img src={foto} alt="" className='img-fluid w-100' />
                        </Link>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4'>
                        <Link to='/video'>
                            <img src={video} alt="" className='img-fluid w-100' />
                        </Link>
                    </div>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4'>
                        <img src={offical} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>

            {/* CHEAP */}
            <div className='container mt-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Arzanladyşlar</div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='row justify-content-between mt-3'>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_1} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_2} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_3} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_4} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_5} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_6} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_7} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_8} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_9} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-auto col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3'>
                        <div className='card rounded-1' style={{ width: "230px" }}>
                            <img src={cheap_10} alt="" className='img-fluid' />
                            <div className='position-absolute p-2 end-0'>
                                <div className='bg-green text-white small rounded-circle px-1 py-2'>23%</div>
                            </div>
                            <div className='card-body p-2'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</div>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <div className='small text-secondary'>19.02.2022</div>
                                    <div className='small text-secondary'>
                                        <FontAwesomeIcon icon={faEye} className='me-2' />
                                        121
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RESMILER */}
            <div className='container mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3'>Täze resmiler</div>
                    <Link to="/" className='bg-green text-white py-1 px-3 rounded-4 text-decoration-none'>Hemmesi <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

                <div className='row justify-content-between g-0 mt-3'>
                    <div className='col-auto mb-3'>
                        <img src={offical_1} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_2} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_3} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_4} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_5} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_6} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_7} alt="" className='img-fluid' />
                    </div>
                    <div className='col-auto mb-3'>
                        <img src={offical_8} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>

            {/* MOBILE BANNER */}
            <div className='container-fluid mt-5 p-0'>
                <img src={mobile_banner} alt="" className='img-fluid w-100' />
            </div>
        </>
    )
}

export default Home