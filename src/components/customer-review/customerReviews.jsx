import './customerReview.css';
 
  

const CustomerReviews = () => {
    const reviews = [
        { name: "Alice", feedback: "Great service and very professional!" },
        { name: "Bob", feedback: "I love my new website! Highly recommend!" },
        { name: "Charlie", feedback: "Excellent support throughout the process!" }
    ];

    return (
        <div>
            <h1>Customer Reviews</h1>
            <div className="reviews">
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <strong>{review.name}</strong>
                        <p>{review.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
 
 
   