import React, { forwardRef, useImperativeHandle } from 'react';
import video from '../assets/video/supernova.webm';

const AboutMe = forwardRef ((props, ref) => {
    useImperativeHandle(ref, () => ({
        onScroll(delta) {
            let tagVideo  = document.getElementById('supernova-video');
            let fps = tagVideo.clientHeight / 29;
            let frame = (window.scrollY - 400)  / fps;
            frame = frame > 29 ? 29 : frame;
            frame = frame < 1 ? 1 : frame;
            tagVideo.currentTime = frame;
        }
    }));

    return ( 
        <section id="sobre-mim">
            <div className="supernova">
                <div className="supernova__mask"></div>
                <video id="supernova-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
});

export default AboutMe;