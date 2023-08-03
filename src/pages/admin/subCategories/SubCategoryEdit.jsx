import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";
import useFetch from "../../../hooks/useFetch";

const SubCategoryEdit = () => {
    const navigate = useNavigate();
    const {subcategoryId} = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subCategory, setSubCategory] = useState({
        name: "",
    });
    const [category, setCategory] = useState({});
    const [categories] = useFetch("/admin-api/category", "data", true);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/sub-category/${subcategoryId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adACto")}`,
                },
            });

            const resData = await response.json();
            console.log(resData);
            if (resData.status === false) {
                toast.error(resData.message);
                setIsFetching(false);
            }
            if (resData.status === true) {
                toast.success(resData.message);
                setIsFetching(false);
            }

            console.log(resData.data);
            setIsFetching(false);
            setSubCategory(resData.data);
            setCategory(resData.data.category);
        };

        fetchData();
    }, [subcategoryId]);

    const handleChange = (e) => {
        setSubCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const categoryData = {
            name: subCategory.name,
            category_id: category.id,
        };
        console.log(categoryData);

        const response = await fetch(`/admin-api/sub-category/edit/${subcategoryId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(categoryData),
        });

        const resData = await response.json();
        console.log(resData);
        if (resData.status === false) {
            toast.error(resData.message);
            setIsSubmitting(false);
        }
        if (resData.status === true) {
            toast.success(resData.message);
            setIsSubmitting(false);
            return navigate(-1);
        }
        setIsSubmitting(false);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                            <h3 className="mb-3">Sub kategoriýa üýtget</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name">Ady</label>
                                        <input type="text" className="form-control" id="name" name="name" defaultValue={subCategory.name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="category_id">Degişli kategoriýasy</label>
                                        <select
                                            className="custom-select"
                                            name="category_id"
                                            id="category_id"
                                            value={category.id}
                                            onChange={(e) => {
                                                setCategory(e.target.value);
                                            }}
                                        >
                                            {categories?.map((category, index) => (
                                                <option key={index} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group d-grid mt-3 mb-5">
                                    <button className="btn btn-green" disabled={isSubmitting}>
                                        {isSubmitting ? "Tassyklanýar..." : "Tassykla"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SubCategoryEdit;
