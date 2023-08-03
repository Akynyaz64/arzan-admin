import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {Loader} from "../../../components";

const WelayatEdit = () => {
    const navigate = useNavigate();
    const {welayatId} = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [welayat, setWelayat] = useState({
        name: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/location/${welayatId}`, {
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
            setWelayat(resData.data);
        };

        fetchData();
    }, [welayatId]);

    const handleChange = (e) => {
        setWelayat((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const welayatData = {
            name: welayat.name,
        };

        const response = await fetch(`/admin-api/location/edit/${welayatId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(welayatData),
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
                            <h3 className="mb-3">Welaýat üýtget</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="name">Ady</label>
                                        <input type="text" className="form-control" id="name" name="name" defaultValue={welayat?.name} onChange={handleChange} required />
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

export default WelayatEdit;
