import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowLeft, faArrowRight, faArrowDown, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';

const ControlPanel: React.FC = () => {
  // 添加您的控制逻辑函数
  const handleDirection = (direction: string) => {
    console.log(`Moving: ${direction}`);
  };

  return (
    <div className="w-[260px] flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">云台控制</h2>
      <div className="relative">
        <div className="flex items-center justify-center w-48 h-48 rounded-full bg-gradient-to-r from-gray-600 to-gray-900 border-4 border-gray-200 shadow-xl">
            <button onClick={() => handleDirection('up')} className="absolute top-4 left-20 btn btn-circle btn-sm text-black">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button onClick={() => handleDirection('left')} className="absolute top-20 left-4 btn btn-circle btn-sm text-black">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={() => handleDirection('right')} className="absolute top-20 right-4 btn btn-circle btn-sm text-black">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button onClick={() => handleDirection('down')} className="absolute bottom-4 left-20 btn btn-circle btn-sm text-black">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            {/* 缩放控制按钮 */}
            {/* <div className="flex items-center justify-center">
                <button onClick={() => handleDirection('zoom_in')} className="btn btn-circle btn-sm text-black mx-1">
                  <FontAwesomeIcon icon={faSearchPlus} />
                </button>
                <button onClick={() => handleDirection('zoom_out')} className="btn btn-circle btn-sm text-black mx-1">
                  <FontAwesomeIcon icon={faSearchMinus} />
                </button>
            </div> */}
        </div>
        </div>
        
        <div className="flex justify-between w-[130px] mt-4">
                <button onClick={() => handleDirection('zoom_in')} className="btn btn-sm w-[60px] text-black">
                  <FontAwesomeIcon icon={faSearchPlus} />
                </button>
                <button onClick={() => handleDirection('zoom_out')} className="btn btn-sm w-[60px] text-black">
                  <FontAwesomeIcon icon={faSearchMinus} />
                </button>
        </div>
        <div className="flex justify-between w-[130px] mt-4">
            <button onClick={() => handleDirection('left')} className="btn btn-sm w-[60px] text-black">打开</button>
            <button onClick={() => handleDirection('right')} className="btn btn-sm w-[60px] text-black">关闭</button>
        </div>
        <div className="flex justify-between w-[130px] mt-4">
            <button onClick={() => handleDirection('left')} className="btn btn-sm w-[60px] text-black">语音</button>
            <button onClick={() => handleDirection('right')} className="btn btn-sm w-[60px] text-black">截图</button>
        </div>
    </div>
  );
};

export default ControlPanel;