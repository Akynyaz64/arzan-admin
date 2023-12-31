import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const CoinView = () => {
    const {coinId} = useParams();

    const [coin, setCoin] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/payment/${coinId}`, {
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
        setCoin(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h3 className="mb-3">Coin paket barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-xl-7 mb-4">
                                <img alt="coin" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + coin?.image} className="img-fluid w-100 rounded" />
                            </div>
                            <div className="col-xl-5 mb-4">
                                <div className="col-12 mb-4">
                                    <h4>Mukdary:</h4>
                                    <h3>{coin.amount}</h3>
                                </div>
                                <div className="col-12 mb-4">
                                    <h4>Bahasy:</h4>
                                    <h3>{coin.price}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoinView;
