import React, { useEffect, useRef } from 'react';

const MapLocation = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!window.AMap) {
      console.error('高德地图JS API未成功加载');
      return;
    }

    // 初始化地图
    const map = new window.AMap.Map(mapContainerRef.current, {
      resizeEnable: true,
      center: [116.397428, 39.90923], // 地图中心点
      zoom: 13 // 地图显示的缩放级别
    });

    // 可以在此添加更多地图功能，如标记、监听事件等

  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-4">地图定位</h2>
      <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default MapLocation;
