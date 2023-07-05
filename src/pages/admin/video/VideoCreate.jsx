import {useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import axios from "axios";
import Select from "react-select";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const VideoCreate = () => {
    const navigate = useNavigate();
    const title = useRef("");
    const videoRef = useRef(null);
    const [progress, setProgress] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [video, setVideo] = useState();
    const [videoPreview, setVideoPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const selectedCategory = useRef();
    const [selectedUser, setSelectedUser] = useState();
    const [filteredUsers, setFilteredUsers] = useState();

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

    useEffect(() => {
        console.log(categories);
        const filteredPage = categories?.filter((e) => e.page.name.includes("VIDEO"));
        setPageCategory(filteredPage);
    }, [categories]);

    function previewFile(e) {
        const reader = new FileReader();
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
        setVideo(selectedFile);
        reader.onload = (readerEvent) => {
            setVideoPreview(readerEvent.target.result);
        };
    }

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

        const videoData = new FormData();
        videoData.append("title", title.current.value);
        videoData.append("user_id", selectedUser.selectValue.value);
        videoData.append("page_category_ids", JSON.stringify([Number(selectedCategory.current.value)]));
        videoData.append("thumbnail", selectedFile);
        videoData.append("video", video);
        for (var pair of videoData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        await axios
            .post(`/admin-api/video`, videoData, {
                onUploadProgress: ({loaded, total}) => {
                    setProgress(Math.floor((loaded / total) * 100));
                    if (Math.floor((loaded / total) * 100) == 100) {
                        setProgress(99);
                    }
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adACto")}`,
                },
            })
            .then((res) => {
                toast.success(res.data.message);
                setProgress(null);
                setIsSubmitting(false);
                navigate(-1);
            })
            .catch((res) => {
                if (res.data) {
                    toast.error(res.data.message);
                } else {
                    toast.error(res.response.statusText);
                }
                setProgress(null);
                setIsSubmitting(false);
            });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Video Create</h3>
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
                                        <>
                                            <img alt="preview" src={preview} className="img-fluid" />
                                        </>
                                    )}
                                </div>
                                <div className="col-xl-6 mb-4">
                                    {videoPreview === null ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="video">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Video goş</div>
                                            </label>

                                            <input type="file" id="video" accept="video/mp4,video/x-m4v,video/*" className="form-control" name="video" ref={videoRef} onChange={previewFile} hidden />
                                        </>
                                    ) : (
                                        <>{videoPreview != null && <video style={{width: "100%"}} controls src={videoPreview}></video>}</>
                                    )}
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" ref={title} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">Category</label>
                                    <select className="form-select" name="category" id="category" ref={selectedCategory}>
                                        {pageCategory?.map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.category.name} / {category.page.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">User</label>
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
                                {progress && (
                                    <div>
                                        <span className="mb-1">{progress}% ýüklendi </span>
                                        <div className="progress mb-3">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={`${progress}`} aria-valuemin="0" aria-valuemax="100" style={{width: `${progress}%`}}></div>
                                        </div>
                                    </div>
                                )}
                                <button className="btn btn-green mb-1" disabled={isSubmitting}>
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

export default VideoCreate;
