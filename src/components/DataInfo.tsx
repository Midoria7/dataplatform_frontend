import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faDroplet, faSun, faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons';

const DataInfo: React.FC = () => {
    const [currentWeather, setCurrentWeather] = useState({
        cityname: '', temp: '', humidity: '', windspeed: '', description: ''
    });
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const apiKey = '094afb1db3980a2780a5a0748c3531b9';
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${apiKey}&units=metric&lang=zh_cn`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Singapore&appid=${apiKey}&units=metric&lang=zh_cn`;

        const fetchWeather = async () => {
            try {
                const response = await fetch(weatherUrl);
                const data = await response.json();
                if (response.ok) {
                    setCurrentWeather({
                        cityname: data.name,
                        temp: data.main.temp + ' °C',
                        humidity: data.main.humidity + ' %',
                        windspeed: data.wind.speed + ' m/s',
                        description: data.weather[0].description
                    });
                } else {
                    console.error('Weather API error:', data.message);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        const fetchForecast = async () => {
            try {
                const response = await fetch(forecastUrl);
                const data = await response.json();
                if (response.ok) {
                    setForecast(data.list.map(item => ({
                        time: new Date(item.dt * 1000).toLocaleString(),
                        temp: item.main.temp,
                        description: item.weather[0].description
                    })));
                } else {
                    console.error('Forecast API error:', data.message);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchWeather();
        fetchForecast();
    }, []);

    useEffect(() => {
        const chartDom = document.getElementById('forecastChart');
        if (forecast.length > 0 && chartDom) {
            const myChart = echarts.init(chartDom);
            myChart.setOption({
                // title:
                title: null,
                grid: {
                  top: 20, // 上边距减少
                  right: 20, // 右边距减少
                  bottom: 30, // 下边距减少
                  left: 40 // 左边距保持
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        const param = params[0];
                        return `${param.axisValueLabel}<br/>温度: ${param.data.value}°C<br/>天气: ${param.data.description}`;
                    }
                },
                xAxis: {
                    type: 'category',
                    data: forecast.map(item => item.time),
                    axisLabel: {
                      formatter: function (value) {
                          // Assuming the value format is "YYYY/MM/DD HH:mm:ss"
                          // Convert it to "M/D HH时"
                          const date = new Date(value);
                          return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}时`;
                      }
                  }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [{
                    data: forecast.map(item => ({ value: item.temp, description: item.description })),
                    type: 'line',
                    smooth: true
                }]
            });

            return () => {
                myChart.dispose(); // Clean up the chart if the component unmounts
            };
        }
    }, [forecast]);

    return (
        <div className="w-[550px] bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-2xl font-semibold mb-4">
              天气信息 - {currentWeather.cityname}
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">当前天气</h3>
              <div className="flex items-center mb-2">
                  <div className="w-6 flex justify-center"><FontAwesomeIcon icon={faTemperatureHigh} /></div>
                  <p className="ml-2"><b>温度:</b> {currentWeather.temp}</p>
              </div>
              <div className="flex items-center mb-2">
                  <div className="w-6 flex justify-center"><FontAwesomeIcon icon={faDroplet} /></div>
                  <p className="ml-2"><b>湿度:</b> {currentWeather.humidity}</p>
              </div>
              <div className="flex items-center mb-2">
                  <div className="w-6 flex justify-center"><FontAwesomeIcon icon={faWind} /></div>
                  <p className="ml-2"><b>风速:</b> {currentWeather.windspeed}</p>
              </div>
              <div className="flex items-center mb-2">
                  <div className="w-6 flex justify-center"><FontAwesomeIcon icon={faCloud} /></div>
                  <p className="ml-2"><b>天气:</b> {currentWeather.description}</p>
              </div>
          </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">未来五天天气预测</h3>
                <div className="mx-auto" id="forecastChart" style={{ width: '380px', height: '320px' }}></div>
            </div>
        </div>
    );
};

export default DataInfo;
