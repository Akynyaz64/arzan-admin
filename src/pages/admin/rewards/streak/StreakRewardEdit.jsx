import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";

const StreakRewardEdit = () => {
    const navigate = useNavigate();
    const {streakId} = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [streakReward, setStreakReward] = useState({
        day_id: streakId,
        coin_amount: "",
    });
    const handleChange = (e) => {
        setStreakReward((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const response = await fetch("/admin-api/user/day-streak/reward", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(streakReward),
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
                            <h3 className="mb-3">Streak reward üýtget</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="day_id">Gün belgi</label>
                                    <input type="number" className="form-control" id="day_id" name="day_id" defaultValue={streakReward.day_id} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="coin_amount">Coin mukdary</label>
                                    <input type="number" className="form-control" id="coin_amount" name="coin_amount" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group d-grid mt-3 mb-5">
                                <button type="submit" className="btn btn-green" disabled={isSubmitting}>
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

export default StreakRewardEdit;
