import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {

    const valueArray = props.dataPoints.map(item => item.value);

    const totalMaximum = Math.max(...valueArray);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
        (<ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMaximum}
        />)
        )}
    </div>
};

export default Chart;