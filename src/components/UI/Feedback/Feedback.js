import React, { useEffect, useState } from 'react';

function Feedback(props) {
    const [commentData, setCommentData] = useState();

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();

        console.log(data, 'data');
        setCommentData(data)
    }

    useEffect(() => {
        getData();
    });

    return (
        <div>
                {commentData.map((value, index) => {
                    return (
                        <div class="product-card">
                            <div class="badge">Hot</div>
                            <div class="product-tumb">
                                <img src={value.images[0]} alt="" />
                            </div>
                            <div class="product-details">
                                <span class="product-catagory">{value.category}</span>
                                <h4><a href="">{value.title}</a></h4>
                                <p>{value.description}</p>
                                <div class="product-bottom-details">
                                    <div class="product-price"><small>$999.00</small>${value.price}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
        </div>
    );
}

export default Feedback;