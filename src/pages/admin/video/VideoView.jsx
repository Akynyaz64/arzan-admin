import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../../components";
import { toast } from "react-hot-toast";

const VideoView = () => {
    const {videoId} = useParams();

    const [video, setVideo] = useState({});
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
        const response = await fetch(`/admin-api/video/${videoId}`, {
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
        setVideo(resData.data);
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
                        <h3 className="mb-3">About video</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-md-6 mb-4">
                                <img alt="photo" src={"/" + video?.thumbnail?.url} className="img-fluid rounded" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <video className="w-100" controls>
                                    <source src={"/" + video.video?.url} type="video/mp4" />
                                </video>
                            </div>
                            {video.images?.map((image, index) => (
                                <div key={index} className="col-md-3 mb-4">
                                    <img alt="photo" src={"/" + image.url} className="img-fluid rounded" />
                                </div>
                            ))}
                            <div className="col-md-12 mb-3">
                                <h2>{video.title}</h2>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>User:</h5>
                                <p>{video.user?.name}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>User role:</h5>
                                <p>{video.user?.role}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Publikasiýanyň görnüşi:</h5>
                                <p>{video.publication_type?.type}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Page / Category:</h5>
                                <ul>
                                    {video.page_category?.map((page_category, index) => (
                                        <li key={index}>
                                            {page_category.page?.name} / {page_category.category?.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Like sany:</h5>
                                <p>{video.likes_count}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Gorlen sany:</h5>
                                <p>{video.viewed_count}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Goşulan wagty:</h5>
                                <p>{formatDate(video.created_at)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoView;
