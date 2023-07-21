import {useState} from "react";
import {toast} from "react-hot-toast";

const Test = () => {
    const [videos, setVideos] = useState([]);
    const [count, setCount] = useState({});

    const fetchData = async () => {
        const response = await fetch(`/api/v1/video`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        if (!response.ok) {
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        console.log(resData.data);
        setVideos(resData.data);
    };
    const fetchBadge = async () => {
        const response = await fetch(`/api/v1/video/badge`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
        });

        if (!response.ok) {
            toast.error("Error status: " + response.statusText);
            return null;
        }
        const resData = await response.json();
        console.log(resData.data);
        setCount(resData.data);
    };

    return (
        <div className="">
            <div className="another">
                <button onClick={fetchBadge}>Fetch badge</button>
                <br />
                <h1>{count.count}</h1>
                <br />
            </div>
            <button onClick={fetchData}>Fetch videos</button>
            <br />
            <h1>{videos[0]?.items_full_count}</h1>
            <br />
        </div>
    );
};

export default Test;
