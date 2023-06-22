import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faGlobe, faMobileAlt, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useEffect} from "react";
import useFetch from "../../../hooks/useFetch";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";

const Banners = () => {
    const [activeType, setActiveType] = useState();
    const [urlParams, setUrlParams] = useState({});
    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [locations] = useFetch("/api/v1/location/list", "data");
    const [pages] = useFetch("/api/v1/page/list", "data");
    const [platforms] = useFetch("/api/v1/platform/list", "data");

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/banner?` + new URLSearchParams(data), {
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
        setBanners(resData.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

    useEffect(() => {
        console.log(locations);
    }, [locations]);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/banner/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
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
                            <h3 className="mb-3">Bannerler</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Banner goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-4">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    style={{borderTopRightRadius: "0", borderEndEndRadius: "0", fontWeight: "500"}}
                                    className={activeType === 2 ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                    type="button"
                                    onClick={() => {
                                        setActiveType(2);
                                        setUrlParams({
                                            ...urlParams,
                                            platform: 2,
                                        });
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
                                    App Banner
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0", fontWeight: "500"}}
                                    className={activeType === 1 ? "text-dark nav-link active px-5 bg-light" : "text-dark nav-link px-5 bg-light"}
                                    type="button"
                                    onClick={() => {
                                        setActiveType(1);
                                        setUrlParams({
                                            ...urlParams,
                                            platform: 1,
                                        });
                                    }}
                                >
                                    <FontAwesomeIcon icon={faGlobe} className="me-2" />
                                    Web Banner
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <select
                            className="form-control"
                            name="page_id"
                            id="page_id"
                            value={urlParams.page}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["page"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        page: e.target.value,
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {pages?.map((page, index) => (
                                <option key={index} value={page.id}>
                                    {page.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <select
                            className="form-control"
                            name="location_id"
                            id="location_id"
                            value={urlParams.location}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["location"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        location: e.target.value,
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {locations?.map((location, index) => (
                                <option key={index} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="col-lg-12">
                            <div className="row">
                                {banners.length > 0 ? (
                                    banners?.map((banner, index) => (
                                        <div key={index} className="col-xl-3 col-sm-6 col-md-6">
                                            <div className="card">
                                                <img src={banner.image} className="card-img-top" alt="Banner img" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{banner.title}</h4>
                                                    <p className="card-text" dangerouslySetInnerHTML={{__html: banner.description.substring(0, 100) + "..."}}></p>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <b>Url</b> -
                                                            <Link to={banner.url} target="_blank" rel="noreferrer">
                                                                {banner.url}
                                                            </Link>
                                                        </li>
                                                        {/* <li>
                                                        <b>Priority</b> - {banner.priority}
                                                    </li> */}
                                                        <li>
                                                            <b>Start date</b> - {banner.start_date.slice(0, 10)}
                                                        </li>
                                                        <li>
                                                            <b>End date</b> - {banner.end_date.slice(0, 10)}
                                                        </li>
                                                        <li>
                                                            <b>Type</b> - {platforms?.find((o) => o.id === banner.platform_id).name}
                                                        </li>
                                                        <li>
                                                            <b>Welayat</b> -
                                                            {banner.location_ids.map((id) => {
                                                                return locations?.find((el) => el.id == id).name + " ";
                                                            })}
                                                        </li>
                                                        <li>
                                                            <b>Pages</b> -
                                                            {banner.page_ids.map((id) => {
                                                                return pages?.find((el) => el.id == id).name + " ";
                                                            })}
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Link to="banners" className="btn btn-warning btn-sm">
                                                            <FontAwesomeIcon icon={faPen} className="" /> Üýtget
                                                        </Link>

                                                        <Popup
                                                            trigger={
                                                                <button className="btn btn-danger btn-sm">
                                                                    <FontAwesomeIcon icon={faTrash} className="" /> Poz
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
                                                                        <button className="table-btn btn-delete" onClick={(e) => handleDelete(e, banner.id)}>
                                                                            Poz
                                                                        </button>
                                                                    </footer>
                                                                </article>
                                                            )}
                                                        </Popup>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>Maglumat yok</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Banners;
