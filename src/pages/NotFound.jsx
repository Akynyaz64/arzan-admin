import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import not_found_img from "../assets/404.png";

const NotFound = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="row no-gutters height-self-center">
                    <div className="col-sm-12 text-center align-self-center">
                        <div className="iq-error position-relative">
                            <img src={not_found_img} className="img-fluid iq-error-img w-50" alt="404" />
                            <h2 className="mb-0 mt-4">Gözleýän sahypaňyz tapylmady!</h2>
                            <Link to={"/admin"} className="btn btn-primary d-inline-flex align-items-center mt-3">
                                <FontAwesomeIcon icon={faHome} className="mr-2" /> Baş sahypa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
