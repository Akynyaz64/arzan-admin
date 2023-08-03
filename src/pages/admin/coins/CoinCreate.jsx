import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import img_icon from "../../../assets/icons/img.svg";

const CoinCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const amount = useRef("");
    const price = useRef("");

    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

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
        categoryData.append("amount", amount.current.value);
        categoryData.append("price", price.current.value);
        categoryData.append("image", selectedFile);

        for (var pair of categoryData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        const response = await fetch("/admin-api/payment", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: categoryData,
        });

        console.log(response.status);
        if (response.status !== 200) {
            toast.error(response.statusText);
            setIsSubmitting(false);
        }
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
                            <h3 className="mb-3">Täze coin paket goş</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-xl-12 mb-4">
                                    {!selectedFile ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile} hidden />
                                        </>
                                    ) : (
                                        <>
                                            <img alt="preview" src={preview} className="img-fluid" />
                                        </>
                                    )}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="amount">Mukdary</label>
                                    <input type="text" className="form-control" id="amount" name="amount" ref={amount} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price">Bahasy</label>
                                    <input type="text" className="form-control" id="price" name="price" ref={price} required />
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

export default CoinCreate;
