import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
// import Slider from "react-slick";

const Photos = () => {
    const [galleries, setGalleries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchQ, setSearchQ] = useState();

    const searchHandle = async () => {
        setIsLoading(true);
        const searchData = {
            text: searchQ,
        };
        console.log(searchData);

        const response = await fetch(`/admin-api/gallery/search`, {
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
        setGalleries(resData.data);
        setIsLoading(false);
    };
    
    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/gallery`, {
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
        setGalleries(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(galleries);
    }, [galleries]);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/gallery/${id}`, {
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

    // const slider_settings = {
    //     arrows: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     swipeToSlide: true,
    //     pauseOnHover: true,
    //     autoplaySpeed: 3000,
    // };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Photos</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Photo goş
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
                                            <th>Preview / Title</th>
                                            <th>Gosan ulanyjy</th>
                                            <th>Page / Category</th>
                                            {/* <th>Suratlar</th> */}
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {galleries?.length > 0 ? (
                                            galleries?.map((gallery, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{gallery.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={"/" + gallery.avatar_image.url} alt="gallery" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{gallery.title}</div>
                                                        </div>
                                                    </td>
                                                    <td>{gallery.user?.name}</td>
                                                    <td>
                                                        {gallery?.page_category?.map((e) => {
                                                            return e.page?.name + " / " + e.category?.name;
                                                        })}
                                                    </td>
                                                    {/* <td className="position-relative">
                                                        <Slider {...slider_settings} style={{width: "200px"}}>
                                                            {gallery?.images?.map((e) => (
                                                                <img key={e.id} src={e.url} alt="" style={{height: "65px"}} />
                                                            ))}
                                                        </Slider>
                                                    </td> */}
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${gallery.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${gallery.id}`} className="btn bg-warning btn-sm mr-2">
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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, gallery.id)}>
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

export default Photos;
