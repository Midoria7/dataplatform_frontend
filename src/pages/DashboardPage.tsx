// src/pages/Dashboard.tsx
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token'); // 假设您使用 'token' 作为存储登录状态的 cookie
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">仪表盘</h1>
        <button
          className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
          onClick={handleLogout}
        >
          退出登录
        </button>
      </div>
      <div className="flex mt-6">
        {/* 左侧数据面板 */}
        <div className="flex-none w-1/4 p-4 bg-white shadow rounded">
          <h2 className="font-bold mb-4">环境数据</h2>
          <p>风速: 3 m/s</p>
          <p>PH: 7.0</p>
          {/* ... 其他数据 */}
          <p>二氧化碳(CO2): 400 ppm</p>
        </div>
        {/* 右侧云台控制面板 */}
        <div className="flex-grow p-4 ml-4 bg-white shadow rounded">
          <h2 className="font-bold mb-4">控制面板</h2>
          {/* 假设的控制面板，可以根据实际需要替换 */}
          <div className="control-panel-placeholder flex justify-center items-center h-64 bg-gray-200 rounded">
            云台方向控制
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// src/pages/Dashboard.tsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// // 假设您有一个Button组件在 `src/components/ui/button.tsx`
// import { Button } from '/src/components/ui/button';

// const Dashboard: React.FC = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     Cookies.remove('token'); // 移除登录token
//     navigate('/login'); // 重定向到登录页面
//   };

//   // 这里的控制函数可以根据您的实际功能进行实现
//   const handleControl = (direction: string) => {
//     console.log(`Moving ${direction}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto mt-10">
//       <div className="flex justify-end mb-4">
//         <Button onClick={handleLogout}>退出登录</Button>
//       </div>
//       <div className="grid grid-cols-3 gap-4">
//         {/* 环境数据面板 */}
//         {/* ... */}

//         {/* 农场监控面板 */}
//         {/* ... */}
        
//         {/* 云台控制面板 */}
//         <div className="flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold">云台视角控制</h1>
//             <p className="text-sm text-gray-500 dark:text-gray-400">调整摄像头角度以更好地监控。</p>
//           </div>
//           <div className="grid gap-4 mt-4">
//             <Button onClick={() => handleControl('Up')}>上</Button>
//             <div className="grid grid-cols-2 gap-4">
//               <Button onClick={() => handleControl('Left')}>左</Button>
//               <Button onClick={() => handleControl('Right')}>右</Button>
//             </div>
//             <Button onClick={() => handleControl('Down')}>下</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
