import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import banner from '../../../assets/banners/video/1.png'

import img_1 from '../../../assets/cards/foto/1.png'
import img_2 from '../../../assets/cards/foto/2.png'
import img_3 from '../../../assets/cards/foto/3.png'
import img_4 from '../../../assets/cards/foto/4.png'
import img_5 from '../../../assets/cards/foto/5.png'
import img_6 from '../../../assets/cards/foto/6.png'

import haryt100 from '../../../assets/cards/posts/100haryt.png'
import arzanTm from '../../../assets/cards/posts/arzanTm.png'
import lays from '../../../assets/cards/posts/lays.png'
import halk_market from '../../../assets/cards/posts/halk-market.png'
import balary from '../../../assets/cards/posts/balary.png'
import mercedes_benz from '../../../assets/cards/posts/mercedes-benz.png'

import download from '../../../assets/icons/download.svg'
import eye from '../../../assets/icons/eye.png'
import like from '../../../assets/icons/like.svg'
import like_empty from '../../../assets/icons/like-empty.svg'

import grid_little from '../../../assets/icons/grid-little.svg'
import grid_big from '../../../assets/icons/grid-big.svg'

import star from '../../../assets/icons/star.svg'
import play from '../../../assets/icons/play.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBackward, faDownload, faExpand, faForward, faPause, faPlay, faPlayCircle, faTimes, faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons'

import asset_video from '../../../assets/video/video.mp4'
import './video-player.css'

const Video = () => {

    const [grid, setGrid] = useState(false)

    const videoRef = useRef(null);

    const [playing, setPlaying] = useState(false);

    const [videoTime, setVideoTime] = useState(0);

    const [currentTime, setCurrentTime] = useState(0);

    const [progress, setProgress] = useState(0);

    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
            var vid = document.getElementById("video1");
            setVideoTime(vid.duration);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };

    const revert = () => {
        videoRef.current.currentTime -= 5;
    };

    window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
    }, 1000);

    const handleVideoProgress = (e) => {
        console.log((e.pageX / e.target.offsetWidth) * 100);
        videoRef.current.currentTime = 100 * e.pageX / e.target.offsetWidth
    };


    return (
        <>
            <div className='container d-flex align-items-center my-4'>
                <div className='text-green'>Baş sahypa</div>
                <div className='mx-2'>/</div>
                <div>Wideo</div>
            </div>

            <div className='container my-2'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='h3'>Wideo <span className='text-green'>(+19)</span></div>
                    <div className='d-flex align-items-center'>
                        <img src={grid_little} alt="" className='me-2' style={{ width: "24px", cursor: "pointer" }} onClick={() => setGrid(false)} />
                        <img src={grid_big} alt="" className='ms-2' style={{ width: "25px", cursor: "pointer" }} onClick={() => setGrid(true)} />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Hemmesi (256)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn btn-green btn-sm rounded px-4'>Sport (65)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Awto (23)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Medeniýet (39)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Kibersport (11)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Kibersport (11)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Awto (23)</button>
                    </div>
                    <div className='col-xl-auto'>
                        <button className='btn bg-light btn-outline-green btn-sm rounded px-4'>Medeniýet (39)</button>
                    </div>
                </div>

                <div className='my-3'>
                    <img src={banner} alt="" className='img-fluid w-100' />
                </div>

                <div className='row justify-content-center'>
                    <div className='col-xl-6'>
                        <div className='d-flex align-items-center justify-content-center border-green' style={{ borderRadius: "10px 0 0 10px" }}>
                            <img src={play} alt="" className='img-fluid' />
                            Meşhurlar (65)
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='d-flex align-items-center justify-content-center border-green' style={{ borderRadius: "0 10px 10px 0" }}>
                            <img src={star} alt="" className='img-fluid' />
                            Resmiler (25)
                        </div>
                    </div>
                </div>

                <div className='row mb-5 mt-4 gx-3'>
                    <div type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={haryt100} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_1} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MOdal  */}
                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content border-0" style={{ backgroundColor: "transparent" }}>
                                <div className="modal-body">
                                    <div className='position-relative'>
                                        <video src={asset_video} id="video1" className='img-fluid' ref={videoRef}></video>
                                        {/* Video Header */}
                                        <div className='position-absolute top-0 start-0 text-white px-3 py-2 w-100'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='fw-black'>
                                                    <FontAwesomeIcon icon={faArrowLeft} />
                                                    <span className='ms-4'>Lays çipsilerinde uly arzanlaşyk bardygyny ýatladýar!</span>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img src={like_empty} alt="" style={{ width: '25px' }} /> <span className='ms-2 me-5 small'>1500</span>
                                                    <FontAwesomeIcon icon={faTimes} style={{ fontSize: "25px", cursor: "pointer" }} data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Video Footer */}
                                        <div className='position-absolute start-0 end-0 bottom-0 text-white p-3 w-100'>
                                            <div className='video-timeline' onClick={(e) => handleVideoProgress(e)}>
                                                <div className='progress-area'>
                                                    <span>{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</span>
                                                    <div className='progress-bar' style={{ width: `${progress}%` }}></div>
                                                </div>
                                            </div>
                                            <div className='video-controls'>
                                                <div className='options left'>
                                                    <button className='volume'><FontAwesomeIcon icon={faVolumeHigh} /></button>
                                                    <input type="range" />
                                                    <div className='video-timer'>
                                                        <div className='current-time'>{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</div>
                                                        <div className='separator'>/</div>
                                                        <div className='video-duration'>{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</div>
                                                    </div>
                                                </div>
                                                <div className='options center'>
                                                    <button onClick={revert} className='skip-backward' ><FontAwesomeIcon icon={faBackward} /></button>
                                                    <button className='play-pause'>
                                                        {
                                                            playing ? (
                                                                <FontAwesomeIcon icon={faPause} onClick={() => videoHandler("pause")} />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faPlay} onClick={() => videoHandler("play")} />
                                                            )
                                                        }
                                                    </button>
                                                    <button onClick={fastForward} className='skip-forward'><FontAwesomeIcon icon={faForward} /></button>
                                                </div>
                                                <div className='options right'>
                                                    <button className='download'><FontAwesomeIcon icon={faDownload} /></button>
                                                    <button className='fullscreen'><FontAwesomeIcon icon={faExpand} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={arzanTm} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_2} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={lays} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_3} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={halk_market} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_4} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={balary} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_5} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like_empty} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/video" className={`col-xl-4 mb-3 text-decoration-none text-dark ${grid === true ? "col-xl-6" : null}`}>
                        <div className='card rounded-21'>
                            <div className='card-body d-flex align-items-center'>
                                <img src={mercedes_benz} alt="" className='img-fluid me-2' style={{ width: "40px" }} />
                                <div>100haryt.com</div>
                            </div>
                            <div className='position-relative d-flex justify-content-center align-items-center'>
                                <img src={img_6} alt="" className='img-fluid w-100' />
                                <div className='card-img-overlay' style={{ top: "40%", left: "40%" }}>
                                    <FontAwesomeIcon icon={faPlayCircle} className='h1 opacity-75 text-white' />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='card-title' style={{ fontWeight: "500" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..</div>
                                <div className='d-flex align-items-center justify-content-between small text-secondary'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>19.02.2022</div>
                                        <div className='d-flex align-items-center ms-3'>
                                            <img src={download} alt="" className='img-fluid' />
                                            <span>155</span>
                                        </div>
                                        <div className='text-secondary d-flex align-items-center ms-3'>
                                            <img src={eye} alt="" className='img-fluid me-1' />
                                            <span>14,756</span>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center me-3'>
                                        <span>8,768</span>
                                        <img src={like} alt="" className='img-fluid ms-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Video