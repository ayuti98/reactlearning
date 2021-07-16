import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            {/* whenever we provide props to the component is always going to be unique version of that component, for eg
            the author="sam" is not going to be same like other props*/ }
            <ApprovalCard/>
       <CommentDetail
        author="Sam" 
        timeAgo="Today at 4.45PM" 
        commentText="Nice blog post!"
        avatar={faker.image.avatar()} />

       <CommentDetail 
       author="Alex"
        timeAgo="Today at 2.00AM" 
        commentText="wow!beautiful"
        avatar={faker.image.avatar()}/>

       <CommentDetail 
       author="Jane" 
       timeAgo="Yesterday at 5.00PM"
       commentText="Nice!!!!!"
       avatar={faker.image.avatar()}/>
      
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));