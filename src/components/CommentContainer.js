import React from 'react';
import { COMMENTS_API } from '../utils/comments_data';
import { FaUserCircle } from "react-icons/fa";

// comment component
const Comment = ({ data }) => {
    const { name, text} = data;

    return (
        <div className='flex w-full shadow-sm bg-gray-100 p-2 m-2'>
            <FaUserCircle className='text-xl mx-2' />

            <div className='w-full'>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}


// comments list component (for n-level comments)
const CommentList = ({ comments }) => {

    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-3 ml-3 border-l border-l-black'>
                {/* recursive method */}
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
}


const CommentContainer = () => {
    return (
        <div className='m-5 p-2 w-[50vw]'>
            <h1 className='text-2xl font-bold'>comments: </h1>

            <CommentList comments={COMMENTS_API} />
        </div>
    )
}

export default CommentContainer;