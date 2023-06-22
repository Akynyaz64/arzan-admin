import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";

const Welayats = () => {
    const [welayats, loading, error] = useFetch("/api/v1/location/list", "data");

    if (error) {
        toast.error(error.message);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Welayats</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Welayat goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="table-responsive rounded mb-3">
                            <table className="data-table table mb-0 tbl-server-info">
                                <thead className="bg-white text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {loading ? (
                                    <tbody>
                                        <tr>
                                            <td>Loading...</td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {welayats?.length > 0 ? (
                                            welayats?.map((welayat, index) => (
                                                <tr key={index}>
                                                    <td>{welayat.id}</td>
                                                    <td>{welayat.name}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <a className="badge badge-primary mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="page-list-users.html#">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </a>
                                                            <a className="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="page-list-users.html#">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </a>
                                                            <a className="badge bg-danger mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="page-list-users.html#">
                                                                <FontAwesomeIcon icon={faTrash} className="mr-0" />
                                                            </a>
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

export default Welayats;
