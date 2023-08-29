import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const BannerView = () => {
    const {bannerId} = useParams();

    const [banner, setBanner] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function formatDate(data) {
        let date = new Date(data);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate() + 1;
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        date = day + "." + month + "." + year + " ";
        return date;
    }

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/banner/${bannerId}`, {
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
        setBanner(resData.data);
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
                        <h3 className="mb-3">Banner barada maglumat</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-xl-12 mb-4">
                                <img alt="banner" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + banner?.image?.url} className="img-fluid rounded" />
                            </div>
                            <div className="col-md-8 mb-3">
                                <h2>{banner.title}</h2>
                                <p dangerouslySetInnerHTML={{__html: banner.description}}></p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Platforma:</h5>
                                <p>
                                    {banner.platform?.map((platform, index) => (
                                        <span key={index}>{platform.name}</span>
                                    ))}
                                </p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Başlangyç senesi:</h5>
                                <p>{formatDate(banner.start_date)}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Soňky senesi:</h5>
                                <p>{formatDate(banner.end_date)}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Goşulan wagty:</h5>
                                <p>{formatDate(banner.created_at)}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Welaýatlar:</h5>
                                <ul>
                                    {banner.location?.map((location, index) => (
                                        <li key={index}>{location.display_name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Page / Category:</h5>
                                <ul>
                                    {banner.page_category?.map((page_category, index) => (
                                        <li key={index}>
                                            {page_category.page?.name} / {page_category.category?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Salgysy (url):</h5>
                                <p>{banner.url}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BannerView;
