import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import moment from "moment";
import Popup from "reactjs-popup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEye, faPen, faPlus, faSearch, faTrash} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../hooks/useFetch";

const Posts = () => {
    const search = useRef();
    const [urlParams, setUrlParams] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [categories] = useFetch("/admin-api/category", "data", true);
    const [subCategories] = useFetch("/admin-api/sub-category", "data", true);

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
        fetchData();
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
        setPosts(resData.data);
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
                            <h3 className="mb-3">Posts</h3>
                            <Link to="create" className="btn btn-primary add-list">
                                <FontAwesomeIcon icon={faPlus} className="mr-3" />
                                Post goş
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <div className="iq-search-bar device-search h-100">
                            <form
                                className="searchbox w-100 h-100"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setUrlParams({
                                        ...urlParams,
                                        title: search.current.value,
                                    });
                                }}
                            >
                                <a className="search-link" style={{top: "9px"}}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                                <input type="search" className="text search-input" placeholder="Search here..." ref={search} />
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2 mb-4">
                        <select
                            className="form-control"
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
                        <select
                            className="form-control"
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
                            {subCategories?.map((subCategory, index) => (
                                <option key={index} value={subCategory.id}>
                                    {subCategory.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {isLoading ? (
                        <span>Loading...</span>
                    ) : (
                        <div className="col-lg-12">
                            <div className="table-responsive rounded mb-3">
                                <table className="data-table table mb-0 tbl-server-info">
                                    <thead className="bg-white text-uppercase">
                                        <tr className="ligth ligth-data">
                                            <th>№</th>
                                            <th>ID</th>
                                            <th>Image and Title</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Gorlen sany</th>
                                            <th>Approved status</th>
                                            <th>Waiting status</th>
                                            <th>Phone Number</th>
                                            <th>Goslan wagty</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody className="ligth-body">
                                        {/* MAP ETMELI YERI */}
                                        {posts?.length > 0 ? (
                                            posts?.map((post, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{post.id}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={"/" + post.image} alt="post" style={{height: "65px"}} />
                                                            <div className="ms-4 small fw-bold">{post.title}</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p dangerouslySetInnerHTML={{__html: post.description}}></p>
                                                    </td>
                                                    <td>{post.price}</td>
                                                    <td>{post.discount}</td>
                                                    <td>{post.viewed_count}</td>
                                                    <td>
                                                        {post.approved ? (
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => {
                                                                    approvePost(post.id, false);
                                                                }}
                                                            >
                                                                Decline it
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    className="btn bg-success m-1"
                                                                    onClick={() => {
                                                                        approvePost(post.id, true);
                                                                    }}
                                                                >
                                                                    Approve it
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger m-1"
                                                                    onClick={() => {
                                                                        approvePost(post.id, false);
                                                                    }}
                                                                >
                                                                    Decline it
                                                                </button>
                                                            </>
                                                        )}
                                                    </td>
                                                    <td>{post.waiting ? "Waiting" : "Not waiting"}</td>
                                                    <td>{post.phone}</td>
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

export default Posts;
