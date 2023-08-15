import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PhotoRemove = () => {
    const navigate = useNavigate();
    const {photoId} = useParams();
    const [photos, setPhotos] = useState({});
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    useEffect(() => {
        console.log(selectedPhotos);
    }, [selectedPhotos]);

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const photoData = {
            gallery_id: Number(photoId),
            image_ids: selectedPhotos,
        };
        const response = await fetch(`/admin-api/gallery/delete-images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(photoData),
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            toast.error(resData.message);
            setIsSubmitting(false);
        }
        if (resData.status === true) {
            toast.success(resData.message);
            setIsSubmitting(false);
            return navigate(-1);
        }
        setIsSubmitting(false);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Albomyň suratlaryny pozmak</h3>
                        </div>
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    {photos?.length > 0 ? (
                                        photos?.map((photo, index) => (
                                            <div key={index} className="col-xl-4 mb-4">
                                                <label className="position-relative">
                                                    <input
                                                        type="checkbox"
                                                        className="image-check"
                                                        value={photo?.id}
                                                        onChange={(e) => {
                                                            if (e.target.checked === true) {
                                                                setSelectedPhotos((prev) => [...prev, Number(e.target.value)]);
                                                            } else {
                                                                setSelectedPhotos(
                                                                    selectedPhotos.filter(function (pr) {
                                                                        return pr !== e.target.value;
                                                                    })
                                                                );
                                                            }
                                                        }}
                                                    />
                                                    <img alt="preview" src={"/" + photo?.url} className="img-fluid w-100 rounded" />
                                                </label>
                                            </div>
                                        ))
                                    ) : (
                                        <div>Surat ýok</div>
                                    )}
                                </div>
                                <div className="form-group d-grid mt-3 mb-5">
                                    <button type="submit" className="btn btn-green mb-1" disabled={isSubmitting}>
                                        {isSubmitting ? "Tassyklanýar..." : "Poz"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PhotoRemove;
