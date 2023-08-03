import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PostView = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <h3 className="mb-3">Arzanladyş barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            {post.images?.map((image, index) => (
                                <div key={index} className="col-md-3 mb-4">
                                    <img alt="post" src={"/" + image.url} className="img-fluid rounded" />
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
                                <p>{post.likes_count}</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <h5>Görlen sany:</h5>
                                <p>{post.viewed_count}</p>
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
                                            {e.name + " "}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostView;
