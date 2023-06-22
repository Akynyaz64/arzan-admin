import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import banner from '../../assets/banners/offical/1.png'

const OfficalBanner = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        autoplay: false,
    };

    return (
        <Splide options={options} hasTrack={false}>
            <SplideTrack>
                <SplideSlide>
                    <img src={banner} alt="banner" className='img-fluid' style={{ height: "400px" }} />
                </SplideSlide>
            </SplideTrack>
        </Splide>
    )
}

export default OfficalBanner