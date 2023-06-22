import {faPenAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../../assets/icons/logo-circle.svg";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import useFetch from "../../../hooks/useFetch";

const UserCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const name = useRef("");
    const password = useRef("");
    const confirm_pass = useRef("");
    const phone = useRef("");
    const email = useRef("");
    const start_time = useRef("");
    const end_time = useRef("");

    const [type, setType] = useState("");
    const [selectedLocations, setSelectedLocations] = useState([]);

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    const handleSelectLocations = function (selectedItems) {
        const pages = [];
        console.log(typeof Number(selectedItems[0].value));
        for (let i = 0; i < selectedItems.length; i++) {
            pages.push(Number(selectedItems[i].value));
        }
        setSelectedLocations(pages);
    };

    const [locations] = useFetch("/api/v1/location/list", "data");

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        if (password.current.value !== confirm_pass.current.value) {
            toast.error("Password and confirm password are not same!");
            setIsSubmitting(false);
            return null;
        }

        const userData = new FormData();
        userData.append("name", name.current.value);
        userData.append("password", password.current.value);
        userData.append("phone", phone.current.value);
        userData.append("type", type);
        userData.append("email", email.current.value);
        userData.append("start_time", start_time.current.value);
        userData.append("end_time", end_time.current.value);
        userData.append("location_id", JSON.stringify(selectedLocations));
        userData.append("image", selectedFile);

        for (var pair of userData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        const response = await fetch(`/admin-api/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: userData,
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            toast.error(resData.message);
            setIsSubmitting(false);
        }
        if (resData.status === true) {
            toast.success(resData.message);
            setIsSubmitting(false);
            return navigate(-1);
        }
        setIsSubmitting(false);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3>User Create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="row">
                                <div className="col-xl-12 mb-4">
                                    <div className="avatar-upload">
                                        <div className="avatar-edit">
                                            <input type="file" id="image" onChange={onSelectFile} />
                                            <label htmlFor="image">
                                                <FontAwesomeIcon icon={faPenAlt} />
                                            </label>
                                        </div>
                                        <div className="avatar-preview">
                                            <div id="imagePreview" style={{backgroundImage: `url(${preview || logo})`}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="name">Username</label>
                                    <input type="text" className="form-control" id="name" name="name" ref={name} required />
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="text" className="form-control" id="phone" aria-describedby="phone_span" ref={phone} required />
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" ref={password} required />
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="confirm">Confirm password</label>
                                    <input type="password" className="form-control" id="confirm" name="confirm" ref={confirm_pass} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="location_id">Welayats</label>
                                    <select
                                        className="form-select"
                                        name="location_id"
                                        id="location_id"
                                        multiple={true}
                                        value={selectedLocations}
                                        onChange={(e) => {
                                            handleSelectLocations(e.target.selectedOptions);
                                        }}
                                        required
                                    >
                                        {locations?.map((location, index) => (
                                            <option key={index} value={location.id}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-4">
                                    <label htmlFor="type">Type</label>
                                    <select className="form-control" id="type" required onChange={(e) => setType(e.target.value)} defaultValue={type}>
                                        <option defaultValue disabled>
                                            Type
                                        </option>
                                        <option value="USER">User</option>
                                        <option value="OFFICIAL">Offical</option>
                                    </select>
                                </div>
                                {type === "OFFICIAL" && (
                                    <>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="start_time">Start Date</label>
                                            <input type="date" className="form-control" id="start_time" name="start_time" ref={start_time} />
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="end_time">End Date</label>
                                            <input type="date" className="form-control" id="end_time" name="end_time" ref={end_time} />
                                        </div>
                                        <div className="col-xl-6 mb-4">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" ref={email} />
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button className="btn btn-green" disabled={isSubmitting}>
                                    {isSubmitting ? "Tassyklanýar..." : "Tassykla"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCreate;
