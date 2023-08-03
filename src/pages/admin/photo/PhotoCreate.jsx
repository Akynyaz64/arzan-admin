import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PhotoCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const title = useRef("");
    const imagesRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const selectedCategory = useRef();
    const [selectedUser, setSelectedUser] = useState();
    const [filteredUsers, setFilteredUsers] = useState();

    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [pageCategory, setPageCategory] = useState([]);
    const [categories] = useFetch("/admin-api/page-category", "data", true);
    const [users] = useFetch("/admin-api/user?limit=999999&offset=0", "data.users", true);
    // const user_id = useRef("");
    useEffect(() => {
        setFilteredUsers(
            users?.map((user) => {
                return {label: user.name, value: user.id};
            })
        );
    }, [users]);

    function uploadSingleFile(e) {
        let previews = Object.entries(e.target.files).map((e) => URL.createObjectURL(e[1]));
        let ImagesArray = e.target.files;
        console.log(ImagesArray);
        setFile([...file, ...ImagesArray]);
        setPreviews([...previews]);
    }

    useEffect(() => {
        console.log(categories);
        const filteredPage = categories?.filter((e) => e.page.name.includes("PHOTO"));
        setPageCategory(filteredPage);
    }, [categories]);

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

        const videoData = new FormData();
        videoData.append("title", title.current.value);
        videoData.append("user_id", selectedUser.selectValue.value);
        videoData.append("page_category_id", selectedCategory.current.value);
        videoData.append("avatar_image", selectedFile);
        // videoData.append("images", file);

        for (let i = 0; i < file.length; i++) {
            videoData.append("images", file[i]);
        }

        const response = await fetch(`/admin-api/gallery`, {
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
                            <h3 className="mb-3">Täze galereýa goş</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-xl-6 mb-4">
                                    {!selectedFile ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="thumbnail">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" accept="image/*" id="thumbnail" className="form-control" name="thumbnail" onChange={onSelectFile} hidden />
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

                                {file.length == 0 ? (
                                    <div className="col-xl-6 mb-4">
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="images">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Içki suratlary goş</div>
                                            </label>

                                            <input type="file" disabled={file.length === 10} id="images" accept="image/*" multiple className="form-control" name="images" ref={imagesRef} onChange={uploadSingleFile} hidden />
                                        </>
                                    </div>
                                ) : (
                                    previews.length > 0 &&
                                    previews.map((item, index) => (
                                        <div key={index} className="col-xl-3 mb-4">
                                            <img src={item} alt="preview_photo" className="img-fluid mb-2" />
                                        </div>
                                    ))
                                )}
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="title">Ady</label>
                                    <input type="text" className="form-control" id="title" name="title" ref={title} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">Kategoriýasy</label>
                                    <select className="custom-select" name="category" id="category" ref={selectedCategory}>
                                        {pageCategory?.map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.category.name} / {category.page.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">Ulanyjy</label>
                                    <Select
                                        name="user_id"
                                        id="user_id"
                                        options={filteredUsers}
                                        onChange={(selectValue) => {
                                            console.log({selectValue});
                                            setSelectedUser({selectValue});
                                        }}
                                        value={selectedUser?.label}
                                        placeholder="Ulanyjy saýlaň .."
                                    />
                                </div>
                                {/* <div className="col-xl-12">
                                    <div className="form-check form-switch ms-3">
                                        <input name="isActive" className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                            Is Active
                                        </label>
                                    </div>
                                </div> */}
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

export default PhotoCreate;
