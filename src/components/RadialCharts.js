import React, { useState, useEffect } from 'react';
import { PieChart } from "react-minimal-pie-chart";
import '../Styles/RadialCharts.css';

const RadialCharts = () => {
    
    useEffect(() => {
        handleAccuracy();
    })

    const chartData = [
        { title: "Problem", value: 25, color: "#2F3132" },
        { title: "Answer", value: 75, color: "#21BFBF" },
      ];

    const [ accuracy, setAccuracy ] = useState('');

    function handleAccuracy(){
        let sum = 0;
        chartData.forEach(data => {
            sum += data.value;
        })
        let result = (chartData[1].value /sum)*100;
        return setAccuracy(result);
    }

    return (
        <div className="chart-wrapper">
            <div className="chart-inner-wrapper">
                <PieChart
                animate
                animationDuration={800}
                animationEasing="ease-out"
                center={[50, 50]}
                data={chartData}
                lengthAngle={360}
                lineWidth={1}
                paddingAngle={2}
                startAngle={0}
                viewBoxSize={[100, 100]}
                ></PieChart>
                <div className="accuracy">ACCURACY<div>{accuracy}<span className="percentage">%</span></div></div>
            </div>
            <div className="result-info">
                <div><div className="result-title">COMPLETED</div><div><span className="result-num">100</span> <span className="result-problems">Problems</span></div></div>
                <div><div className="result-title">CORRECT</div><div><span className="result-num">75</span> <span className="result-problems">Problems</span></div></div>
            </div>
        </div>
    )
}
export default RadialCharts;