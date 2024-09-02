import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());

        return function () {
            dispatch(toggleMenu()); // to setToggleMenu to true when watchPage Unmounted
        }
    }, []);

    return (
        <div className='col-span-10 flex overflow-x-hidden box-border'>
            <div className='p-4 w-[70%] box-border'>
                <iframe
                    className='w-full aspect-video rounded-xl'
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=8H_3gRaUrT-imSsB`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                ></iframe>

                <CommentContainer />
            </div>

            {/* for live chat */}
            <div className='p-4 w-[30%] h-[40vw] box-border'>
                <LiveChat />
            </div>

        </div>
    )
}

export default WatchPage;