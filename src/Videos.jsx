import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import video_car from './videos/car-video.mp4';
import video_float_car from './videos/float-car-video.mp4';
import './videos.css'

const Videos = () => {
    return(
        <div>
            <Header/>
            <main id='principal-videos'>
                <div className='container-video'>
                    <video className='videos' src={video_car} controls></video>
                    <p className='teste50'>Este vídeo é uma produção de Move on</p>
                </div>
                <div className='container-video'>
                    <video className='videos' src={video_float_car} controls></video>
                    <p className='teste50'>ola</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
export default Videos;
