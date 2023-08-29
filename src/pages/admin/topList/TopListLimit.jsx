import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus} from "@fortawesome/free-solid-svg-icons";
import {filterNames} from "../../../data/data";
import {Loader} from "../../../components";

const TopListLimit = () => {
    const [topListLimits, setTopListLimits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/user/top-list/limit`, {
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
        setTopListLimits(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Top list limitler</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Top List limit goş
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
                                            <th>Filteriň ady</th>
                                            <th>Limit</th>
                                            <th>Üýtgedilen wagty</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>

                                    <tbody className="ligth-body">
                                        {topListLimits?.length > 0 ? (
                                            topListLimits?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.id}</td>
                                                    <td>{filterNames.find((x) => x.name === item.name).value}</td>
                                                    <td>{item.limit_count}</td>
                                                    <td>{moment(item.last_time).utc().format("yyyy-MM-DD")}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`create`} className="btn bg-warning btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </Link>
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

export default TopListLimit;
