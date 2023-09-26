import React, { useEffect, useState } from 'react';
import CardBox from '../Card/CardBox';
import { Descri, Heading4, ProductDetail, SpanCategory } from '../Card/CardBox.style';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper();

function Feedback(props) {
    const [commentData, setCommentData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();

        console.log(data, 'data');
        setCommentData(data)
    }

    useEffect(() => {
        getData();
    }, [commentData]);

    return (
        <div id='reviewComment'>
            <div className="swiper">
                <div className="swiper-wrapper">


                    {commentData.map((value, index) => {
                        return (
                            <div className="swiper-slide">
                                <ProductDetail>
                                    <Heading4>{value.name}</Heading4>
                                    <Descri>{value.body}</Descri>
                                </ProductDetail>
                            </div>
                        )
                    })}
                    ...
                </div>
                <div className="swiper-pagination" />
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
                <div className="swiper-scrollbar" />
            </div> 

            {/* <Swiper>
                {commentData.map((value, index) => {
                    return (
                        <SwiperSlide>
                            <ProductDetail>
                                <Heading4>{value.name}</Heading4>
                                <Descri>{value.body}</Descri>
                            </ProductDetail>
                        </SwiperSlide>
                    )
                })}
            </Swiper> */}

        </div>
    );
}

export default Feedback;