import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');  // 使用电子邮件
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 防止表单默认提交行为

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }), // 发送正确的数据结构
      });
      const data = await response.json();

      if (response.ok) {
        alert('注册成功！');
        navigate('/login');
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('注册失败', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          创建新账户
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">用户名</label>
              <input id="username" name="username" type="text" autoComplete="username" required 
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                     placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">电子邮件</label>
              <input id="email" name="email" type="email" autoComplete="email" required 
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                     placeholder="电子邮件" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">密码</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required 
                     minLength={4}
                     maxLength={20}
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                     placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              注册
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
           已经有账户了？{' '}
           <a href="#" onClick={() => navigate('/login')} className="font-medium text-indigo-600 hover:text-indigo-500">
             登录
           </a>
       </p>
      </div>
    </div>
  );
};

export default RegisterPage;
