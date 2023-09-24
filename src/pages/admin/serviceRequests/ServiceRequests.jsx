import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import coin_img from "../../../assets/icons/coin.webp";
import default_avatar from "../../../assets/logo/default.webp";

const ServiceRequests = () => {
    const [serviceRequests, setServiceRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/service-request`, {
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
        console.log(resData);
        setServiceRequests(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const approveRequest = async (id, status) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/service-request/${id}/approve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify({approve: status}),
        });

        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        toast.success(resData.message);
        fetchData();
        setIsLoading(false);
    };

    // const handleDelete = async (e, id) => {
    //     e.preventDefault();
    //     console.log(id);
    //     const response = await fetch(`/admin-api/service-request/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem("adACto")}`,
    //         },
    //     });

    //     const resData = await response.json();
    //     console.log(resData);
    //     if (resData.status === false) {
    //         toast.error(resData.message);
    //         return null;
    //     } else if (resData.status === true) {
    //         toast.success(resData.message);
    //         fetchData();
    //     } else {
    //         toast.error(resData.message);
    //         return null;
    //     }
    // };

    const checkForButton = (approved, waiting, type) => {
        if (waiting === true || (type.toLowerCase() === "submit" && approved === false) || (type.toLowerCase() === "cancel" && approved === true)) {
            return false;
        }
        return true;
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Hyzmat satyn almak üçin ýüz tutmalar</h3>
                        </div>
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
                                            <th>Ulanyjy</th>
                                            <th>Mukdary</th>
                                            <th>Aýy</th>
                                            <th>Welaýatlar</th>
                                            <th>Jemi baha</th>
                                            <th>Başlaýan wagty</th>
                                            <th>Döredilen wagty</th>
                                            <th>Tassyklama statusy</th>
                                            <th>Garaşylýan statusy</th>
                                            <th colSpan={2}>Tassyklamak</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {serviceRequests?.length > 0 ? (
                                            serviceRequests?.map((service, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{service.id}</td>

                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={service.user?.avatar_image === null ? default_avatar : import.meta.env.VITE_MEDIA_URL_ACTIVE + service.user?.avatar_image?.url} alt="user_avatar" className="rounded" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{service.user?.name}</div>
                                                        </div>
                                                    </td>
                                                    <td>{service.count}</td>
                                                    <td>{service.month ? service.month : "Ýok"}</td>
                                                    <td>
                                                        {service.location.map((location) => (
                                                            <span key={location.id}>{location.display_name + " "}</span>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {service.total_cost} <img src={coin_img} alt="coin" style={{marginLeft: "5px", height: "15px"}} />
                                                    </td>
                                                    <td>{moment(service.active_time).utc().format("yyyy-MM-DD")}</td>
                                                    <td>{moment(service.created_at).utc().format("yyyy-MM-DD")}</td>
                                                    <td>{service.approved ? "Tassyklanan" : "Tassyklanmadyk"}</td>
                                                    <td>{service.waiting ? "Garaşylýar" : "Garaşylmaýar"}</td>
                                                    <td>
                                                        <button
                                                            style={{width: "max-content"}}
                                                            className="btn bg-success btn-sm"
                                                            onClick={() => {
                                                                approveRequest(service.id, true);
                                                            }}
                                                            disabled={checkForButton(service?.approved, service?.waiting, "submit")}
                                                        >
                                                            Tassyklamak
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            style={{width: "max-content"}}
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => {
                                                                approveRequest(service.id, false);
                                                            }}
                                                            disabled={checkForButton(service?.approved, service?.waiting, "cancel")}
                                                        >
                                                            Ret etmek
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${service.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            {/* <Link to={`edit/${service.id}`} className="btn bg-warning btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </Link> */}

                                                            {/* <Popup
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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, service.id)}>
                                                                                Poz
                                                                            </button>
                                                                        </footer>
                                                                    </article>
                                                                )}
                                                            </Popup> */}
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
                </div>
            </div>
        </>
    );
};

export default ServiceRequests;
