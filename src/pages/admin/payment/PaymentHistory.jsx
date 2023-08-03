import {useState, useEffect} from "react";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PaymentHistory = () => {
    const [histories, setHistories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/user/payment`, {
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
        setHistories(resData.data);
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
                            <h3 className="mb-3">Töleg taryhlary</h3>
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
                                            <th>Ulanyjy ady</th>
                                            <th>Töleg id</th>
                                            <th>Möçberi</th>
                                            <th>Statusy</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {histories?.length > 0 ? (
                                            histories?.map((history, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{history.id}</td>
                                                    <td>{history.user?.name}</td>
                                                    <td>{history.order_id}</td>
                                                    <td>{history.amount + " TMT"}</td>
                                                    <td>{history.status === false ? "Tassyklanmadyk" : "Tassyklanan"}</td>
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

export default PaymentHistory;
