import ProductDetailsContainer from './product-details-container';
import VisualizationContainer from './visualization-container';

import '../styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../utils/store';
import { useEffect } from 'react';
import { fetchDataAsync } from '../utils/productSlice';

const ContentContainer = () => {
  const data = useSelector((state: RootState) => state.product.data)[0];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDataAsync());
  });
  
  return (
    data && <div className="content-container">
        <ProductDetailsContainer />
        <VisualizationContainer />
    </div>
  );
}

export default ContentContainer;
