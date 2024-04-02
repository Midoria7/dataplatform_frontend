import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowLeft, faArrowRight, faArrowDown, faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import './circle.css';

const Circle = () => {
    const sectors = [];
    for (let i = 0; i < 8; i++) {
      const colorClass = i % 2 === 0 ? "sector-even" : "sector-odd";
      sectors.push(<div key={i} className={`${colorClass}`} style={{ transform: `rotate(${i * 45 +22.5}deg)` }} ><FontAwesomeIcon icon={faArrowUp} color="blue"/></div>);
    }
  
    return (
      <div className="circle">
        {sectors}
      </div>
    );
  };
const ControlPanel: React.FC = () => {
    // 添加您的控制逻辑函数
    const handleDirection = (direction: string) => {
        console.log(`Moving: ${direction}`);
    };

    return (
        <div className="w-[260px] flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">云台控制</h2>
            <div className="relative">
                <Circle />
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