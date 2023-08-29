import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import {filterNames} from "../../../data/data";

const TopList = () => {
    const [activeType, setActiveType] = useState();
    const [urlParams, setUrlParams] = useState({
        sort: "coin",
    });
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/api/v1/user/profile?` + new URLSearchParams(data), {
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
        console.log(urlParams);
    }, [users, urlParams]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 mb-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <h3 className="mb-3">Top List</h3>
                    </div>
                </div>
                <div className="col-xl-10 mb-4">
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
                                        subscription_type_id: 2,
                                    });
                                }}
                            >
                                <FontAwesomeIcon icon={faStar} className="me-2" />
                                Official ulanyjylar
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
                                        subscription_type_id: 1,
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
                    <select
                        className="custom-select"
                        name="sort"
                        id="sort"
                        value={urlParams.sort}
                        onChange={(e) => {
                            setUrlParams({
                                ...urlParams,
                                sort: e.target.value,
                            });
                        }}
                    >
                        {filterNames?.map((filters, index) => (
                            <option key={index} value={filters.name}>
                                {filters.value}
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
                                        <th>Ulanyjy</th>
                                        <th>Sort</th>
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
                                                        <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + user.avatar_image.url} alt="user_avatar" className="rounded" style={{height: "65px"}} />
                                                        <div className="ms-4 small fw-bold">{user.name}</div>
                                                    </div>
                                                </td>
                                                <td>{user[filterNames.find((x) => x.name === urlParams.sort).key]}</td>
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
    );
};

export default TopList;
