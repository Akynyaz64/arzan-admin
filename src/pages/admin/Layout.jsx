import {useContext, useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faAward, faBars, faBell, faCalendarWeek, faChevronDown, faChevronUp, faCog, faCoins, faHandHoldingDollar, faHistory, faHome, faImage, faImages, faList, faMapLocationDot, faSignOutAlt, faTags, faTh, faUserCheck, faUserPlus, faUsers, faUsersBetweenLines, faVideo} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthContext";
import "../../Admin.css";

const AdminLayout = () => {
    const {logout} = useContext(AuthContext);
    const [isVisible, setIsVisible] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <div className="wrapper">
                <div className={isVisible ? "iq-sidebar sidebar-default left" : "iq-sidebar sidebar-default"}>
                    <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                        <NavLink to={"/"} className="header-logo">
                            <h5 className="logo-title light-logo ml-3 text-green">ARZAN TM</h5>
                        </NavLink>
                        <div
                            className="iq-menu-bt-sidebar ml-0"
                            onClick={() => {
                                setIsVisible(!isVisible);
                            }}
                        >
                            <FontAwesomeIcon className="wrapper-menu" icon={faBars} />
                        </div>
                    </div>
                    <div className="data-scrollbar" data-scroll="1">
                        <nav className="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" className="iq-menu">
                                <li>
                                    <NavLink to={"/admin"} className="svg-icon" end>
                                        <FontAwesomeIcon icon={faHome} />
                                        <span className="ml-4">Esasy Sahypa</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"users"} className="svg-icon" end>
                                        <FontAwesomeIcon icon={faUsers} />
                                        <span className="ml-4">Ulanyjylar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"posts"} className="svg-icon">
                                        <FontAwesomeIcon icon={faTags} />
                                        <span className="ml-4">Arzanladyşlar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"categories"} className="svg-icon">
                                        <FontAwesomeIcon icon={faList} />
                                        <span className="ml-4">Arzanladyş kategoriýalary</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"subcategories"} className="svg-icon">
                                        <FontAwesomeIcon icon={faTh} />
                                        <span className="ml-4">Arzanladyş sub kategoriýalary</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"banners"} className="svg-icon">
                                        <FontAwesomeIcon icon={faImages} />
                                        <span className="ml-4">Bannerler</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"photos"} className="svg-icon">
                                        <FontAwesomeIcon icon={faImage} />
                                        <span className="ml-4">Galereýalar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"videos"} className="svg-icon">
                                        <FontAwesomeIcon icon={faVideo} />
                                        <span className="ml-4">Wideolar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"page_categories"} className="svg-icon">
                                        <FontAwesomeIcon icon={faList} />
                                        <span className="ml-4">Page kategoriýalary</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"services"} className="svg-icon">
                                        <FontAwesomeIcon icon={faHandHoldingDollar} />
                                        <span className="ml-4">Hyzmatlar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"service-requests"} className="svg-icon">
                                        <FontAwesomeIcon icon={faHandHoldingDollar} />
                                        <span className="ml-4">Hyzmat ýüz tutmalar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"coins"} className="svg-icon">
                                        <FontAwesomeIcon icon={faCoins} />
                                        <span className="ml-4">Coin paketler</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"top_list"} className="svg-icon" end>
                                        <FontAwesomeIcon icon={faUsersBetweenLines} />
                                        <span className="ml-4">TOP List</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"top_list/limit"} className="svg-icon">
                                        <FontAwesomeIcon icon={faUserCheck} />
                                        <span className="ml-4">TOP List limitler</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"payment_history"} className="svg-icon">
                                        <FontAwesomeIcon icon={faHistory} />
                                        <span className="ml-4">Töleg taryhlary</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <Link
                                        className={isCollapsed ? "collapsed justify-content-between" : "justify-content-between"}
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                        onClick={() => {
                                            setIsCollapsed(!isCollapsed);
                                        }}
                                    >
                                        <div>
                                            <FontAwesomeIcon icon={faAward} />
                                            <span className="ml-4">Action rewards</span>
                                        </div>
                                        {isCollapsed ? <FontAwesomeIcon icon={faChevronDown} className="mr-0" /> : <FontAwesomeIcon icon={faChevronUp} className="mr-0" />}
                                    </Link>
                                    <ul id="category" className={isCollapsed ? "iq-submenu collapse" : "iq-submenu"} data-parent="#iq-sidebar-toggle">
                                        <li>
                                            <NavLink to={"reward/follow"} className="svg-icon">
                                                <FontAwesomeIcon icon={faUserPlus} />
                                                <span className="ml-3">Follow rewards</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"reward/streak"} className="svg-icon">
                                                <FontAwesomeIcon icon={faCalendarWeek} />
                                                <span className="ml-4">Streak rewards</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to={"welayats"} className="svg-icon">
                                        <FontAwesomeIcon icon={faMapLocationDot} />
                                        <span className="ml-4">Welaýatlar</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"notifications"} className="svg-icon">
                                        <FontAwesomeIcon icon={faBell} />
                                        <span className="ml-4">Bildirişler</span>
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to={"comments"} className="svg-icon">
                                        <FontAwesomeIcon icon={faMessage} />
                                        <span className="ml-4">Teswirler</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"pages"} className="svg-icon">
                                        <FontAwesomeIcon icon={faFileText} />
                                        <span className="ml-4">Sahypalar</span>
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to={"publication_types"} className="svg-icon">
                                        <FontAwesomeIcon icon={faCog} />
                                        <span className="ml-4">Publication Types</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="iq-top-navbar" style={{minHeight: "0"}}>
                    <div className="iq-navbar-custom">
                        <nav className="navbar navbar-light py-3 justify-content-between">
                            <div className="d-flex align-items-center">
                                <div
                                    onClick={() => {
                                        setIsVisible(!isVisible);
                                    }}
                                >
                                    <FontAwesomeIcon className="wrapper-menu" icon={faBars} />
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to={"https://arzan.info"} target="_blank" className="btn btn-green">
                                        Saýta geç
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-outline-green"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                                    Ulgamdan çyk
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="content-page">
                    <Outlet />
                </div>
            </div>
            <footer className="iq-footer">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <span className="mr-1">{new Date().getFullYear()} ©</span>
                                    <Link to={"/"}>Arzan TM</Link>.
                                </div>
                                <div className="col-lg-6 text-right">
                                    <span>
                                        Powered by{" "}
                                        <a href="https://it.net.tm/" target="_blank" rel="noreferrer">
                                            Sanly Çözgüt HJ
                                        </a>
                                        .
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default AdminLayout;
