import {useContext, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../context/AuthContext";
import login_img from "../../../assets/auth/login.png";
import not_see from "../../../assets/icons/not-see.svg";

const Login = () => {
    const {login} = useContext(AuthContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const email = useRef("");
    const password = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        let payload = {
            email: email.current.value,
            password: password.current.value,
        };
        await login(payload);

        setIsSubmitting(false);
    };

    //PASSWORD SHOW
    const [isVisible1, setVisible1] = useState(false);

    const toggle1 = () => {
        setVisible1(!isVisible1);
    };

    return (
        <>
            <section className="login-content">
                <div className="container">
                    <div className="row align-items-center justify-content-center height-self-center">
                        <div className="col-lg-6">
                            <div className="card auth-card shadow">
                                <div className="d-flex align-items-center auth-content">
                                    <div className="col-xl-12 align-self-center">
                                        <div className="col-12 text-center align-self-center mb-2">
                                            <img src={login_img} alt="login" className="img-fluid" />
                                        </div>
                                        <div className="p-3">
                                            <h2 className="fw-bold">Ulgama gir</h2>
                                            <p className="my-4 text-secondary">Administrator paneline girmek.</p>
                                            <form onSubmit={submitHandler}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="floating-label form-group">
                                                            <input className="floating-input form-control" id="email" type="email" name="email" placeholder="" ref={email} required />
                                                            <label>Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="floating-label form-group input-group">
                                                            <input className="floating-input form-control " type={!isVisible1 ? "password" : "text"} id="password" name="password" placeholder="" ref={password} required />
                                                            <label style={{zIndex: "5"}}>Açar sözi</label>
                                                            <span className="input-group-text bg-white border-start-0" style={{cursor: "pointer"}} onClick={toggle1}>
                                                                {isVisible1 ? <FontAwesomeIcon icon={faEye} className="text-muted" /> : <img src={not_see} alt="icon" className="img-fluid" />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-success btn-lg rounded-3 text-center" disabled={isSubmitting}>
                                                        {isSubmitting ? "Tassyklanýar..." : "Tassykla"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
