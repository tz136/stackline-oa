import '../styles.css';
import VisualizationTable from './visualization-table';
import VisualizationLine from './visualization-line';

const VisualizationContainer = () => {
  return (
    <div className="visualization-container">
        <VisualizationLine />
        <VisualizationTable />
    </div>
  );
}

export default VisualizationContainer;
