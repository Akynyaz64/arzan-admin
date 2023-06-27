import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/category`, {
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
        setCategories(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/category/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            toast.error(resData.message);
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
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Categories</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Category goş
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
                                            <th>Image</th>
                                            <th>Title</th>
                                            {/* <th>Priority</th> */}
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {categories?.length > 0 ? (
                                            categories?.map((category, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{category.id}</td>
                                                    <td>
                                                        <img src={category.image} alt="category" style={{height: "65px"}} />
                                                    </td>
                                                    <td>{category.name}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${category.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${category.id}`} className="btn bg-warning btn-sm mr-2">
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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, category.id)}>
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
        </>
    );
};

export default Categories;
