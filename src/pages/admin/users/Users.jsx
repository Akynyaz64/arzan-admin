import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faPlus, faSearch, faStar, faTrash, faUserAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";

const Users = () => {
    const [users, loading, error] = useFetch("v1/user", "users");

    if (error) {
        toast.error(error.message);
    }

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
                <div className="col-xl-8">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button style={{borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500"}} className="text-dark nav-link active px-5 bg-light" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                <FontAwesomeIcon icon={faStar} className="me-2" />
                                Offical users
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{fontWeight: "500"}} className="text-dark nav-link px-5 bg-light rounded-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                                Simple users
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500"}} className="text-dark nav-link px-5 bg-light" id="pills-profile1-tab" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile1" aria-selected="false">
                                <FontAwesomeIcon icon={faUsers} className="me-2" />
                                Top users
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-xl-4 mb-4">
                    <div className="iq-search-bar device-search">
                        <form className="searchbox w-100">
                            <a className="search-link" style={{top: "9px"}}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                            <input type="search" className="text search-input" placeholder="Search here..." />
                        </form>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="table-responsive rounded mb-3">
                        <table className="data-table table mb-0 tbl-server-info">
                            <thead className="bg-white text-uppercase">
                                <tr className="ligth ligth-data">
                                    <th>ID</th>
                                    <th>Avatar / Username</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Action</th>
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
                                    {users?.length > 0 ? (
                                        users?.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>+993 {user.phone_num}</td>
                                                <td>{!user.email && "E-mail girizilmedik"}</td>
                                                <td>{user.role}</td>
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
    );
};

export default Users;
