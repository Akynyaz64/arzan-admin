import {toast} from "react-hot-toast";

const handleDelete = async (id, url, data) => {
    const response = await fetch(import.meta.env.VITE_API_FETCH_ACTIVE + url + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("adACto")}`,
        },
    });

    const resData = await response.json();
    console.log(resData);
    if (resData.status === false) {
        toast.error(resData.message);
        return null;
    }
    if (resData.status === true) {
        toast.success(resData.message);
        const afterDelete = data.filter((el) => {
            return el.id !== id;
        });
        return [afterDelete];
    } else {
        return null;
    }
};

export default handleDelete;
