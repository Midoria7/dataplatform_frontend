import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ControlPanel from '../components/ControlPanel';
import VideoMonitor from '../components/VideoMonitor';
import UserProfileDropdown from '../components/UserProfileDropdown';
import DataInfo from '../components/DataInfo';
import MapLocation from '../components/MapLocation';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-6xl mx-auto"> 
        <header className="w-[1000px] flex justify-between items-center mb-10 mt-10 mx-auto">
          <h1 className="text-5xl font-bold">Dashboard</h1>
          <UserProfileDropdown />
        </header>
        <div className="w-[1000px] h-[620px] flex justify-between gap-5 mx-auto">
          {/* 数据区域 */}
          <DataInfo />

          {/* 视频监控区域 */}
          <VideoMonitor />

          {/* 云台控制区域 */}
          {/* <ControlPanel /> */}
        </div>
        <div className="w-[1000px] mt-10 mx-auto">
          <MapLocation />
        </div>
      </div>
    </div>
  );
}
