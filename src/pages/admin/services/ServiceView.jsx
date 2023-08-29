import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";
import coin_img from "../../../assets/icons/coin.webp";

const ServiceView = () => {
    const {serviceId} = useParams();

    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/service/${serviceId}`, {
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
        setService(resData.data[0]);
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
                        <h3 className="mb-3">Hyzmat barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-xl-7 mb-4">
                                <img alt="service" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + service?.image} className="img-fluid w-100 rounded" />
                            </div>
                            <div className="col-xl-5 mb-4">
                                <div className="col-12 mb-4">
                                    <h4>Ady:</h4>
                                    <h3>{service.name}</h3>
                                </div>
                                <div className="col-12 mb-4">
                                    <h4>Bahasy:</h4>
                                    <h3>
                                        {service.cost} <img src={coin_img} alt="coin" style={{marginLeft: "5px", height: "20px"}} />
                                    </h3>
                                </div>
                                <div className="col-12 mb-4">
                                    <h4>Count:</h4>
                                    <h3>{service.cost === true ? "True" : "False"}</h3>
                                </div>
                            </div>
                            <div className="col-xl-12 mb-4">
                                <h4 className="mb-3">Welaýatlar boýunça bahasy:</h4>
                                <div className="row">
                                    {service?.location_costs?.map((location_cost, index) => (
                                        <div key={index} className="col-4 mb-4">
                                            <h3>{location_cost.location.display_name}</h3>
                                            <h5>Bahasy: {location_cost.cost} TMT</h5>
                                            <h5>Aýlyk bahasy: {location_cost.month_cost} TMT</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceView;
