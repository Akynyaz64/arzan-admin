import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";
import coin_img from "../../../assets/icons/coin.webp";

const PublicationTypes = () => {
    const [publicationTypes, setPublicationTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/publication-type`, {
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
        setPublicationTypes(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // const handleDelete = async (e, id) => {
    //     e.preventDefault();
    //     console.log(id);
    //     const response = await fetch(`/admin-api/publication-type/${id}`, {
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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Publication Types</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Publication Types goş
                            </Link>
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
                                            <th>Type</th>
                                            <th>Mukdary</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {publicationTypes?.length > 0 ? (
                                            publicationTypes?.map((publicationType, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{publicationType.id}</td>
                                                    <td>{publicationType.type}</td>
                                                    <td>
                                                        {publicationType.like_amount.amount} <img src={coin_img} alt="coin" style={{marginLeft: "5px", height: "15px"}} />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${publicationType.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${publicationType.id}`} className="btn bg-warning btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </Link>

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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, publicationType.id)}>
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

export default PublicationTypes;
