import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import {Loader} from "../../../components";
// import default_avatar from "../../../assets/logo/default.webp";

const ServiceRequestView = () => {
    const {requestId} = useParams();

    const [serviceRequest, setServiceRequest] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/service-request/${requestId}`, {
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
        setServiceRequest(resData.data);
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
                        <h3 className="mb-3">Hyzmat satyn almak ýüz tutma barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            {/* <div className="col-md-4 mb-3">
                                <h4>Ulanyjy</h4>
                                <div className="d-flex align-items-center">
                                    <img src={serviceRequest?.user?.avatar_image === null ? default_avatar : import.meta.env.VITE_MEDIA_URL_ACTIVE + serviceRequest?.user?.avatar_image?.url} alt="user_avatar" className="rounded" style={{height: "65px"}} />
                                    <h4 className="ms-4 small fw-bold">{serviceRequest?.user?.name}</h4>
                                </div>
                            </div> */}
                            <div className="col-md-4 mb-3">
                                <h4>Mukdary:</h4>
                                <h3>{serviceRequest?.count}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Aýy:</h4>
                                <h3>{serviceRequest?.month}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Jemi bahasy:</h4>
                                <h3>{serviceRequest?.total_cost}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Welaýatlar:</h4>
                                <h3>
                                    {serviceRequest?.location?.map((location) => (
                                        <span key={location.id}>{location.display_name}</span>
                                    ))}
                                </h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Başlaýan wagty:</h4>
                                <h3>{moment(serviceRequest?.active_time).utc().format("yyyy-MM-DD")}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Döredilen wagty:</h4>
                                <h3>{moment(serviceRequest?.created_at).utc().format("yyyy-MM-DD")}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Tassyklanma statusy:</h4>
                                <h3>{serviceRequest?.approved ? "Tassyklanan" : "Tassyklanmadyk"}</h3>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h4>Garaşylma statusy:</h4>
                                <h3>{serviceRequest?.waiting ? "Garaşylýar" : "Garaşylmaýar"}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceRequestView;
