// VideoMonitor.tsx
import React, { useState } from 'react';

const videos = [
  '/src/Videos/1.mp4',
  '/src/Videos/2.mp4',
  '/src/Videos/3.mp4',
];

const VideoMonitor: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<string>(videos[0]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[800px]">
      <h2 className="text-2xl font-semibold mb-4 mt-1 text-gray-800">监控画面</h2>
      <div className="video-container flex justify-center items-center bg-black rounded h-full w-full">
        <video
          controls
          autoPlay
          muted
          loop
          className="max-h-full max-w-full"
          key={currentVideo}
        >
          <source src={currentVideo} type="video/mp4" />
          您的浏览器不支持视频标签。
        </video>
      </div>
      <div className="flex justify-center mt-4">
        {videos.map((videoSrc, index) => (
          <button
            key={videoSrc}
            onClick={() => setCurrentVideo(videoSrc)}
            className={`btn ${currentVideo === videoSrc ? 'btn-active' : 'btn'} mx-2`}
          >
            {`机位 ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoMonitor;

