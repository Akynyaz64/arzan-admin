import {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import Popup from "reactjs-popup";
import ReactPaginate from "react-paginate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faFileCircleMinus, faHeart, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";

const Photos = () => {
    const search = useRef();
    const table = useRef();
    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);
    const [urlParams, setUrlParams] = useState({
        limit: 100,
    });
    const [galleries, setGalleries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const changePage = ({selected}) => {
        setPage(selected + 1);
        console.log(page);
        setUrlParams({
            ...urlParams,
            offset: selected * urlParams.limit,
        });
        table.current.scrollIntoView({behavior: "smooth"});
    };

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/gallery?` + new URLSearchParams(data), {
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
        setPages(resData.data[0].items_full_count / urlParams.limit);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

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

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Galereýalar</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Galereýa goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="iq-search-bar device-search h-100">
                            <form
                                className="searchbox w-100 h-100"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (search.current.value === "") {
                                        setUrlParams((current) => {
                                            const copy = {...current, offset: 0};
                                            delete copy["query"];
                                            return copy;
                                        });
                                    } else {
                                        setUrlParams({
                                            ...urlParams,
                                            query: search.current.value,
                                        });
                                    }
                                }}
                            >
                                <a className="search-link" style={{top: "9px"}}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                                <input type="search" className="text search-input" placeholder="Gözleg..." ref={search} />
                            </form>
                        </div>
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info" ref={table}>
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>№</th>
                                            <th>ID</th>
                                            <th>Suraty / Ady</th>
                                            <th>Goşan ulanyjy</th>
                                            <th>Page / kategoriýa</th>
                                            <th>Surat sany</th>
                                            <th>Jemi like we görlen sany</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="ligth-body">
                                        {galleries?.length > 0 ? (
                                            galleries?.map((gallery, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{gallery.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + gallery.avatar_image.url} alt="gallery" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{gallery.title}</div>
                                                        </div>
                                                    </td>
                                                    <td>{gallery.user?.name}</td>
                                                    <td>
                                                        {gallery?.page_category?.map((e) => {
                                                            return e.page?.name + " / " + e.category?.name;
                                                        })}
                                                    </td>
                                                    <td>{gallery.image_count}</td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faHeart} className="mr-1" style={{fontSize: "18px", color: "red"}} /> {gallery.like_count} / <FontAwesomeIcon icon={faEye} className="mr-1" style={{fontSize: "18px", color: "green"}} /> {gallery.view_count}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`add/${gallery.id}`} className="btn bg-success btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faPlus} className="mr-0" />
                                                            </Link>
                                                            <Link to={`remove/${gallery.id}`} className="btn bg-danger btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faFileCircleMinus} className="mr-0" />
                                                            </Link>
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
                                            <div>Maglumat ýok</div>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <div className="col-12 d-flex text-center justify-content-center mt-20">
                        <ReactPaginate previousLabel="←" nextLabel="→" pageCount={pages} onPageChange={changePage} containerClassName={"pagination"} pageLinkClassName={"page-link"} previousLinkClassName={"page-link"} nextLinkClassName={"page-link"} activeLinkClassName={"page-link current"} disabledLinkClassName={"page-link disabled"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Photos;
