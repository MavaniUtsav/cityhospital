import React, { useEffect, useState } from 'react';
import CardBox from '../Card/CardBox';
import { Heading1 } from '../Heading/Heading.style';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Feedback(props) {
    const [commentData, setCommentData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();

        setCommentData(data)
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(commentData);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title"><Heading1>Reviews</Heading1></div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                >
                    {
                        commentData.map((value, index) => {
                            return (
                                <SwiperSlide>
                                    <Link path={'/admin/medicines/:id'} >
                                    <CardBox
                                        title={value.name}
                                        description={value.body}
                                    />
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Feedback;