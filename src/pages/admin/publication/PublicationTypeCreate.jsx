import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const PublicationTypeCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const type = useRef("");
    const like_amount = useRef("");

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const publicationTypeData = {
            type: type.current.value,
            like_amount: like_amount.current.value,
        };
        console.log(publicationTypeData);

        const response = await fetch("/admin-api/publication-type", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(publicationTypeData),
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
                            <h3 className="mb-3">Publication type goş</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="type">Type</label>
                                    <input type="text" className="form-control" id="type" name="type" ref={type} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="like_amount">Coin mukdary</label>
                                    <input type="number" className="form-control" id="like_amount" name="like_amount" ref={like_amount} />
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button type="submit" className="btn btn-green" disabled={isSubmitting}>
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

export default PublicationTypeCreate;
