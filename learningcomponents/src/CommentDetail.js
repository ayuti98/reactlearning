import React  from 'react';
import faker from 'faker';

// so to get access of the props that provided to the p component that prop is going to show inside of a object
//that is provided as the first argument to the function.
const CommentDetail = (props) => {
    // console.log(props);
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author" >
               {props.author}
               {/* replace the hardcoded value with {} about to reference javascript variable and
               then inside that i reference props.author, which means whenever this CommentDetail is
               shown on the screen CommentDetail is going to look at the props object and will check if there is author
               property in there and that is going to take that author name and stick it into the anchor tag */}
            </a>
            <div className="metadata">
                <span className="date">Today at 6.00PM</span>
            </div>
            <div className="text">
                Nice blog post!
            </div>
        </div>
    </div>
    );
};

export default CommentDetail;