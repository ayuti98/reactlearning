import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
const App = () => {
    return (
        <div className="ui container comments">
            {/* whenever we provide props to the component is always going to be unique version of that component, for eg
            the author="sam" is not going to be same like other props*/ }
       <CommentDetail author="Sam" />
       <CommentDetail author="Alex"/>
       <CommentDetail author="Jane"/>
      
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));