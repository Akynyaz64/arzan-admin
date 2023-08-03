import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const PublicationTypeEdit = () => {
    const navigate = useNavigate();
    const {typeId} = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [publicationType, setPublicationType] = useState({
        type: "",
        like_amount: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/publication-type/${typeId}`, {
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
            setPublicationType(resData.data);
        };

        fetchData();
    }, [typeId]);

    const handleChange = (e) => {
        setPublicationType((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const typeData = {
            type: publicationType.type,
            like_amount: publicationType.like_amount,
        };
        console.log(typeData);

        const response = await fetch(`/admin-api/sub-category/edit/${typeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(typeData),
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
                            <h3 className="mb-3">Publication type üýtget</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="type">Type</label>
                                        <input type="text" className="form-control" id="type" name="type" defaultValue={publicationType.type} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="like_amount">Coin mukdary</label>
                                        <input type="text" className="form-control" id="like_amount" name="like_amount" defaultValue={publicationType.like_amount.amount} onChange={handleChange} />
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

export default PublicationTypeEdit;
