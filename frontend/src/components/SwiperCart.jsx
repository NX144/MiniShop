import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
