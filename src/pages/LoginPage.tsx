// src/pages/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [currentImage, setCurrentImage] = useState(1);
  const imageCount = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
    }, 5000); // 每5秒更换图片

    return () => clearInterval(intervalId);
  }, []);
  // 处理登录表单提交
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 防止表单默认提交行为
    try {
      const response = await fetch('http://127.0.0.1:4523/m1/4194391-0-default/auth/login', { //API 请求地址？
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // 使用Cookies保存登录状态
        Cookies.set('token', data.data.token, { expires: 7 }); // Cookie有效期为7天
        Cookies.set('uid', data.data.uid, { expires: 7 });
        Cookies.set('username', data.data.username, { expires: 7 });
        
        // 重定向到/dashboard页面
        navigate('/dashboard');
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('登录失败', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* 图片轮换区域 */}
      <div className="w-1/2 flex justify-center items-center overflow-hidden relative">
        {[...Array(imageCount).keys()].map((i) => (
          <img
            key={i + 1}
            src={`/src/pics/${i + 1}.jpg`}
            alt={`轮播图片 ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImage === i + 1 ? 'opacity-100' : 'opacity-0'}`} // 淡入淡出
          />
        ))}
      </div>
      {/* 登录表单区域 */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-xs w-full">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            登录到您的账户
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="phone-number" className="sr-only">手机号</label>
                <input id="phone-number" name="phone" type="tel" autoComplete="tel" required 
                       pattern='^1[3456789]\d{9}$'
                       className="appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                       placeholder="手机号" value={phone} 
                       onChange={e => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">密码</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required 
                       minLength={8}
                       maxLength={20}
                       className="appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="密码" value={password} 
                       onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            登录
          </button>
        </div>
      </form>
      <p className="mt-2 text-center text-sm text-gray-600">
        没有账户？{' '}
        <a href="#" onClick={() => navigate('/register')} className="font-medium text-indigo-600 hover:text-indigo-500">
          注册
        </a>
      </p>
    </div>
  </div>
</div>
);
};

export default LoginPage;
