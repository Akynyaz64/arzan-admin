import {useState, useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PostCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activePrice, setActivePrice] = useState(true);
    const [activeDiscount, setActiveDiscount] = useState(true);
    const [activeDates, setActiveDates] = useState(true);

    const title = useRef("");
    const price = useRef("");
    const discount = useRef("");
    const start_date = useRef("");
    const end_date = useRef("");
    const phone = useRef("");
    // const imagesRef = useRef(null);
    const selectedCategory = useRef();
    const selectedSubCategory = useRef();
    const selectedUser = useRef();

    const [activeSubcategories, setActiveSubCategory] = useState([]);

    const [description, setDescription] = useState();

    // const [file, setFile] = useState([]);
    // const [previews, setPreviews] = useState([]);

    const [input, setInput] = useState("");
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onChange = (e) => {
        const {value} = e.target;
        setInput(value);
    };

    const onKeyDown = (e) => {
        const {key} = e;
        const trimmedInput = input.trim();
        if (key === " " && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags((prevState) => [...prevState, trimmedInput]);
            setInput("");
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    };
    const deleteTag = (index) => {
        setTags((prevState) => prevState.filter((tag, i) => i !== index));
    };

    const [categories] = useFetch("/admin-api/category", "data", true);
    const [subCategories] = useFetch("/admin-api/sub-category", "data", true);
    const [users] = useFetch("/admin-api/user?name=arzan", "data.users", true);

    // const user_id = useRef("");

    // function uploadSingleFile(e) {
    //     let previews = Object.entries(e.target.files).map((e) => URL.createObjectURL(e[1]));
    //     let ImagesArray = e.target.files;
    //     console.log(ImagesArray);
    //     setFile([...file, ...ImagesArray]);
    //     setPreviews([...previews]);
    // }

    const [selectedFile1, setSelectedFile1] = useState();
    const [preview1, setPreview1] = useState();

    const [selectedFile2, setSelectedFile2] = useState();
    const [preview2, setPreview2] = useState();

    const [selectedFile3, setSelectedFile3] = useState();
    const [preview3, setPreview3] = useState();

    const [selectedFile4, setSelectedFile4] = useState();
    const [preview4, setPreview4] = useState();

    const [selectedFile5, setSelectedFile5] = useState();
    const [preview5, setPreview5] = useState();

    const [selectedFile6, setSelectedFile6] = useState();
    const [preview6, setPreview6] = useState();

    const [selectedFile7, setSelectedFile7] = useState();
    const [preview7, setPreview7] = useState();

    const [selectedFile8, setSelectedFile8] = useState();
    const [preview8, setPreview8] = useState();

    const [selectedFile9, setSelectedFile9] = useState();
    const [preview9, setPreview9] = useState();

    const [selectedFile10, setSelectedFile10] = useState();
    const [preview10, setPreview10] = useState();

    useEffect(() => {
        if (!selectedFile1) {
            setPreview1(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile1);
        setPreview1(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile1]);
    useEffect(() => {
        if (!selectedFile2) {
            setPreview2(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile2);
        setPreview2(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile2]);
    useEffect(() => {
        if (!selectedFile3) {
            setPreview3(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile3);
        setPreview3(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile3]);
    useEffect(() => {
        if (!selectedFile4) {
            setPreview4(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile4);
        setPreview4(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile4]);
    useEffect(() => {
        if (!selectedFile5) {
            setPreview5(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile5);
        setPreview5(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile5]);
    useEffect(() => {
        if (!selectedFile6) {
            setPreview6(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile6);
        setPreview6(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile6]);
    useEffect(() => {
        if (!selectedFile7) {
            setPreview7(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile7);
        setPreview7(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile7]);
    useEffect(() => {
        if (!selectedFile8) {
            setPreview8(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile8);
        setPreview8(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile8]);
    useEffect(() => {
        if (!selectedFile9) {
            setPreview9(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile9);
        setPreview9(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile9]);
    useEffect(() => {
        if (!selectedFile10) {
            setPreview10(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile10);
        setPreview10(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile10]);

    const onSelectFile1 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile1(undefined);
            return;
        }
        setSelectedFile1(e.target.files[0]);
    };
    const onSelectFile2 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile2(undefined);
            return;
        }
        setSelectedFile2(e.target.files[0]);
    };
    const onSelectFile3 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile3(undefined);
            return;
        }
        setSelectedFile3(e.target.files[0]);
    };
    const onSelectFile4 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile4(undefined);
            return;
        }
        setSelectedFile4(e.target.files[0]);
    };
    const onSelectFile5 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile5(undefined);
            return;
        }
        setSelectedFile5(e.target.files[0]);
    };
    const onSelectFile6 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile6(undefined);
            return;
        }
        setSelectedFile6(e.target.files[0]);
    };
    const onSelectFile7 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile7(undefined);
            return;
        }
        setSelectedFile7(e.target.files[0]);
    };
    const onSelectFile8 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile8(undefined);
            return;
        }
        setSelectedFile8(e.target.files[0]);
    };
    const onSelectFile9 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile9(undefined);
            return;
        }
        setSelectedFile9(e.target.files[0]);
    };
    const onSelectFile10 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile10(undefined);
            return;
        }
        setSelectedFile10(e.target.files[0]);
    };

    const changeCat = (e) => {
        console.log(e.target.value);
        console.log(subCategories);
        const activeSub = subCategories?.filter((tt) => tt.category.id == e.target.value);
        console.log(activeSub);
        setActiveSubCategory(activeSub);
    };

    useEffect(() => {
        console.log(activePrice);
    }, [activePrice]);

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const postData = new FormData();
        postData.append("title", title.current.value);
        postData.append("description", description);

        postData.append("price", price.current.value);
        postData.append("discount", discount.current.value);

        postData.append("start_date", start_date.current.value);
        postData.append("end_date", end_date.current.value);

        postData.append("category_id", selectedCategory.current.value);
        postData.append("sub_category_id", selectedSubCategory.current.value);
        postData.append("phone", phone.current.value);
        postData.append("tags", JSON.stringify(tags));
        postData.append("user_id", selectedUser.current.value);

        if (selectedFile1 !== undefined) {
            postData.append("image", selectedFile1);
        }
        if (selectedFile2 !== undefined) {
            postData.append("image", selectedFile2);
        }
        if (selectedFile3 !== undefined) {
            postData.append("image", selectedFile3);
        }
        if (selectedFile4 !== undefined) {
            postData.append("image", selectedFile4);
        }
        if (selectedFile5 !== undefined) {
            postData.append("image", selectedFile5);
        }
        if (selectedFile6 !== undefined) {
            postData.append("image", selectedFile6);
        }
        if (selectedFile7 !== undefined) {
            postData.append("image", selectedFile7);
        }
        if (selectedFile8 !== undefined) {
            postData.append("image", selectedFile8);
        }
        if (selectedFile9 !== undefined) {
            postData.append("image", selectedFile9);
        }
        if (selectedFile10 !== undefined) {
            postData.append("image", selectedFile10);
        }

        for (var pair of postData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

        const response = await fetch(`/admin-api/post`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: postData,
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
                            <h3 className="mb-3">Täze arzanladyş goşmak</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-md-3">
                                    {!selectedFile1 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile1} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview1} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile1(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile2 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile2} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview2} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile2(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile3 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile3} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview3} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile3(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile4 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile4} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview4} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile4(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile5 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile5} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview5} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile5(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile6 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile6} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview6} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile6(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile7 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile7} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview7} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile7(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile8 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile8} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview8} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile8(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile9 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile9} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview9} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile9(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    {!selectedFile10 ? (
                                        <>
                                            <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="image">
                                                <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                                <div className="text-green">Surat goş</div>
                                            </label>

                                            <input type="file" id="image" accept="image/*" className="form-control" name="image" onChange={onSelectFile10} hidden />
                                        </>
                                    ) : (
                                        <div className="position-relative">
                                            <img alt="preview" src={preview10} className="img-fluid w-100 rounded" />
                                            <div className="delete-button">
                                                <span className="btn btn-danger" onClick={() => setSelectedFile10(undefined)}>
                                                    <FontAwesomeIcon icon={faTrash} className="" />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="title">Ady</label>
                                    <input type="text" className="form-control" id="title" name="title" ref={title} required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="">Mazmuny</label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data=""
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data);
                                        }}
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="tags">Tagler</label>
                                    <input type="text" className="form-control" id="title" name="title" value={input} onKeyDown={onKeyDown} onKeyUp={onKeyUp} onChange={onChange} />
                                    <div className="tags-container mt-3">
                                        {tags.map((tag, index) => (
                                            <div key={index} className="tag" onClick={() => deleteTag(index)}>
                                                <span>
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </span>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">Kategoriýa</label>
                                    <select className="custom-select" name="category" id="category" ref={selectedCategory} onChange={(e) => changeCat(e)}>
                                        {categories?.map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="sub_category">Sub kategoriýa</label>
                                    <select className="custom-select" name="sub_category" id="sub_category" ref={selectedSubCategory}>
                                        {activeSubcategories?.map((subCategory, index) => (
                                            <option key={index} value={subCategory.id}>
                                                {subCategory.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price">Bahasy</label>
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            className="mx-2"
                                            checked={activePrice}
                                            onChange={() => {
                                                setActivePrice(!activePrice);
                                            }}
                                        />
                                        <input type="text" className="form-control" id="price" name="price" ref={price} disabled={!activePrice} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="discount">Arzanladyş</label>
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            className="mx-2"
                                            checked={activeDiscount}
                                            onChange={() => {
                                                setActiveDiscount(!activeDiscount);
                                            }}
                                        />
                                        <input type="text" className="form-control" id="discount" name="discount" ref={discount} disabled={!activeDiscount} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="start_date">Başlangyç senesi</label>
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            className="mx-2"
                                            checked={activeDates}
                                            onChange={() => {
                                                setActiveDates(!activeDates);
                                            }}
                                        />
                                        <input type="date" className="form-control" id="start_date" name="start_date" ref={start_date} disabled={!activeDates} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="end_date">Soňky senesi</label>
                                    <input type="date" className="form-control" id="end_date" name="end_date" ref={end_date} disabled={!activeDates} />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">Telefon belgi</label>
                                    <input type="text" className="form-control" id="phone" name="phone" ref={phone} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">Ulanyjy</label>
                                    <select className="custom-select" name="category" id="category" ref={selectedUser}>
                                        {users?.map((user, index) => (
                                            <option key={index} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button type="submit" className="btn btn-green mb-1" disabled={isSubmitting}>
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

export default PostCreate;
