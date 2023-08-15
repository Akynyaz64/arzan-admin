import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import img_icon from "../../../assets/icons/img.svg";

const PhotoAdd = () => {
    const navigate = useNavigate();
    const {photoId} = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);

    function uploadSingleFile(e) {
        let previewss = Object.entries(e.target.files).map((e) => URL.createObjectURL(e[1]));
        let ImagesArray = e.target.files;
        console.log(ImagesArray);
        setFile([...file, ...ImagesArray]);
        setPreviews([...previews, ...previewss]);
    }

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const videoData = new FormData();
        videoData.append("gallery_id", photoId);

        for (let i = 0; i < file.length; i++) {
            videoData.append("images", file[i]);
        }

        const response = await fetch(`/admin-api/gallery/add-images`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: videoData,
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
                            <h3 className="mb-3">Alboma surat goşmak</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                {previews.length > 0 &&
                                    previews.map((item, index) => (
                                        <div key={index} className="col-xl-3 mb-4">
                                            <img src={item} alt="preview_photo" className="img-fluid mb-2" />
                                        </div>
                                    ))}
                                <div className="col-xl-3 mb-4">
                                    <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="images">
                                        <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                        <div className="text-green">Täze suratlary goş</div>
                                    </label>

                                    <input type="file" disabled={file.length === 40} id="images" accept="image/*" multiple className="form-control" name="images" onChange={uploadSingleFile} hidden />
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button type="submit" className="btn btn-green mb-1" disabled={isSubmitting}>
                                    {isSubmitting ? "Tassyklanýar..." : "Tassykla"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhotoAdd;
