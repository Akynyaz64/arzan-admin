import {useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const StreakRewardCreate = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const day_id = useRef("");
    const coin_amount = useRef("");

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const streakRewardData = {
            day_id: day_id.current.value,
            coin_amount: coin_amount.current.value,
        };
        console.log(streakRewardData);

        const response = await fetch("/admin-api/user/day-streak/reward", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(streakRewardData),
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
                            <h3 className="mb-3">Streak reward create</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="day_id">Gün belgi</label>
                                    <input type="number" className="form-control" id="day_id" name="day_id" ref={day_id} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="coin_amount">Coin Amount</label>
                                    <input type="number" className="form-control" id="coin_amount" name="coin_amount" ref={coin_amount} required />
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

export default StreakRewardCreate;
