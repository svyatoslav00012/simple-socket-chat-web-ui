import React from "react";

import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts';

//RANDOM DATA GENERATOR
const now = Date.now()
const day = 24 * 60 * 60 * 1000

const DATA_SIZE = 12

const testData = new Array(DATA_SIZE).fill().map((_, i) =>
    ({
        x: now - i * 7 * day,
        y: 20 + Math.round(Math.random() * 10)
    })
)

const testAxisName = {
    x: 'week',
    y: 'users not using ITSL'
}

//ACTUAL CODE
const toDateStr = timestamp => new Date(timestamp).toLocaleDateString()

const GREEN = "#00FF00"
const RED = "#FF0000"

const AreaTimeSeriesChart = ({data, timePeriod, axisName, reversed, grid, good}) => {

    const toLabel = timestamp => {
        switch (timePeriod) {
            case 'WEEK':
                return toDateStr(timestamp) + '-' + toDateStr(timestamp + 6 * day)
            case 'MONTH':
                return toDateStr(timestamp).substring(3)
            case 'DAY':
            default:
                return toDateStr(timestamp)

        }
    }

    const yAxisList = Object.entries(axisName).filter(([axn, _]) => axn !== 'x')
    console.log(yAxisList)

    return (
        <AreaChart width={250}
                   height={100}
                   data={data}
                   allowDataOverflow={true}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            {grid && <CartesianGrid strokeDasharray="10 10"/>}
            <XAxis name="time"
                   scale="time"
                   dataKey="x"
                   hide={true}
                   type='number'
                   reversed={reversed}
                   domain={['dataMin', 'dataMax']}
                // tickFormatter={toLabel}
            />
            <YAxis/>

            <Tooltip labelFormatter={(value) => [`${axisName.x}: `, toLabel(value)]}
                     allowEscapeViewBox={{
                         x: true,
                         y: true
                     }}
                //formatter={(value, name) => [value, name]}
            />
            {yAxisList.map(([ax, name]) =>
                <Area type="monotone"
                      dot={false}
                      name={name}
                      dataKey={ax}
                      fill={good ? GREEN : RED}/>
            )}

        </AreaChart>
    );
}


const ChartDemo = () => (<AreaTimeSeriesChart data={testData}
                     axisName={testAxisName}
                     timePeriod='WEEK'
                     good={false}/>)

export default ChartDemo