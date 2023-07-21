import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faStar, faUserAlt} from "@fortawesome/free-solid-svg-icons";

const FollowRewards = () => {
    const [activeType, setActiveType] = useState();
    const [followRewards, setFollowRewards] = useState([]);
    const [activeRewards, setActiveRewards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/user/follow/reward`, {
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
        console.log(resData.data);
        setFollowRewards(resData.data);
        setActiveType("OFFICIAL");
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setActiveRewards(followRewards?.find((x) => x.type === activeType)?.data.sort((a, b) => a.location.id - b.location.id));
    }, [activeType, followRewards]);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Follow rewards list</h3>
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
                                    }}
                                >
                                    <FontAwesomeIcon icon={faStar} className="me-2" />
                                    Offical users
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={activeType === "EXPIRED" ? "text-dark nav-link active px-5 bg-light rounded-0" : "text-dark nav-link px-5 bg-light rounded-0"}
                                    type="button"
                                    onClick={() => {
                                        setActiveType("EXPIRED");
                                    }}
                                >
                                    <FontAwesomeIcon icon={faStar} className="me-2" />
                                    Offical users
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500"}}
                                    className={activeType === "USER" ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                    type="button"
                                    onClick={() => {
                                        setActiveType("USER");
                                    }}
                                >
                                    <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                                    Simple users
                                </button>
                            </li>
                        </ul>
                    </div>
                    {isLoading ? (
                        <span>Loading...</span>
                    ) : (
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>№</th>
                                            <th>ID</th>
                                            <th>Welaýat</th>
                                            <th>Coin mukdary</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {activeRewards?.length > 0 ? (
                                            activeRewards?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.location.id}</td>
                                                    <td>{item.location.display_name}</td>
                                                    <td>{item.coin_amount}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`edit/${activeType}/${item.location.id}`} className="btn bg-warning btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </Link>
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

export default FollowRewards;
