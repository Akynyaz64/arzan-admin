import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const BannerCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const title = useRef("");
    const url = useRef("");
    const start_date = useRef("");
    const end_date = useRef("");
    const platform_id = useRef("");
    const [selectedPageCategories, setSelectedPageCategories] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [description, setDescription] = useState();

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

    const handleSelectPages = function (selectedItems) {
        const pages = [];
        for (let i = 0; i < selectedItems.length; i++) {
            pages.push(Number(selectedItems[i].value));
        }
        setSelectedPageCategories(pages);
    };

    const handleSelectLocations = function (selectedItems) {
        const pages = [];
        console.log(typeof Number(selectedItems[0].value));
        for (let i = 0; i < selectedItems.length; i++) {
            pages.push(Number(selectedItems[i].value));
        }
        setSelectedLocations(pages);
    };

    const [locations] = useFetch("/api/v1/location/list", "data");
    const [pageCategories] = useFetch("/admin-api/page-category", "data", true);
    const [platforms] = useFetch("/api/v1/platform/list", "data");

    useEffect(() => {
        console.log(pageCategories);
    }, [pageCategories]);

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        if (Date.parse(start_date.current.value) > Date.parse(end_date.current.value)) {
            toast.error("Start date have to be earlier than end date!!");
            setIsSubmitting(false);
            return;
        }

        if (selectedFile === undefined) {
            toast.error("SURAT BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (title.current.value === "") {
            toast.error("TITLE BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (description === undefined) {
            toast.error("DESCRIPTION BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (start_date.current.value === "") {
            toast.error("START DATE BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (end_date.current.value === "") {
            toast.error("END DATE BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (platform_id.current.value === "") {
            toast.error("PLATFORM BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (url.current.value === "") {
            toast.error("URL BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (selectedLocations.length === 0) {
            toast.error("LOCATION BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        } else if (selectedPageCategories.length === 0) {
            toast.error("PAGE CATEOGORY BOŞ BOLMALY DÄL!");
            setIsSubmitting(false);
            return;
        }

        const bannerData = new FormData();
        bannerData.append("title", title.current.value);
        bannerData.append("url", url.current.value);
        bannerData.append("start_date", start_date.current.value);
        bannerData.append("end_date", end_date.current.value);
        bannerData.append("page_category_ids", JSON.stringify(selectedPageCategories));
        bannerData.append("location_ids", JSON.stringify(selectedLocations));
        bannerData.append("description", description);
        bannerData.append("platform_id", platform_id.current.value);
        bannerData.append("image", selectedFile);

        const response = await fetch(`/admin-api/banner`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: bannerData,
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
                            <h3 className="mb-3">Täze banner goş</h3>
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
                                                <button className="btn btn-danger" onClick={() => setSelectedFile(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="title">Ady</label>
                                    <input type="text" className="form-control" id="title" name="title" ref={title} />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="">Mazmuny</label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data=""
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data);
                                        }}
                                    />
                                </div>
                                {/* <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault02">Priority</label>
                                    <input type="number" className="form-control" id="validationDefault02" required />
                                </div> */}
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="start_date">Başlangyç senesi</label>
                                    <input type="date" className="form-control" id="start_date" name="start_date" ref={start_date} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="end_date">Soňky senesi</label>
                                    <input type="date" className="form-control" id="end_date" name="end_date" ref={end_date} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="platform_id">Platforma</label>
                                    <select className="custom-select" name="platform_id" id="platform_id" ref={platform_id}>
                                        {platforms?.map((platform, index) => (
                                            <option key={index} value={platform.id}>
                                                {platform.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="url">Salgysy (url)</label>
                                    <input type="text" className="form-control" id="url" name="url" ref={url} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="location_id">Welaýatlar</label>
                                    <select
                                        className="custom-select"
                                        name="location_id"
                                        id="location_id"
                                        multiple={true}
                                        value={selectedLocations}
                                        onChange={(e) => {
                                            handleSelectLocations(e.target.selectedOptions);
                                        }}
                                    >
                                        {locations?.map((location, index) => (
                                            <option key={index} value={location.id}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="page_id">Page Category</label>
                                    <select
                                        className="custom-select"
                                        name="page_id"
                                        id="page_id"
                                        multiple={true}
                                        value={selectedPageCategories}
                                        onChange={(e) => {
                                            handleSelectPages(e.target.selectedOptions);
                                        }}
                                    >
                                        {pageCategories?.map((pageCategory, index) => (
                                            <option key={index} value={pageCategory.id}>
                                                {pageCategory.page.name} / {pageCategory.category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button className="btn btn-green" disabled={isSubmitting}>
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

export default BannerCreate;
