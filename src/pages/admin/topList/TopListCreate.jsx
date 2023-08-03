import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {filterNames} from "../../../data/data";

const TopListCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const name = useRef("");
    const limit_count = useRef("");

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const topListData = {
            name: name.current.value,
            limit_count: limit_count.current.value,
        };

        console.log(topListData);

        const response = await fetch("/admin-api/user/top-list/limit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(topListData),
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
                            <h3 className="mb-3">Top List limit goş</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name">Filteriň ady</label>
                                    <select className="custom-select" name="name" id="name" ref={name}>
                                        {filterNames?.map((name, index) => (
                                            <option key={index} value={name.name}>
                                                {name.value}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="limit_count">Limit</label>
                                    <input type="number" className="form-control" id="limit_count" name="limit_count" ref={limit_count} />
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

export default TopListCreate;
