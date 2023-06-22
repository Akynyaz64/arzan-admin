import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import {useState} from "react";
import {useRef} from "react";
import {toast} from "react-hot-toast";

const SubCategoryCreate = () => {
    const [categories] = useFetch("/admin-api/category", "data", true);

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const name = useRef("");
    const category_id = useRef("");

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const categoryData = {
            name: name.current.value,
            category_id: category_id.current.value,
        };
        console.log(categoryData)

        const response = await fetch("/admin-api/sub-category", {
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
                            <h3 className="mb-3">Sub Category Create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" ref={name} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category_id">Category</label>
                                    <select className="form-select" name="category_id" id="category_id" ref={category_id}>
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
                </div>
            </div>
        </>
    );
};

export default SubCategoryCreate;
