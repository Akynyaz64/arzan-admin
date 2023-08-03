import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import useFetch from "../../../hooks/useFetch";

const SubCategories = () => {
    const [urlParams, setUrlParams] = useState({});
    const [subCategories, setSubCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [categories] = useFetch("/admin-api/category", "data", true);

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/sub-category?` + new URLSearchParams(data), {
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
        setSubCategories(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/sub-category/${id}`, {
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
                            <h3 className="mb-3">Sub kategoriýalar</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Sub kategoriýa goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-3 mb-4">
                        <select
                            className="custom-select"
                            name="category_id"
                            id="category_id"
                            value={urlParams.page}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["category_id"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        category_id: Number(e.target.value),
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {categories?.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
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
                                            <th>Id</th>
                                            <th>Ady</th>
                                            <th>Degişli kategoriýasy</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {subCategories?.length > 0 ? (
                                            subCategories?.map((subCategory, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{subCategory.id}</td>
                                                    <td>{subCategory.name}</td>
                                                    <td>{subCategory.category.name}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${subCategory.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${subCategory.id}`} className="btn bg-warning btn-sm mr-2">
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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, subCategory.id)}>
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

export default SubCategories;
