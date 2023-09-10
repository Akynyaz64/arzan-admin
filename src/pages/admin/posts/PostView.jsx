import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faEye, faHeart} from "@fortawesome/free-solid-svg-icons";

const PostView = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`/admin-api/post/${postId}`, {
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
            setPost(resData.data);
            setIsLoading(false);
        };
        fetchData();
    }, [postId]);

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
        setIsLoading(false);
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h3 className="mb-3">Arzanladyş barada</h3>

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
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="row">
                        <div className="col-lg-2 col-1 text-center">
                            {post?.next_id !== null && (
                                <Link to={"/admin/posts/" + post?.next_id} className={`bg-green text-white rounded-circle d-inline fs-18 shadow position-fixed`} style={{padding: "5px 10px", top: "50vh", zIndex:"9999"}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </Link>
                            )}
                        </div>
                        <div className="col-lg-8 col-9 mt-3">
                            <div className="form-row">
                                {post.images?.map((image, index) => (
                                    <div key={index} className="col-md-3 mb-4">
                                        <img alt="post" src={import.meta.env.VITE_MEDIA_URL_ACTIVE + image.url} className="img-fluid rounded" />
                                    </div>
                                ))}
                                <div className="col-md-12 mb-3">
                                    <h2>{post.title}</h2>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <p dangerouslySetInnerHTML={{__html: post.description}}></p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Bahasy:</h5>
                                    <p>{post.price} TMT</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Arzanladyş bahasy:</h5>
                                    <p>{post.discount} TMT</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Telefon belgi:</h5>
                                    <p>{post.phone}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Başlangyç senesi:</h5>
                                    <p>{post.start_date?.slice(0, 10)}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Soňky senesi:</h5>
                                    <p>{post.end_date?.slice(0, 10)}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Goşulan wagty:</h5>
                                    <p>{post.created_at?.slice(0, 10)}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Ulanyjy:</h5>
                                    <p>{post.user?.name}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Like sany:</h5>
                                    <p>
                                        <FontAwesomeIcon icon={faHeart} className="mr-1" style={{fontSize: "18px", color: "red"}} /> {post.like_count}
                                    </p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Görlen sany:</h5>
                                    <p>
                                        <FontAwesomeIcon icon={faEye} className="mr-1" style={{fontSize: "18px", color: "green"}} /> {post.viewed_count}
                                    </p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Kategoriýa:</h5>
                                    <p>{post.category?.name}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Sub kategoriýa:</h5>
                                    <p>{post.sub_category?.name}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Postuň görnüşi:</h5>
                                    <p>{post.publication_type?.type}</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <h5>Tassyklanan:</h5>
                                    <p>{post.approved ? "Tassyklanan" : "Tassyklanmadyk"}</p>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <h5>Tagler:</h5>
                                    <div className="tags-container mt-3">
                                        {post.tags?.map((e, index) => (
                                            <span className="tag" key={index}>
                                                # {e?.name + " "}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-1 text-center">
                            {post?.prev_id !== null && (
                                <Link to={"/admin/posts/" + post?.prev_id} className={`bg-green text-white rounded-circle d-inline fs-18 shadow position-fixed`} style={{padding: "5px 10px", top: "50vh", zIndex:"9999"}}>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostView;
