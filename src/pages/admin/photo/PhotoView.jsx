import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PhotoView = () => {
    const {photoId} = useParams();

    const [photo, setPhoto] = useState({});
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
        const response = await fetch(`/admin-api/gallery/${photoId}`, {
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
        setPhoto(resData.data);
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
                        <h3 className="mb-3">Galereýa barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-md-12 mb-4">
                                <img alt="photo" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + photo?.avatar_image?.url} className="img-fluid rounded" />
                            </div>
                            {photo.images?.map((image, index) => (
                                <div key={index} className="col-md-3 mb-4">
                                    <img alt="photo" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + image.url} className="img-fluid rounded" />
                                </div>
                            ))}
                            <div className="col-md-12 mb-3">
                                <h2>{photo.title}</h2>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Ulanyjy:</h5>
                                <p>{photo.user?.name}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Ulanyjy görnüşi:</h5>
                                <p>{photo.user?.role}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Page / Category:</h5>
                                <ul>
                                    {photo.page_category?.map((page_category, index) => (
                                        <li key={index}>
                                            {page_category.page?.name} / {page_category.category?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Goşulan wagty:</h5>
                                <p>{formatDate(photo.created_at)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoView;
