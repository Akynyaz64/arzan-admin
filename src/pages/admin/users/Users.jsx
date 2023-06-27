import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faSearch, faStar, faTrash, faUserAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import {Loader} from "../../../components";

const Users = () => {
    const search = useRef();
    const [activeType, setActiveType] = useState();
    const [urlParams, setUrlParams] = useState({});
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [locations] = useFetch("/api/v1/location/list", "data");

    function formatDate(data) {
        let date = new Date(data);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate() + 1;
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        date = day + "." + month + "." + year + " ";
        return date;
    }

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/user?` + new URLSearchParams(data), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        setUsers(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/user/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            return null;
        } else if (resData.status === true) {
            toast.success(resData.message);
            fetchData();
        } else {
            toast.error(resData.message);
            return null;
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 mb-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h3>Ulanyjylar</h3>
                        <Link to="create" className="btn btn-primary add-list">
                            <FontAwesomeIcon icon={faPlus} className="mr-3" />
                            Ulanyjy goş
                        </Link>
                    </div>
                </div>
                <div className="col-xl-8 mb-4">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                style={{borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500"}}
                                className={activeType === "OFFICIAL" ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                type="button"
                                onClick={() => {
                                    setActiveType("OFFICIAL");
                                    setUrlParams({
                                        ...urlParams,
                                        type: "OFFICIAL",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faStar} className="me-2" />
                                Offical users
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                style={{fontWeight: "500"}}
                                className={activeType === "USER" ? "text-dark nav-link active px-5 bg-light rounded-0" : "text-dark nav-link px-5 bg-light rounded-0"}
                                type="button"
                                onClick={() => {
                                    setActiveType("USER");
                                    setUrlParams({
                                        ...urlParams,
                                        type: "USER",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                                Simple users
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500"}}
                                className={activeType === "TOP" ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                type="button"
                                onClick={() => {
                                    setActiveType("TOP");
                                    setUrlParams({
                                        ...urlParams,
                                        type: "TOP",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faUsers} className="me-2" />
                                Top users
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-2 mb-4">
                    <div className="iq-search-bar device-search h-100">
                        <form
                            className="searchbox w-100 h-100"
                            onSubmit={(e) => {
                                e.preventDefault();
                                setUrlParams({
                                    ...urlParams,
                                    name: search.current.value,
                                });
                            }}
                        >
                            <a className="search-link" style={{top: "9px"}}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <input type="search" className="text search-input" placeholder="Search here..." ref={search} />
                        </form>
                    </div>
                </div>
                <div className="col-xl-2 mb-4">
                    <select
                        className="form-control"
                        name="location_id"
                        id="location_id"
                        value={urlParams.location_id}
                        onChange={(e) => {
                            if (e.target.value === "Ählisi") {
                                setUrlParams((current) => {
                                    const copy = {...current};
                                    delete copy["location_ids"];
                                    return copy;
                                });
                            } else {
                                setUrlParams({
                                    ...urlParams,
                                    location_id: Number(e.target.value),
                                });
                            }
                        }}
                    >
                        <option value={null} selected>
                            Ählisi
                        </option>
                        {locations?.map((location, index) => (
                            <option key={index} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-12">
                        <div className="table-responsive rounded mb-3">
                            <table className="data-table table mb-0 tbl-server-info">
                                <thead className="bg-white text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th>№</th>
                                        <th>ID</th>
                                        <th>Avatar / Username</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Period</th>
                                        <th>Type</th>
                                        <th>Locations</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="ligth-body">
                                    {/* MAP ETMELI YERI */}
                                    {users?.length > 0 ? (
                                        users?.map((user, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.id}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src={"/" + user.avatar_image} alt="user_avatar" style={{height: "65px"}} />
                                                        <div className="ms-4 small fw-bold">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td>{user.phone}</td>
                                                <td>{user.email ? user.email : "E-mail ýok"}</td>
                                                <td>{user.start_date && user.expiry_date ? formatDate(user.start_date) + " - " + formatDate(user.expiry_date) : "Periody ýok"}</td>
                                                <td>{user.type.type}</td>
                                                <td>{user.locations.map((location) => location.name + " ")}</td>
                                                <td>
                                                    <div className="d-flex align-items-center list-action">
                                                        <Link to={`${user.id}`} className="btn bg-primary btn-sm mr-2">
                                                            <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                        </Link>

                                                        <Link to={`edit/${user.id}`} className="btn bg-warning btn-sm mr-2">
                                                            <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                        </Link>
                                                        <Popup
                                                            trigger={
                                                                <button className="btn btn-danger btn-sm">
                                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                                </button>
                                                            }
                                                            modal
                                                            nested
                                                        >
                                                            {(close) => (
                                                                <article className="modal-container">
                                                                    <header className="modal-container-header">
                                                                        <h3 className="modal-container-title">Üns beriň!</h3>
                                                                        <button
                                                                            className="close icon-button"
                                                                            onClick={() => {
                                                                                close();
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faClose} />
                                                                        </button>
                                                                    </header>
                                                                    <section className="modal-container-body">
                                                                        <p>Siz hakykatdan hem pozmak isleýärsiňizmi?</p>
                                                                    </section>
                                                                    <footer className="modal-container-footer">
                                                                        <button className="btn btn-danger" onClick={(e) => handleDelete(e, user.id)}>
                                                                            Poz
                                                                        </button>
                                                                    </footer>
                                                                </article>
                                                            )}
                                                        </Popup>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <div>Maglumat yok</div>
                                    )}
                                    {/* MAP ETMELI YERI */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
