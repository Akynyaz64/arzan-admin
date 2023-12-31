import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PageCategoryCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const page_id = useRef("");
    const category_name = useRef("");

    const [pages] = useFetch("/api/v1/page/list", "data");

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const categoryData = new FormData();
        categoryData.append("page_id", page_id.current.value);
        categoryData.append("category_name", category_name.current.value);
        categoryData.append("image", selectedFile);

        const response = await fetch("/admin-api/page-category", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: categoryData,
        });

        console.log(response.status);
        if (response.status !== 200) {
            toast.error(response.statusText);
            setIsSubmitting(false);
        }
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
                            <h3 className="mb-3">Täze page kategoriýa goş</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-xl-12 mb-4">
                                    {!selectedFile ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category_name">Ady</label>
                                    <input type="text" className="form-control" id="category_name" name="category_name" ref={category_name} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="platform_id">Sahypa</label>
                                    <select className="custom-select" name="platform_id" id="platform_id" ref={page_id}>
                                        {pages?.map((page, index) => (
                                            <option key={index} value={page.id}>
                                                {page.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button type="submit" className="btn btn-green" disabled={isSubmitting}>
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

export default PageCategoryCreate;
