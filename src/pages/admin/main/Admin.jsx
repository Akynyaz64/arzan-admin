import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faTags, faVideo} from "@fortawesome/free-solid-svg-icons";
import BarChart from "../../../components/chart/BarChart";
import ChartRadar from "../../../components/chart/PieChart";

const Admin = () => {
    const data = [
        {
            id: "ethereum",
            rank: "2",
            symbol: "ETH",
            name: "Ethereum",
            supply: "120186524.9660590900000000",
            maxSupply: null,
            marketCapUsd: "224391347508.2530843215115952",
            volumeUsd24Hr: "3158253527.1100218481440005",
            priceUsd: "1867",
            changePercent24Hr: "-0.7324055520200265",
            vwap24Hr: "1872.9133269671498054",
            explorer: "https://etherscan.io/",
        },
        {
            id: "tether",
            rank: "3",
            symbol: "USDT",
            name: "Tether",
            supply: "83234106505.6384300000000000",
            maxSupply: null,
            marketCapUsd: "83277592456.2019572535283968",
            volumeUsd24Hr: "9135516829.5353485167980229",
            priceUsd: "1321",
            changePercent24Hr: "-0.0013008193472826",
            vwap24Hr: "0.9999673653287884",
            explorer: "https://www.omniexplorer.info/asset/31",
        },
        {
            id: "bitcoin",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            supply: "19413081.0000000000000000",
            maxSupply: "21000000.0000000000000000",
            marketCapUsd: "588082510266.6944950099668990",
            volumeUsd24Hr: "4340169022.7906665519541977",
            priceUsd: "1293",
            changePercent24Hr: "0.0756155216724217",
            vwap24Hr: "30329.9422522907264433",
            explorer: "https://blockchain.info/",
        },
        {
            id: "binance-coin",
            rank: "4",
            symbol: "BNB",
            name: "BNB",
            supply: "166801148.0000000000000000",
            maxSupply: "166801148.0000000000000000",
            marketCapUsd: "39589637629.7000715746716312",
            volumeUsd24Hr: "184929380.1796226110334196",
            priceUsd: "1237",
            changePercent24Hr: "0.4032590149205883",
            vwap24Hr: "237.2744449755414447",
            explorer: "https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
        },
        {
            id: "usd-coin",
            rank: "5",
            symbol: "USDC",
            name: "USD Coin",
            supply: "28371842950.3287430000000000",
            maxSupply: null,
            marketCapUsd: "28370137957.3737476675078124",
            volumeUsd24Hr: "816429387.6763452595492932",
            priceUsd: "1233",
            changePercent24Hr: "-0.1354712871791742",
            vwap24Hr: "1.0002994309344275",
            explorer: "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        },
        {
            id: "tron",
            rank: "9",
            symbol: "TRX",
            name: "TRON",
            supply: "89964969967.3980000000000000",
            maxSupply: null,
            marketCapUsd: "6699832831.8595210041254075",
            volumeUsd24Hr: "55695015.9747452000987669",
            priceUsd: "1000",
            changePercent24Hr: "1.6967310539682505",
            vwap24Hr: "0.0738389197983144",
            explorer: "https://tronscan.org/#/",
        },
        {
            id: "xrp",
            rank: "6",
            symbol: "XRP",
            name: "XRP",
            supply: "45404028640.0000000000000000",
            maxSupply: "100000000000.0000000000000000",
            marketCapUsd: "21813848757.3618898983675680",
            volumeUsd24Hr: "370539208.3279451270448396",
            priceUsd: "850",
            changePercent24Hr: "-0.8001383248925161",
            vwap24Hr: "0.4807836314243954",
            explorer: "https://xrpcharts.ripple.com/#/graph/",
        },
        {
            id: "dogecoin",
            rank: "8",
            symbol: "DOGE",
            name: "Dogecoin",
            supply: "139933656383.7052300000000000",
            maxSupply: null,
            marketCapUsd: "9081993992.8877954440899695",
            volumeUsd24Hr: "118542274.9697426597294881",
            priceUsd: "600",
            changePercent24Hr: "-1.4410061601849719",
            vwap24Hr: "0.0652615660755892",
            explorer: "http://dogechain.info/chain/Dogecoin",
        },
        {
            id: "cardano",
            rank: "7",
            symbol: "ADA",
            name: "Cardano",
            supply: "34936046738.7930000000000000",
            maxSupply: "45000000000.0000000000000000",
            marketCapUsd: "9774561125.6510661089704046",
            volumeUsd24Hr: "72781438.0149204216654246",
            priceUsd: "100",
            changePercent24Hr: "-2.5927020179594861",
            vwap24Hr: "0.2843847075111941",
            explorer: "https://cardanoexplorer.com/",
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card card-transparent card-block card-stretch card-height border-none">
                        <div className="card-body p-0 mt-lg-2 mt-0">
                            <h1 className="mb-3">Salam, Administrator!</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="d-flex align-items-center card-total-sale">
                                        <div className="icon iq-icon-box-2 bg-success-light">
                                            <FontAwesomeIcon icon={faTags} />
                                        </div>
                                        <div>
                                            <p className="mb-2">POSTLAR</p>
                                            <h4>200</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="d-flex align-items-center card-total-sale">
                                        <div className="icon iq-icon-box-2 bg-success-light">
                                            <FontAwesomeIcon icon={faVideo} />
                                        </div>
                                        <div>
                                            <p className="mb-2">WIDEOLAR</p>
                                            <h4>200</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="card card-block card-stretch card-height">
                                <div className="card-body">
                                    <div className="d-flex align-items-center card-total-sale">
                                        <div className="icon iq-icon-box-2 bg-success-light">
                                            <FontAwesomeIcon icon={faImage} />
                                        </div>
                                        <div>
                                            <p className="mb-2">SURATLAR</p>
                                            <h4>200</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Ulanyjylaryň statistikasy</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <BarChart data={data} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Birzat statistikasy</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <ChartRadar
                                data={[
                                    {
                                        subject: "Math",
                                        A: 120,
                                        B: 110,
                                        fullMark: 150,
                                    },
                                    {
                                        subject: "Chinese",
                                        A: 98,
                                        B: 130,
                                        fullMark: 150,
                                    },
                                    {
                                        subject: "English",
                                        A: 86,
                                        B: 130,
                                        fullMark: 150,
                                    },
                                    {
                                        subject: "Geography",
                                        A: 99,
                                        B: 100,
                                        fullMark: 150,
                                    },
                                    {
                                        subject: "Physics",
                                        A: 85,
                                        B: 90,
                                        fullMark: 150,
                                    },
                                    {
                                        subject: "History",
                                        A: 65,
                                        B: 85,
                                        fullMark: 150,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Top birzat</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled row top-product mb-0">
                                <li className="col-lg-3">
                                    <div className="card card-block card-stretch card-height mb-0">
                                        <div className="card-body">
                                            <div className="bg-warning-light rounded">
                                                <img src="../assets/images/product/01.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                            </div>
                                            <div className="style-text text-left mt-3">
                                                <h5 className="mb-1">Organic Cream</h5>
                                                <p className="mb-0">789 Item</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-3">
                                    <div className="card card-block card-stretch card-height mb-0">
                                        <div className="card-body">
                                            <div className="bg-danger-light rounded">
                                                <img src="../assets/images/product/02.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                            </div>
                                            <div className="style-text text-left mt-3">
                                                <h5 className="mb-1">Rain Umbrella</h5>
                                                <p className="mb-0">657 Item</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-3">
                                    <div className="card card-block card-stretch card-height mb-0">
                                        <div className="card-body">
                                            <div className="bg-info-light rounded">
                                                <img src="../assets/images/product/03.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                            </div>
                                            <div className="style-text text-left mt-3">
                                                <h5 className="mb-1">Serum Bottle</h5>
                                                <p className="mb-0">489 Item</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="col-lg-3">
                                    <div className="card card-block card-stretch card-height mb-0">
                                        <div className="card-body">
                                            <div className="bg-success-light rounded">
                                                <img src="../assets/images/product/02.png" className="style-img img-fluid m-auto p-3" alt="image" />
                                            </div>
                                            <div className="style-text text-left mt-3">
                                                <h5 className="mb-1">Organic Cream</h5>
                                                <p className="mb-0">468 Item</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-transparent card-block card-stretch mb-4">
                        <div className="card-header d-flex align-items-center justify-content-between p-0">
                            <div className="header-title">
                                <h4 className="card-title mb-0">Best Item All Time</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <div>
                                    <a href="index.html#" className="btn btn-primary view-btn font-size-14">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-block card-stretch card-height-helf">
                        <div className="card-body card-item-right">
                            <div className="d-flex align-items-top">
                                <div className="bg-warning-light rounded">
                                    <img src="../assets/images/product/04.png" className="style-img img-fluid m-auto" alt="image" />
                                </div>
                                <div className="style-text text-left">
                                    <h5 className="mb-2">Coffee Beans Packet</h5>
                                    <p className="mb-2">Total Sell : 45897</p>
                                    <p className="mb-0">Total Earned : $45,89 M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-block card-stretch card-height-helf">
                        <div className="card-body card-item-right">
                            <div className="d-flex align-items-top">
                                <div className="bg-danger-light rounded">
                                    <img src="../assets/images/product/05.png" className="style-img img-fluid m-auto" alt="image" />
                                </div>
                                <div className="style-text text-left">
                                    <h5 className="mb-2">Bottle Cup Set</h5>
                                    <p className="mb-2">Total Sell : 44359</p>
                                    <p className="mb-0">Total Earned : $45,50 M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-block card-stretch card-height-helf">
                        <div className="card-body">
                            <div className="d-flex align-items-top justify-content-between">
                                <div className="">
                                    <p className="mb-0">Income</p>
                                    <h5>$ 98,7800 K</h5>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton003" data-toggle="dropdown">
                                            {" "}
                                            This Month<i className="ri-arrow-down-s-line ml-1"></i>{" "}
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton003">
                                            <a className="dropdown-item" href="index.html#">
                                                Year
                                            </a>
                                            <a className="dropdown-item" href="index.html#">
                                                Month
                                            </a>
                                            <a className="dropdown-item" href="index.html#">
                                                Week
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="layout1-chart-3" className="layout-chart-1"></div>
                        </div>
                    </div>
                    <div className="card card-block card-stretch card-height-helf">
                        <div className="card-body">
                            <div className="d-flex align-items-top justify-content-between">
                                <div className="">
                                    <p className="mb-0">Expenses</p>
                                    <h5>$ 45,8956 K</h5>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton004" data-toggle="dropdown">
                                            {" "}
                                            This Month<i className="ri-arrow-down-s-line ml-1"></i>{" "}
                                        </span>
                                        <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton004">
                                            <a className="dropdown-item" href="index.html#">
                                                Year
                                            </a>
                                            <a className="dropdown-item" href="index.html#">
                                                Month
                                            </a>
                                            <a className="dropdown-item" href="index.html#">
                                                Week
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="layout1-chart-4" className="layout-chart-2"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Order Summary</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <div className="dropdown">
                                    <span className="dropdown-toggle dropdown-bg btn" id="dropdownMenuButton005" data-toggle="dropdown">
                                        {" "}
                                        This Month<i className="ri-arrow-down-s-line ml-1"></i>{" "}
                                    </span>
                                    <div className="dropdown-menu dropdown-menu-right shadow-none" aria-labelledby="dropdownMenuButton005">
                                        <a className="dropdown-item" href="index.html#">
                                            Year
                                        </a>
                                        <a className="dropdown-item" href="index.html#">
                                            Month
                                        </a>
                                        <a className="dropdown-item" href="index.html#">
                                            Week
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pb-2">
                            <div className="d-flex flex-wrap align-items-center mt-2">
                                <div className="d-flex align-items-center progress-order-left">
                                    <div className="progress progress-round m-0 orange conversation-bar" data-percent="46">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value text-secondary">46%</div>
                                    </div>
                                    <div className="progress-value ml-3 pr-5 border-right">
                                        <h5>$12,6598</h5>
                                        <p className="mb-0">Average Orders</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center ml-5 progress-order-right">
                                    <div className="progress progress-round m-0 primary conversation-bar" data-percent="46">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value text-primary">46%</div>
                                    </div>
                                    <div className="progress-value ml-3">
                                        <h5>$59,8478</h5>
                                        <p className="mb-0">Top Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div id="layout1-chart-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
