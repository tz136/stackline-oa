import { useSelector } from 'react-redux';
import '../styles.css';
import { RootState } from '../utils/store';
import VisualizationTable from './visualization-table';
import VisualizationLine from './visualization-line';

const VisualizationContainer = () => {
  const data = useSelector((state: RootState) => state.product.data);
  console.log('data =', data);
  return (
    <div className="visualization-container">
        <VisualizationLine />
        <VisualizationTable />
    </div>
  );
}

export default VisualizationContainer;
