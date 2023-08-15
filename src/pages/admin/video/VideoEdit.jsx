import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import axios from "axios";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";
import {Loader} from "../../../components";

const VideoEdit = () => {
    const navigate = useNavigate();
    const {videoId} = useParams();
    const [videoData, setVideoData] = useState({
        id: "",
        title: "",
        thumbnail: "",
        video: "",
        user: "",
    });
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [videoPreview, setVideoPreview] = useState(null);
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
            const response = await fetch(`/admin-api/video/${videoId}`, {
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
            setIsFetching(false);
            setVideoData(resData.data);
            const page_categories = [
                resData.data.page_category.map((e) => {
                    return e.id;
                }),
            ];
            setPageCategory(page_categories[0]);
            setPreview("/" + resData.data.thumbnail.url);
            setVideoPreview("/" + resData.data.video.url);
        };

        fetchData();
    }, [videoId]);

    useEffect(() => {
        console.log(videoData);
    }, [videoData]);

    const handleChange = (e) => {
        setVideoData((prev) => ({...prev, [e.target.name]: e.target.value}));
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
        event.preventDefault();
        setIsSubmitting(true);

        console.log(videoData.id);

        const videoDataForm = new FormData();
        videoDataForm.append("id", videoData.id);
        videoDataForm.append("title", videoData.title);
        videoDataForm.append("user_id", selectedUser.selectValue.value);
        videoDataForm.append("page_category_ids", JSON.stringify(pageCategory));
        if (selectedFile !== undefined) {
            videoDataForm.append("thumbnail", selectedFile);
        }

        for (var pair of videoDataForm.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        await axios
            .put(`/admin-api/video`, videoDataForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adACto")}`,
                },
            })
            .then((res) => {
                toast.success(res.data.message);
                setIsSubmitting(false);
                navigate(-1);
            })
            .catch((res) => {
                if (res.data) {
                    toast.error(res.data.message);
                } else {
                    toast.error(res.response.statusText);
                }
                setIsSubmitting(false);
            });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Wideony üýtget</h3>
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

                                                <input type="file" id="thumbnail" accept="image/*" className="form-control" name="thumbnail" onChange={onSelectFile} hidden />
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
                                    <div className="col-xl-6 mb-4">{videoPreview != null && <video style={{width: "100%"}} controls src={videoPreview}></video>}</div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="title">Ady</label>
                                        <input type="text" className="form-control" id="title" name="title" defaultValue={videoData.title} onChange={handleChange} required />
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

export default VideoEdit;
