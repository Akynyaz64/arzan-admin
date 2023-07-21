import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";
import useFetch from "../../../../hooks/useFetch";
import {userTypes} from "../../../../data/data";

const FollowRewardsEdit = () => {
    const navigate = useNavigate();
    const {typeId} = useParams();
    const {locationId} = useParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [followReward, setFollowReward] = useState({
        subscription_type_id: userTypes.find((x) => x.name === typeId).id,
        location_id: locationId,
        coin_amount: "",
    });

    const [locations] = useFetch("/api/v1/location/list", "data");

    const handleChange = (e) => {
        setFollowReward((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    async function submitHandler(event) {
        setIsSubmitting(true);
        event.preventDefault();

        const rewardData = {
            subscription_type_id: followReward.subscription_type_id,
            location_id: followReward.location_id,
            coin_amount: followReward.coin_amount,
        };
        console.log(rewardData);

        const response = await fetch(`/admin-api/user/follow/reward`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("adACto")}`,
            },
            body: JSON.stringify(rewardData),
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
                            <h3 className="mb-3">Follow Reward edit</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-3">
                        <form onSubmit={submitHandler} id="form" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="subscription_type_id">User type</label>
                                    <input type="text" className="form-control" id="subscription_type_id" name="subscription_type_id" defaultValue={userTypes.find((x) => x.name === typeId).name} disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="location_id">Welaýat</label>
                                    <input type="text" className="form-control" id="location_id" name="location_id" defaultValue={locations?.find((x) => x.id == followReward.location_id)?.name} disabled />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="coin_amount">Coin mukdary</label>
                                    <input type="text" className="form-control" id="coin_amount" name="coin_amount" defaultValue={followReward.coin_amount} onChange={handleChange} required />
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

export default FollowRewardsEdit;
