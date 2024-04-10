import React, { useState, useEffect } from 'react';

const VideoMonitor: React.FC = () => {
  const [frame, setFrame] = useState<string>('');

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.252.106:5678');
    ws.onopen = () => {
      console.log('Connected to the websocket');
    };
    ws.onmessage = (event) => {
      setFrame(`data:image/jpeg;base64,${event.data}`);
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center w-[800px]">
      <h2 className="text-2xl font-semibold mb-4 mt-1 text-gray-800">监控画面</h2>
      <div className="video-container flex justify-center items-center bg-black rounded h-full w-full">
        {frame ? (
          <img src={frame} alt="Video Stream" className="max-h-full max-w-full" />
        ) : (
          <p className="text-white">等待视频数据...</p>
        )}
      </div>
    </div>
  );
};

export default VideoMonitor;
