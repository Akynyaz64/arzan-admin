import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faGlobe, faMobileAlt, faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import {Loader} from "../../../components";

const Banners = () => {
    const [activeType, setActiveType] = useState();
    const [urlParams, setUrlParams] = useState({});
    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [locations] = useFetch("/api/v1/location/list", "data");
    const [pages] = useFetch("/admin-api/page-category", "data", true);
    // const [platforms] = useFetch("/api/v1/platform/list", "data");

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
            toast.error("Error status: " + response.statusText);
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
        console.log(urlParams);
    }, [urlParams]);

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
                    <div className="col-xl-6 mb-4">
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
                                    App bannerler
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
                                    Web bannerler
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 mb-4">
                        <h6>Sahypalar boýunça filter:</h6>
                        <select
                            className="custom-select"
                            name="page_category"
                            id="page_category"
                            value={urlParams.page_category}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["page_category"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        page_category: Number(e.target.value),
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {pages?.map((page, index) => (
                                <option key={index} value={page.id}>
                                    {page.page.name} / {page.category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-3 mb-4">
                        <h6>Welaýat boýunça filter:</h6>
                        <select
                            className="custom-select"
                            name="location"
                            id="location"
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
                    <div className="col-12 mb-4 text-end">
                        <p
                            onClick={() => {
                                setUrlParams({});
                                setActiveType("");
                            }}
                            style={{color: "#666666", cursor: "pointer", textDecoration: "underline"}}
                        >
                            Filtrleri arassala
                        </p>
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-12">
                            <div className="row">
                                {banners.length > 0 ? (
                                    banners?.map((banner, index) => (
                                        <div key={index} className="col-xl-3 col-sm-6 col-md-6">
                                            <div className="card">
                                                <Link to={`${banner.id}`}>
                                                    <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + banner.image.url} className="card-img-top" alt="Banner img" />
                                                </Link>
                                                <div className="card-body">
                                                    <Link to={`${banner.id}`}>
                                                        <h4 className="text-dark card-title">{banner.title}</h4>
                                                    </Link>
                                                    <p className="card-text" dangerouslySetInnerHTML={{__html: banner.description.substring(0, 100) + "..."}}></p>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <b>Salgysy (url)</b> -
                                                            <Link to={banner.url} target="_blank" rel="noreferrer">
                                                                {banner.url}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <b>Başlangyç senesi</b> - {banner.start_date?.slice(0, 10)}
                                                        </li>
                                                        <li>
                                                            <b>Soňky senesi</b> - {banner.end_date?.slice(0, 10)}
                                                        </li>
                                                        <li>
                                                            <b>Platforma</b> -{" "}
                                                            {banner.platform.map((e) => {
                                                                return e.name + " ";
                                                            })}
                                                        </li>
                                                        <li>
                                                            <b>Welaýatlar</b> -
                                                            {banner.location.map((e) => {
                                                                return e?.display_name + " ";
                                                            })}
                                                        </li>
                                                        <li>
                                                            <b>Page Categories</b> -
                                                            {banner.page_category?.map((e) => {
                                                                return e?.page?.name + " / " + e.category?.name + " ";
                                                            })}
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Link to={`edit/${banner.id}`} className="btn btn-warning btn-sm">
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
                                                                        <button className="btn btn-danger" onClick={(e) => handleDelete(e, banner.id)}>
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
                                    <div>Maglumat ýok</div>
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
