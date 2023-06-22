import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-hot-toast";

const VideoCategories = () => {
    const [videoCategories, setVideoCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/page-category`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        if (!response.ok) {
            setIsLoading(false);
            return null;
        }
        const resData = await response.json();
        console.log(resData);
        setVideoCategories(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/page-category/${id}`, {
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
                            <h3 className="mb-3">Page Categories</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Page Category goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="table-responsive rounded mb-3">
                            <table className="data-table table mb-0 tbl-server-info">
                                <thead className="bg-white text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th>№</th>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Page</th>
                                        {/* <th>Priority</th> */}
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {isLoading ? (
                                    <tbody>
                                        <tr>
                                            <td>Loading...</td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {videoCategories?.length > 0 ? (
                                            videoCategories?.map((category, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{category.id}</td>
                                                    <td>
                                                        <img src={category.image.url} alt="" style={{height: "65px"}} />
                                                    </td>
                                                    <td>{category.name}</td>
                                                    <td>{category.page}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <button className="badge badge-primary mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </button>
                                                            <button className="badge bg-warning mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </button>
                                                            <button className="badge bg-danger mr-2" onClick={(e) => handleDelete(e, category.id)}>
                                                                <FontAwesomeIcon icon={faTrash} className="mr-0" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <div>Maglumat yok</div>
                                        )}
                                        {/* MAP ETMELI YERI */}
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoCategories;
