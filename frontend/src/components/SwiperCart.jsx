import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import nophoto from '../assets/no-photo.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../index.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SwiperCart({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    if(!images?.length) {
        return (
            <img src={nophoto} className="max-w-135" alt="no-image"/>
        )
    }

    return (
        <div className="my-swiper-wrapper">
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                // freeMode={true}
                direction={'vertical'}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 2,
                        direction: "horizontal"
                    },
                    425: {
                        slidesPerView: 3,
                        direction: "horizontal"
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i} >
                        <img src={image} alt={i} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                direction={'vertical'}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"

                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        direction: "horizontal"
                    },
                    // when window width is >= 768px
                    768: {
                        direction: "vertical"
                    }
                }}
            >
                {images.map((image, i) => (
                    <SwiperSlide key={i} >
                        <img src={image} alt={i} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
