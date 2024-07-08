import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

const VideoMonitor: React.FC = () => {
  const [frame, setFrame] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);  // 跟踪全屏状态
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.252.106:5678');
    ws.onopen = () => console.log('Connected to the websocket');
    ws.onmessage = (event) => setFrame(`data:image/jpeg;base64,${event.data}`);
    ws.onerror = (error) => console.error('WebSocket error:', error);
    ws.onclose = () => console.log('WebSocket connection closed');
    return () => ws.close();
  }, []);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.fullscreenElement === videoContainerRef.current || document.webkitFullscreenElement === videoContainerRef.current || document.msFullscreenElement === videoContainerRef.current) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
      document.removeEventListener("msfullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    if (videoContainerRef.current) {
      if (!isFullScreen) {
        if (videoContainerRef.current.requestFullscreen) {
          videoContainerRef.current.requestFullscreen();
        } else if (videoContainerRef.current.webkitRequestFullscreen) { // Safari
          videoContainerRef.current.webkitRequestFullscreen();
        } else if (videoContainerRef.current.msRequestFullscreen) { // IE11
          videoContainerRef.current.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE11
          document.msExitFullscreen();
        }
      }
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[800px] relative">
      <h2 className="text-2xl font-semibold mb-4 mt-1 text-gray-800">监控画面</h2>
      <div ref={videoContainerRef} className="video-container flex justify-center items-center bg-black rounded h-full w-full relative">
        {frame ? (
          <img src={frame} alt="Video Stream" className="max-w-full max-h-full object-cover" />
        ) : (
          <p className="text-white">等待视频数据...</p>
        )}
        <button onClick={toggleFullScreen} className="absolute bottom-5 right-5 w-10 h-10 bg-white text-black rounded hover:bg-gray-200">
          <FontAwesomeIcon icon={isFullScreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter} />
        </button>
      </div>
    </div>
  );
};

export default VideoMonitor;
