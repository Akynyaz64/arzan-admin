import {useState, useEffect} from "react";

const useFetch = (url, req, useToken) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let header = {};
        if (useToken === true) {
            header = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            };
        } else {
            header = {
                "Content-Type": "application/json",
            };
        }
        const fetchTariffs = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers: header,
            });
            const resData = await response.json();
            if (resData.status === false) {
                setError(resData.message);
                setLoading(false);
            }
            if (req.includes(".")) {
                setData(resData.data[req.slice(5)]);
            } else {
                setData(resData[req]);
            }
            setLoading(false);
        };

        fetchTariffs();
    }, [req, url, useToken]);
    return [data, loading, error];
};

export default useFetch;
