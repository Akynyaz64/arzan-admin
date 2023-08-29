import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Loader} from "../../../components";
import img_icon from "../../../assets/icons/img.svg";

const ServiceEdit = () => {
    const navigate = useNavigate();
    const {serviceId} = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [service, setService] = useState({
        name: "",
        cost: "",
        count: false,
        month: false,
        month_cost: "",
    });
    const [locationCosts, setLocationCosts] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const response = await fetch(`/admin-api/service/${serviceId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adACto")}`,
                },
            });

            const resData = await response.json();
            if (resData.status === false) {
                toast.error(resData.message);
                setIsFetching(false);
            }
            if (resData.status === true) {
                toast.success(resData.message);
                setIsFetching(false);
            }

            setIsFetching(false);
            setLocationCosts(
                resData.data[0].location_costs
                    .map((v) => ({...v, id: v.location.id}))
                    .map((v) => {
                        delete v.created_at;
                        return v;
                    })
            );
            console.log(resData.data[0])
            setService(resData.data[0]);
            setPreview(import.meta.env.VITE_MEDIA_URL_ACTIVE + resData.data[0].image);
        };

        fetchData();
    }, [serviceId]);

    const handleChange = (e) => {
        setService((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleChangeLocations = (e, id) => {
        setLocationCosts(
            [...locationCosts].map((object) => {
                if (object.id === id) {
                    return {
                        ...object,
                        [e.target.name]: Number(e.target.value),
                    };
                } else return object;
            })
        );
    };

    useEffect(() => {
        console.log(locationCosts);
    }, [locationCosts]);

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const categoryData = new FormData();
        categoryData.append("name", service.name);
        categoryData.append("cost", service.cost);
        categoryData.append("count", service.count);
        // categoryData.append("month", service.month);
        // if (service.month === true) {
        //     categoryData.append("month_cost", service.month_cost);
        // }
        categoryData.append("location_costs", JSON.stringify(locationCosts));
        categoryData.append("image", selectedFile);

        const response = await fetch(`/admin-api/service/${serviceId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: categoryData,
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
                            <h3 className="mb-3">Hyzmat üýtgetmek</h3>
                        </div>
                    </div>
                    {isFetching ? (
                        <Loader />
                    ) : (
                        <div className="col-lg-8 mt-3">
                            <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                                <div className="form-row">
                                    <div className="col-xl-12 mb-4">
                                        {!selectedFile && !preview ? (
                                            <>
                                                <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                    <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                    <div className="text-green">Surat goş</div>
                                                </label>

                                                <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile} hidden />
                                            </>
                                        ) : (
                                            <div className="position-relative">
                                                <img alt="preview" src={preview} className="img-fluid w-100 rounded" />
                                                <div className="delete-button">
                                                    <span className="btn btn-danger" onClick={() => setSelectedFile(null)}>
                                                        <FontAwesomeIcon icon={faTrash} className="" />
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name">Ady</label>
                                        <input type="text" className="form-control" id="name" name="name" defaultValue={service?.name} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cost">Bahasy</label>
                                        <input type="number" className="form-control" id="cost" name="cost" defaultValue={service?.cost} onChange={handleChange} required />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="count">Count</label>
                                        <input
                                            type="checkbox"
                                            className="ml-3 mt-1"
                                            id="count"
                                            name="count"
                                            defaultChecked={service?.count}
                                            onChange={(e) => {
                                                setService((prev) => ({...prev, count: e.target.checked}));
                                            }}
                                        />
                                    </div>
                                    {/* <div className="col-md-12 mb-3">
                                        <label htmlFor="month">Aýlyk bahasy</label>
                                        <div className="d-flex">
                                            <input
                                                type="checkbox"
                                                className="mx-3 mt-1"
                                                id="month"
                                                name="month"
                                                defaultChecked={service?.month}
                                                onChange={(e) => {
                                                    setService((prev) => ({...prev, month: e.target.checked}));
                                                }}
                                            />
                                            <input type="number" className="form-control" id="month_cost" name="month_cost" defaultValue={service?.month_cost} onChange={handleChange} disabled={service?.month} />
                                        </div>
                                    </div> */}
                                    {locationCosts?.map((location, index) => (
                                        <div className="col-xl-12 row" key={index}>
                                            <div className="col-md-2 mb-3">
                                                <label htmlFor="name">Welaýat</label>
                                                <h5>{location.location.display_name}</h5>
                                            </div>
                                            <div className="col-md-5 mb-3">
                                                <label htmlFor="cost">Bahasy</label>
                                                <input type="text" className="form-control" id="cost" name="cost" defaultValue={location.cost} onChange={(e) => handleChangeLocations(e, location.id)} />
                                            </div>
                                            <div className="col-md-5 mb-3">
                                                <label htmlFor="month_cost">Aýlyk bahasy</label>
                                                <input type="number" className="form-control" id="month_cost" name="month_cost" defaultValue={location.month_cost} onChange={(e) => handleChangeLocations(e, location.id)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="form-group d-grid mt-3 mb-5">
                                    <button type="submit" className="btn btn-green" disabled={isSubmitting}>
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

export default ServiceEdit;
