import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loader} from "../../../components";
import {toast} from "react-hot-toast";

const PublicationTypeView = () => {
    const {typeId} = useParams();

    const [publicationType, setPublicationType] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch(`/admin-api/publication-type/${typeId}`, {
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
        setPublicationType(resData.data);
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
                        <h3 className="mb-3">About publication type</h3>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="col-lg-8 mt-3">
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <h3>Publication type:</h3>
                                <h2>{publicationType.type}</h2>
                            </div>
                            <div className="col-md-6 mb-3">
                                <h3>Amount:</h3>
                                <h2>{publicationType.like_amount?.amount}</h2>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PublicationTypeView;