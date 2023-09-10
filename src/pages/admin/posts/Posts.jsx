import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import Popup from "reactjs-popup";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faHeart, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";
import {Loader} from "../../../components";

const Posts = () => {
    const search = useRef();
    const table = useRef();
    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);
    const [urlParams, setUrlParams] = useState({
        limit: 100,
    });
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [activeSubCategories, setActiveSubCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState();

    const [categories] = useFetch("/admin-api/category", "data", true);
    const [types] = useFetch("/admin-api/publication-type", "data", true);
    const [subCategories] = useFetch("/admin-api/sub-category", "data", true);
    const [users] = useFetch("/admin-api/user?limit=999999&offset=0", "data.users", true);
    useEffect(() => {
        setFilteredUsers(
            users?.map((user) => {
                return {label: user.name, value: user.id};
            })
        );
    }, [users]);

    useEffect(() => {
        console.log(activeCategory);
    }, [activeCategory]);

    useEffect(() => {
        if (activeCategory === "Ählisi") {
            setActiveSubCategories(subCategories);
        } else {
            setActiveSubCategories(subCategories?.filter((e) => e.category.id == activeCategory));
        }
    }, [activeCategory, subCategories]);

    const changePage = ({selected}) => {
        setPage(selected + 1);
        console.log(page);
        setUrlParams({
            ...urlParams,
            offset: selected * urlParams.limit,
        });
        table.current.scrollIntoView({behavior: "smooth"});
    };

    const approvePost = async (id, status) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/post/${id}/approve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify({approve: status}),
        });

        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        toast.success(resData.message);
        fetchData(urlParams);
        setIsLoading(false);
    };

    const setType = async (id, value) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/post/publication-type`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify({id: id, publication_type_id: value}),
        });

        if (!response.ok) {
            setIsLoading(false);
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        toast.success(resData.message);
        fetchData(urlParams);
        setIsLoading(false);
    };

    const fetchData = async (data) => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/post?` + new URLSearchParams(data), {
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
        setPosts(resData.data.posts);
        setPages(resData.data.total_count / urlParams.limit);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(urlParams);
    }, [urlParams]);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log(id);
        const response = await fetch(`/admin-api/post/${id}`, {
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
                            <h3 className="mb-3">Arzanladyşlar</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Arzanladyş goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-2 mb-4 position-relative">
                        <h6>Ady boýunça gözleg: </h6>
                        <div className="iq-search-bar device-search h-50">
                            <form
                                className="searchbox w-100 h-100"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (search.current.value === "") {
                                        setUrlParams((current) => {
                                            const copy = {...current, offset: 0};
                                            delete copy["title"];
                                            return copy;
                                        });
                                    } else {
                                        setUrlParams({
                                            ...urlParams,
                                            title: search.current.value,
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
                    <div className="col-xl-2 mb-4">
                        <h6>Ulanyjy boýunça gözleg</h6>
                        <Select
                            name="user_id"
                            id="user_id"
                            options={filteredUsers}
                            onChange={(selectValue) => {
                                setSelectedUser({selectValue});
                                setUrlParams({
                                    ...urlParams,
                                    user_auth_id: Number(selectValue.value),
                                });
                            }}
                            value={selectedUser?.label}
                            placeholder="Ulanyjy saýlaň .."
                        />
                    </div>
                    <div className="col-xl-2 mb-4">
                        <h6>Kategoriýa boýunça filter: </h6>
                        <select
                            className="custom-select"
                            name="category_id"
                            id="category_id"
                            value={urlParams.location_id}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["category_id"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        category_id: Number(e.target.value),
                                    });
                                }
                                setActiveCategory(e.target.value);
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {categories?.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <h6>Sub kategoriýa boýunça filter: </h6>
                        <select
                            className="custom-select"
                            name="sub_category_id"
                            id="sub_category_id"
                            value={urlParams.location_id}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["sub_category_id"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        sub_category_id: Number(e.target.value),
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {activeSubCategories?.map((subCategory, index) => (
                                <option key={index} value={subCategory.id}>
                                    {subCategory.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <h6>Görnüşi boýunça filter: </h6>
                        <select
                            className="custom-select"
                            name="publication_type_id"
                            id="publication_type_id"
                            value={urlParams.location_id}
                            onChange={(e) => {
                                if (e.target.value === "Ählisi") {
                                    setUrlParams((current) => {
                                        const copy = {...current};
                                        delete copy["publication_type_id"];
                                        return copy;
                                    });
                                } else {
                                    setUrlParams({
                                        ...urlParams,
                                        publication_type_id: Number(e.target.value),
                                    });
                                }
                            }}
                        >
                            <option value={null} selected>
                                Ählisi
                            </option>
                            {types?.map((type, index) => (
                                <option key={index} value={type.id}>
                                    {type.type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-12 mb-4 text-end">
                        <p
                            onClick={() => {
                                setUrlParams({limit: 100});
                                search.current.value = "";
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
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info" ref={table}>
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>№</th>
                                            <th>ID</th>
                                            <th>Suraty we ady</th>
                                            <th>Bahasy</th>
                                            <th>Arzanladyş</th>
                                            <th>Like we görlen sany</th>
                                            <th>Tassyklama statusy</th>
                                            <th>Garaşylýan statusy</th>
                                            <th>Görnüşi</th>
                                            <th>Goşulan wagty</th>
                                            <th>Amallar</th>
                                        </tr>
                                    </thead>

                                    <tbody className="ligth-body">
                                        {posts?.length > 0 ? (
                                            posts?.map((post, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{post.id}</td>
                                                    <td>
                                                        <Link to={`${post.id}`}>
                                                            <div className="d-flex align-items-center">
                                                                <img src={import.meta.env.VITE_MEDIA_URL_ACTIVE + post.image} alt="post" style={{height: "65px"}} />
                                                                <div className="ms-4 small fw-bold text-dark">{post.title}</div>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td>{post.price}</td>
                                                    <td>{post.discount}</td>
                                                    <td>
                                                        <FontAwesomeIcon icon={faHeart} className="mr-1" style={{fontSize: "18px", color: "red"}} /> {post.like_count} / <FontAwesomeIcon icon={faEye} className="mr-1" style={{fontSize: "18px", color: "green"}} /> {post.viewed_count}
                                                    </td>
                                                    <td>
                                                        {post.approved ? (
                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => {
                                                                    approvePost(post.id, false);
                                                                }}
                                                            >
                                                                Ret etmek
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    className="btn bg-success btn-sm m-1"
                                                                    onClick={() => {
                                                                        approvePost(post.id, true);
                                                                    }}
                                                                >
                                                                    Tassyklamak
                                                                </button>
                                                            </>
                                                        )}
                                                    </td>
                                                    <td>{post.waiting ? "Garaşylýar" : "Garaşylmaýar"}</td>
                                                    <td>
                                                        <select
                                                            className="custom-select"
                                                            name="publication_type_id"
                                                            id="publication_type_id"
                                                            style={{width: "110px"}}
                                                            value={post.publication_type.id}
                                                            onChange={(e) => {
                                                                setType(post.id, Number(e.target.value));
                                                            }}
                                                        >
                                                            {types?.map((type, index) => (
                                                                <option key={index} value={type.id}>
                                                                    {type.type}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td>{moment(post.created_at).utc().format("yyyy-MM-DD")}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center list-action">
                                                            <Link to={`${post.id}`} className="btn bg-primary btn-sm mr-2">
                                                                <FontAwesomeIcon icon={faEye} className="mr-0" />
                                                            </Link>

                                                            <Link to={`edit/${post.id}`} className="btn bg-warning btn-sm mr-2">
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
                                                                            <button className="btn btn-danger" onClick={(e) => handleDelete(e, post.id)}>
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

export default Posts;
