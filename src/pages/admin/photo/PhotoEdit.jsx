import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Select from "react-select";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PhotoEdit = () => {
    const navigate = useNavigate();
    const {photoId} = useParams();
    const [photoData, setPhotoData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [filteredUsers, setFilteredUsers] = useState();

    const [pageCategory, setPageCategory] = useState([]);
    const [categories] = useFetch("/admin-api/page-category", "data", true);
    const [users] = useFetch("/admin-api/user?limit=999999&offset=0&name=arzan", "data.users", true);

    useEffect(() => {
        setFilteredUsers(
            users?.map((user) => {
                return {label: user.name, value: user.id};
            })
        );
    }, [users]);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/gallery/${photoId}`, {
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
            console.log(resData.data);
            setIsFetching(false);
            setPhotoData(resData.data);
            console.log(resData);
            const page_categories = [
                resData.data.page_category.map((e) => {
                    return e.id;
                }),
            ];
            setPageCategory(page_categories[0]);
            setPreview("/" + resData.data.avatar_image.url);
        };

        fetchData();
    }, [photoId]);

    const handleChange = (e) => {
        setPhotoData((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSelectPages = function (selectedItems) {
        const pages = [];
        for (let i = 0; i < selectedItems.length; i++) {
            pages.push(Number(selectedItems[i].value));
        }
        setPageCategory(pages);
    };

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

        const photoDataForm = new FormData();
        photoDataForm.append("gallery_id", photoId);
        photoDataForm.append("title", photoData.title);
        photoDataForm.append("user_id", selectedUser.selectValue.value);
        photoDataForm.append("page_category_id", JSON.stringify(pageCategory));
        photoDataForm.append("avatar_image", selectedFile);
        if (selectedFile !== undefined) {
            photoDataForm.append("avatar_image", selectedFile);
        }
        for (var pair of photoDataForm.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        const response = await fetch(`/admin-api/gallery`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: photoDataForm,
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
                            <h3 className="mb-3">Galereýany üýtget</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-xl-6 mb-4">
                                        {!selectedFile && !preview ? (
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

                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="title">Ady</label>
                                        <input type="text" className="form-control" id="title" name="title" defaultValue={photoData.title} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="category">Kategoriýa</label>
                                        <select
                                            className="custom-select"
                                            name="page_id"
                                            id="page_id"
                                            multiple={true}
                                            value={pageCategory}
                                            onChange={(e) => {
                                                handleSelectPages(e.target.selectedOptions);
                                            }}
                                        >
                                            {categories?.map((pageCategory, index) => (
                                                <option key={index} value={pageCategory.id}>
                                                    {pageCategory.page.name} / {pageCategory.category.name}
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
                                </div>
                                <div className="form-group d-grid mt-3 mb-5">
                                    <button type="submit" className="btn btn-green mb-1" disabled={isSubmitting}>
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

export default PhotoEdit;
