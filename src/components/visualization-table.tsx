import { useSelector } from 'react-redux';
import '../styles.css';
import { RootState } from '../utils/store';
import { SALES_TYPES } from '../utils/utils';

const VisualizationTable = () => {
  const data = useSelector((state: RootState) => state.product.data)[0];
  const salesData = data.sales;
  

  const getTableHeaderCells = () => {
    return SALES_TYPES.map((type, index) => {
        const id = `${type}-${index}`
  
        return (<th id={id} key={id}>{type}</th>)
    })
  }
  const getPrince = (num: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    return formatter.format(num);
  }

  const getTableBodyCells = () => {
    return salesData.map((sale, index) => {
        const id = `${SALES_TYPES[index]}-${index}`
  
        return (
            <tr id={id} key={id} className="visualization-table-body">
                <td>{sale.weekEnding}</td>
                <td>{getPrince(sale.retailSales)}</td>
                <td>{getPrince(sale.wholesaleSales)}</td>
                <td>{sale.unitsSold}</td>
                <td>{getPrince(sale.retailerMargin)}</td>
            </tr>)
    })
  }

  return (
    <table className="visualization-table">
        <thead>
            <tr className="visualization-table-header">
            { getTableHeaderCells() }
            </tr>
        </thead>
        <tbody>
            { getTableBodyCells() }
        </tbody>
    </table>
  );
}

export default VisualizationTable;
