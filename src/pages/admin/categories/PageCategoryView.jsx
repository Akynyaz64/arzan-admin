import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PageCategoryView = () => {
    const {categoryId} = useParams();

    const [pageCategory, setPageCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/page-category/${categoryId}`, {
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
        setPageCategory(resData.data);
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
                        <h3 className="mb-3">Page kategoriýa barada</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-xl-7 mb-4">
                                <img alt="page_category" src={"/" + pageCategory.image?.url} className="img-fluid w-100 rounded" />
                            </div>
                            <div className="col-lg-5">
                                <div className="col-md-12 mb-3">
                                    <h4>Ady:</h4>
                                    <h3>{pageCategory.category?.name}</h3>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <h4>Degişli sahypasy:</h4>
                                    <h3>{pageCategory.page?.name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageCategoryView;
