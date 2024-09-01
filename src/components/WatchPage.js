import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

        return function() {
            dispatch(toggleMenu()); // to setToggleMenu to true when watchPage Unmounted
        }
    }, []);

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=8H_3gRaUrT-imSsB`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
            ></iframe>

            <CommentContainer />
        </div>
    )
}

export default WatchPage;