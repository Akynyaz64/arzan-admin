import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PageCategoryEdit = () => {
    const navigate = useNavigate();
    const {categoryId} = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pageCategory, setPageCategory] = useState({
        name: "",
    });
    const [page, setPage] = useState({});
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

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/page-category/${categoryId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adACto")}`,
                },
            });

            const resData = await response.json();
            if (resData.status === false) {
                toast.error(resData.message);
                setIsFetching(false);
            }
            if (resData.status === true) {
                toast.success(resData.message);
                setIsFetching(false);
            }
            console.log(resData);
            setIsFetching(false);
            setPageCategory(resData.data);
            setPage(resData.data.page);
            setPreview("/" + resData.data.image.url);
        };

        fetchData();
    }, [categoryId]);

    const handleChange = (e) => {
        setPageCategory((prev) => ({...prev, category: {name: e.target.value}}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();
        console.log(pageCategory.category.name);

        const categoryData = new FormData();
        categoryData.append("page_category_id", pageCategory.id);
        categoryData.append("page_id", Number(page.id));
        categoryData.append("category_name", pageCategory.category.name);
        categoryData.append("image", selectedFile);

        const response = await fetch(`/admin-api/page-category/`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: categoryData,
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
                            <h3 className="mb-3">Page kategoriýa üýtget</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-xl-12 mb-4">
                                        {!selectedFile && !preview ? (
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
                                                    <span className="btn btn-danger" onClick={() => setSelectedFile(null)}>
                                                        <FontAwesomeIcon icon={faTrash} className="" />
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name">Ady</label>
                                        <input type="text" className="form-control" id="name" name="name" defaultValue={pageCategory.category?.name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="page_id">Sahypa</label>
                                        <select
                                            className="custom-select"
                                            name="page_id"
                                            id="page_id"
                                            defaultValue={page.id}
                                            onChange={(e) => {
                                                setPage({id: e.target.value});
                                            }}
                                        >
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
                    )}
                </div>
            </div>
        </>
    );
};

export default PageCategoryEdit;
