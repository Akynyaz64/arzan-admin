import {faEye, faHeart, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect} from "react";
import {useState} from "react";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                    <div className="col-xl-4 mb-4">
                        <div className="iq-search-bar device-search">
                            <div className="searchbox w-100">
                                <a className="search-link" style={{top: "9px"}}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                                <input type="search" className="text search-input" placeholder="Search here..." />
                                <input autoComplete="off" role="combobox" list="" id="input" name="browsers" placeholder="Select your fav browser" />

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
                                </datalist>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="table-responsive rounded mb-3">
                            <table className="data-table table mb-0 tbl-server-info">
                                <thead className="bg-white text-uppercase">
                                    <tr className="ligth ligth-data">
                                        <th>№</th>
                                        <th>Thumbnail and Title</th>
                                        <th>Gosan ulanyjy</th>
                                        <th>Kategoriyalar</th>
                                        <th>Likelary</th>
                                        <th>Gorlen sany</th>
                                        <th>Video</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {isLoading ? (
                                    <tbody>
                                        <tr>
                                            <td>Loading...</td>
                                        </tr>
                                    </tbody>
                                ) : (
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {videos?.length > 0 ? (
                                            videos?.map((video, index) => (
                                                <tr key={index}>
                                                    <td>{video.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={video.thumbnail.url} alt="" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{video.title}</div>
                                                        </div>
                                                    </td>
                                                    <td>{video.user_id}</td>
                                                    <td>{video.categories.map((e) => e)}</td>
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
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <button className="badge badge-primary mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </button>
                                                            <button className="badge bg-warning mr-2">
                                                                <FontAwesomeIcon icon={faPen} className="mr-0" />
                                                            </button>
                                                            <button className="badge bg-danger mr-2" onClick={(e) => handleDelete(e, video.id)}>
                                                                <FontAwesomeIcon icon={faTrash} className="mr-0" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <div>Maglumat yok</div>
                                        )}
                                        {/* MAP ETMELI YERI */}
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Videos;
