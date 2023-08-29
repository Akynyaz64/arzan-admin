import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import {Loader} from "../../../components";
import useFetch from "../../../hooks/useFetch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart} from "@fortawesome/free-solid-svg-icons";

const PhotoInner = () => {
    const {photoId} = useParams();
    const [photos, setPhotos] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [types] = useFetch("/admin-api/publication-type", "data", true);

    const setType = async (id, value) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/gallery/publication-type`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify({id: id, publication_type_id: value}),
        });

        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        toast.success(resData.message);
        fetchData();
        setIsLoading(false);
    };

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
        setPhotos(resData.data.images);
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
                            <h3 className="mb-3">Içerki suratlar</h3>
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
                                            <th>Surat</th>
                                            <th>Like sany</th>
                                            <th>Görlen sany</th>
                                            <th>Goşlan wagty</th>
                                            <th>Görnüşi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {photos?.length > 0 ? (
                                            photos?.map((photo, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{photo.id}</td>
                                                    <td>
                                                        <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + photo.url} alt="gallery" style={{height: "65px"}} />
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faHeart} className="mr-1" style={{fontSize: "18px", color: "red"}} />
                                                        {photo.like_count}
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faEye} className="mr-1" style={{fontSize: "18px", color: "green"}} />
                                                        {photo.view_count}
                                                    </td>
                                                    <td>{moment(photo.created_at).utc().format("yyyy-MM-DD")}</td>
                                                    <td>
                                                        <select
                                                            className="custom-select"
                                                            name="publication_type_id"
                                                            id="publication_type_id"
                                                            style={{width: "110px"}}
                                                            value={photo.publication_type.id}
                                                            onChange={(e) => {
                                                                setType(photo.id, Number(e.target.value));
                                                            }}
                                                        >
                                                            {types?.map((type, index) => (
                                                                <option key={index} value={type.id}>
                                                                    {type.type}
                                                                </option>
                                                            ))}
                                                        </select>
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

export default PhotoInner;
