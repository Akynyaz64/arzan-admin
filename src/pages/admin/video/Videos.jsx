import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faHeart, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQ, setSearchQ] = useState();

    const searchHandle = async () => {
        if (searchQ === "") {
            toast.error("Boş bolmaly däl!");
            return 0;
        }
        setIsLoading(true);
        const searchData = {
            text: searchQ,
        };
        console.log(searchData);

        const response = await fetch(`/admin-api/video/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(searchData),
        });
        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        console.log(resData);
        setVideos(resData.data);
        setIsLoading(false);
    };

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/video`, {
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
        setVideos(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/video/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            toast.error(resData.message);
            return null;
        } else if (resData.status === true) {
            toast.success(resData.message);
            fetchData();
        } else {
            toast.error(resData.message);
            return null;
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Videos</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Video goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-12 mb-4 d-flex">
                        <div className="iq-search-bar device-search mr-2">
                            <form
                                className="searchbox w-100 h-100"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    searchHandle();
                                }}
                            >
                                <a className="search-link" style={{top: "9px"}}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                                <input
                                    type="search"
                                    className="text search-input"
                                    placeholder="Search here..."
                                    onChange={(e) => {
                                        setSearchQ(e.target.value);
                                    }}
                                />
                                {/* <input autoComplete="off" role="combobox" list="" id="input" name="browsers" placeholder="Select your fav browser" />

                                <datalist id="browsers" role="listbox">
                                    <option value="Internet Explorer">Internet Explorer</option>
                                    <option value="Chrome">Chrome</option>
                                    <option value="Safari">Safari</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                    <option value="Microsoft Edge">Microsoft Edge</option>
                                    <option value="Firefox">Firefox</option>
                                </datalist> */}
                            </form>
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
                                            <th>Thumbnail and Title</th>
                                            <th>Gosan ulanyjy</th>
                                            <th>Page / Category</th>
                                            <th>Likelary</th>
                                            <th>Gorlen sany</th>
                                            <th>Video</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {videos?.length > 0 ? (
                                            videos?.map((video, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{video.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={"/" + video.thumbnail.url} alt="video_thumbnail" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{video.title}</div>
                                                        </div>
                                                    </td>
                                                    <td>{video.user.name}</td>
                                                    <td>
                                                        {video?.page_category?.map((e) => {
                                                            return e.page?.name + " / " + e.category?.name;
                                                        })}
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faHeart} className="mr-1" style={{fontSize: "18px", color: "red"}} />
                                                        {video.likes_count}
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faEye} className="mr-1" style={{fontSize: "18px", color: "green"}} />
                                                        {video.viewed_count}
                                                    </td>
                                                    <td>
                                                        <a href={video.video.url}>Ýükle</a>
                                                        {/* <video width="750" height="500" controls>
                                                            <source src={"/" + video.video.url} type="video/mp4" />
                                                        </video> */}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${video.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${video.id}`} className="btn bg-warning btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </Link>
                                                            <Popup
                                                                trigger={
                                                                    <button className="btn btn-danger btn-sm">
                                                                        <FontAwesomeIcon icon={faTrash} className="" />
                                                                    </button>
                                                                }
                                                                modal
                                                                nested
                                                            >
                                                                {(close) => (
                                                                    <article className="modal-container">
                                                                        <header className="modal-container-header">
                                                                            <h3 className="modal-container-title">Üns beriň!</h3>
                                                                            <button
                                                                                className="close icon-button"
                                                                                onClick={() => {
                                                                                    close();
                                                                                }}
                                                                            >
                                                                                <FontAwesomeIcon icon={faClose} />
                                                                            </button>
                                                                        </header>
                                                                        <section className="modal-container-body">
                                                                            <p>Siz hakykatdan hem pozmak isleýärsiňizmi?</p>
                                                                        </section>
                                                                        <footer className="modal-container-footer">
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, video.id)}>
                                                                                Poz
                                                                            </button>
                                                                        </footer>
                                                                    </article>
                                                                )}
                                                            </Popup>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <div>Maglumat yok</div>
                                        )}
                                        {/* MAP ETMELI YERI */}
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

export default Videos;
