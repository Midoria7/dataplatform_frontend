// DataInfo.tsx
import React from 'react';


const DataInfo: React.FC = () => {
    return (
        <div className="w-[350px] bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4">环境数据</h2>
            <ul className="list-none space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">风速</h2>
                <span>3 m/s</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">PH</h2>
                <span>7.0</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">湿度</h2>
                <span>60%</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">温度</h2>
                <span>25°C</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">土壤湿度</h2>
                <span>30 mS/cm</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">氮(N)</h2>
                <span>10 mg/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">磷(P)</h2>
                <span>5 mg/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">钾(K)</h2>
                <span>8 mg/kg</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">PM2.5</h2>
                <span>15 µg/m³</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">光照</h2>
                <span>1000 lux</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">PM10</h2>
                <span>20 µg/m³</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">氧气(O₂)</h2>
                <span>21%</span>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">二氧化碳(CO₂)</h2>
                <span>400 ppm</span>
              </div>
              {/* 其他数据 */}
            </ul>
          </div>
    );
};

export default DataInfo;

