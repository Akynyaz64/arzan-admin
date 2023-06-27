import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import useFetch from "../../../hooks/useFetch";
import img_icon from "../../../assets/icons/img.svg";

const PostCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const title = useRef("");
    const price = useRef("");
    const discount = useRef("");
    const start_date = useRef("");
    const end_date = useRef("");
    const phone = useRef("");
    const imagesRef = useRef(null);
    const selectedCategory = useRef();
    const selectedSubCategory = useRef();
    const selectedUser = useRef();

    const [description, setDescription] = useState();

    const [file, setFile] = useState([]);
    const [previews, setPreviews] = useState([]);

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
    const [users] = useFetch("/admin-api/user", "data", true);
    // const user_id = useRef("");

    function uploadSingleFile(e) {
        let previews = Object.entries(e.target.files).map((e) => URL.createObjectURL(e[1]));
        let ImagesArray = e.target.files;
        console.log(ImagesArray);
        setFile([...file, ...ImagesArray]);
        setPreviews([...previews]);
    }

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const postData = new FormData();
        postData.append("title", title.current.value);
        postData.append("description", description);
        postData.append("price", price.current.value);
        postData.append("discount", discount.current.value);
        postData.append("category_id", selectedCategory.current.value);
        postData.append("sub_category_id", selectedSubCategory.current.value);
        postData.append("start_date", start_date.current.value);
        postData.append("end_date", end_date.current.value);

        postData.append("phone", phone.current.value);
        postData.append("tags", JSON.stringify(tags));
        postData.append("user_id", selectedUser.current.value);

        for (let i = 0; i < file.length; i++) {
            postData.append("image", file[i]);
        }
        console.log(tags);
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
                            <h3 className="mb-3">Post Create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                {file.length == 0 ? (
                                    <div className="col-xl-12 mb-4">
                                        <label className="label text-center d-flex justify-content-center align-items-center flex-column" htmlFor="images">
                                            <img src={img_icon} alt="add" className="img-fluid mb-2" />
                                            <div className="text-green">Suratlary goş</div>
                                        </label>

                                        <input type="file" disabled={file.length === 10} id="images" accept="image/*" multiple className="form-control" name="images" ref={imagesRef} onChange={uploadSingleFile} hidden />
                                    </div>
                                ) : (
                                    previews.length > 0 &&
                                    previews.map((item, index) => (
                                        <div key={index} className="col-xl-3 mb-4">
                                            <img src={item} alt="preview_photo" className="img-fluid mb-2" />
                                        </div>
                                    ))
                                )}
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" ref={title} required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="">Description</label>
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
                                    <label htmlFor="tags">Tags</label>
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
                                    <label htmlFor="category">Category</label>
                                    <select className="form-select" name="category" id="category" ref={selectedCategory}>
                                        {categories?.map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="sub_category">Sub category</label>
                                    <select className="form-select" name="sub_category" id="sub_category" ref={selectedSubCategory}>
                                        {subCategories?.map((subCategory, index) => (
                                            <option key={index} value={subCategory.id}>
                                                {subCategory.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="price">Price</label>
                                    <input type="text" className="form-control" id="price" name="price" ref={price} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="discount">Discount price</label>
                                    <input type="text" className="form-control" id="discount" name="discount" ref={discount} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="start_date">Start Date</label>
                                    <input type="date" className="form-control" id="start_date" name="start_date" ref={start_date} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="end_date">End Date</label>
                                    <input type="date" className="form-control" id="end_date" name="end_date" ref={end_date} required />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" ref={phone} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="category">User</label>
                                    <select className="form-select" name="category" id="category" ref={selectedUser}>
                                        {users?.map((user, index) => (
                                            <option key={index} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* <div className="col-xl-12">
                                    <div className="form-check form-switch ms-3">
                                        <input name="isActive" className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                                            Is Active
                                        </label>
                                    </div>
                                </div> */}
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button className="btn btn-green mb-1" disabled={isSubmitting}>
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
