import React, { useEffect, useState } from 'react'
import customerReview from '../assets/Data/Review.json'
import './CustomerReview.css'
import Review from './Details';
function CustomerReview(props) {
    const [review, setReview] = useState([]);
    const [newReview, setNewReview] = useState();
    
    var reviewData = []
    useEffect(() => {
        setReview(customerReview)
        reviewData = review.length > 0 && review.find((review) => review.prodId === props.propId).reviews
        
        var prodId = review.length > 0 && review.find((review) => review.prodId === props.propId).prodId
        console.log('review data');
        console.log(reviewData)
    }, [])
   
    let submitComment = () => {
        var reviewerName = review.length > 0 && review.find((review) => review.prodId === props.propId).name
      
     const newReviews = {
        name: reviewerName,
        comment: newReview
     }
        if (Review.length > 0) {
            const existingReview = review;
            existingReview.find((review) => review.prodId === props.propId).reviews.push(newReviews);
            setReview(existingReview)
            setNewReview("")
        } else {
            const existingReview = review;
            setReview(existingReview.push(newReviews))
        }


    }
    return (

        <div>
            <div className="reviewTitle">Customer Reviews</div>
            {review.length > 0 && review.find((review) => review.prodId === props.propId).reviews.map((data) =>
                <li>
                    <ul>

                        <div className="section-comment">{data.comment}</div>
                        <div className="section-name">{data.name}</div>

                    </ul>
                </li>)}
            <div>
                <div className="reviewTitle">Add your comments</div>
                <form >
                    <textarea value={newReview} onChange={e => setNewReview(e.target.value)}></textarea>
                    <div>
                        {/* <input type="button" value="Submit" className="submit-comment" onChange={submitComment} /> */}
                        <button type="button" className="submit-comment" onClick={submitComment}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerReview
