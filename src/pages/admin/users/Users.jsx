import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import ReactPaginate from "react-paginate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faSearch, faStar, faTrash, faUserAlt, faUserLock} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import {Loader} from "../../../components";
import coin_img from "../../../assets/icons/coin.webp";

const Users = () => {
    const search = useRef();
    const table = useRef();

    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);
    const [activeType, setActiveType] = useState();
    const [urlParams, setUrlParams] = useState({
        limit: 50,
    });
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [locations] = useFetch("/api/v1/location/list", "data");

    const changePage = ({selected}) => {
        setPage(selected + 1);
        console.log(page);
        setUrlParams({
            ...urlParams,
            offset: selected * urlParams.limit,
        });
        table.current.scrollIntoView({behavior: "smooth"});
    };

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
        setUsers(resData.data.users);
        setPages(resData.data.total_count / urlParams.limit);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

    useEffect(() => {
        console.log(users);
        console.log(urlParams);
        console.log(pages);
    }, [users, urlParams, pages]);

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
                        <h3 className="mb-3">Ulanyjylar</h3>
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
                                        offset: 0,
                                        type: "OFFICIAL",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faStar} className="me-2" />
                                Official ulanyjylar
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                style={{borderRadius: "0", fontWeight: "500"}}
                                className={activeType === "EXPIRED" ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                type="button"
                                onClick={() => {
                                    setActiveType("EXPIRED");
                                    setUrlParams({
                                        ...urlParams,
                                        offset: 0,
                                        type: "EXPIRED",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faUserLock} className="me-2" />
                                Expired ulanyjylar
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500"}}
                                className={activeType === "USER" ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                type="button"
                                onClick={() => {
                                    setActiveType("USER");
                                    setUrlParams({
                                        ...urlParams,
                                        offset: 0,
                                        type: "USER",
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                                Ýönekeý ulanyjylar
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
                                    offset: 0,
                                    name: search.current.value,
                                });
                            }}
                        >
                            <a className="search-link" style={{top: "9px"}}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <input type="search" className="text search-input" placeholder="Gözleg..." ref={search} />
                        </form>
                    </div>
                </div>
                <div className="col-xl-2 mb-4">
                    <select
                        className="custom-select"
                        name="location_id"
                        id="location_id"
                        value={urlParams.location_id}
                        onChange={(e) => {
                            if (e.target.value === "Ählisi") {
                                setUrlParams((current) => {
                                    const copy = {...current, offset: 0};
                                    delete copy["location_id"];
                                    return copy;
                                });
                            } else {
                                setUrlParams({
                                    ...urlParams,
                                    offset: 0,
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
                            <table className="data-table table mb-0 tbl-server-info" ref={table}>
                                <thead className="bg-white text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th>№</th>
                                        <th>ID</th>
                                        <th>Suraty / Ady</th>
                                        <th>Telefon belgi</th>
                                        <th>Email</th>
                                        <th>Period</th>
                                        <th>Görnüşi</th>
                                        <th>Balans</th>
                                        <th>Welaýatlar</th>
                                        <th>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody className="ligth-body">
                                    {users?.length > 0 ? (
                                        users?.map((user, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.id}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + user.avatar_image} alt="user_avatar" style={{height: "65px"}} />
                                                        <div className="ms-4 small fw-bold">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td>{user.phone}</td>
                                                <td>{user.email ? user.email : "E-mail ýok"}</td>
                                                <td>{user.start_date && user.expiry_date ? formatDate(user.start_date) + " - " + formatDate(user.expiry_date) : "Periody ýok"}</td>
                                                <td>{user.type.type}</td>
                                                <td>
                                                    {user.balance === null ? "0" : user.balance} <img src={coin_img} alt="coin" style={{marginLeft: "5px", height: "15px"}} />
                                                </td>
                                                <td>{user.locations?.map((location) => location.name + " ")}</td>
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
                                        <div>Maglumat ýok</div>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="col-12 d-flex text-center justify-content-center mt-20">
                    <ReactPaginate previousLabel="←" nextLabel="→" pageCount={pages} onPageChange={changePage} containerClassName={"pagination"} pageLinkClassName={"page-link"} previousLinkClassName={"page-link"} nextLinkClassName={"page-link"} activeLinkClassName={"page-link current"} disabledLinkClassName={"page-link disabled"} />
                </div>
            </div>
        </div>
    );
};

export default Users;
