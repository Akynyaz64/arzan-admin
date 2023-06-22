import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const HomeBanner = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        autoplay: false,
    };

    return (
        <div className='container p-0 text-center mt-3'>
            <Splide options={options} hasTrack={false}>
                <SplideTrack className='row g-0'>
                    {/* {
                        banners.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((banner, index) =>
                            banner.type === "Web"
                                ?
                                banner.pageId === 1 
                                    ?
                                    <SplideSlide className='col-lg-12 p-0' key={index}>
                                        <img src={banner.banner_img} alt="banner" className='img-fluid' style={{ height: "430px" }} />
                                    </SplideSlide>
                                    :
                                    null
                                :
                                null
                        )
                    } */}
                </SplideTrack>
            </Splide>
        </div>
    )
}

export default HomeBanner