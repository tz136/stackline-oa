
import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import '../styles.css';
import { RootState } from '../utils/store';
import { Line, LineChart } from 'recharts';
import { LINE_CHART_XAXIS_LABELS } from "../utils/utils";
import { get } from "lodash";

const VisualizationLine = () => {
    const data = useSelector((state: RootState) => state.product.data)[0];
    const sales = data.sales;

    const [parentWidth, setParentWidth] = useState(0);
    const parentDivRef = useRef(null);

    const getXAixLabels = () => {
        return LINE_CHART_XAXIS_LABELS.map((label) => {
            return (<div id={label} key={label}>{label}</div>)
        })
    }

    useEffect(() => {
        const updateWidth = () => {
          const width = get(parentDivRef, 'current.offsetWidth', 0);
          setParentWidth(width);
        };
    
        updateWidth();
    
        window.addEventListener('resize', updateWidth);
    
        return () => window.removeEventListener('resize', updateWidth);
    }, [parentDivRef]);

    return (
        <div className="visualization-line" ref={parentDivRef}>
            <div className="visualization-line-title">Retail Sales</div>
            <LineChart
                width={parentWidth}
                height={300}
                data={sales}
                margin={{
                    top: 10,
                    right: 80,
                    left: 80,
                    bottom: 80,
            }}
            >
                <Line type="basis" dataKey="retailSales" stroke="#5bb2f7" dot={false} strokeWidth={4} />
                <Line type="basis" dataKey="wholesaleSales" stroke="#a6afc6" dot={false} strokeWidth={4} />
            </LineChart>
            <div className="visualization-line-label">{ getXAixLabels() }</div>
        </div>
    );
}

export default VisualizationLine;
