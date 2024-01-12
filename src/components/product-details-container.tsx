import { useSelector } from 'react-redux';
import '../styles.css';
import { RootState } from '../utils/store';

const ProductDetailsContainer = () => {
  const data = useSelector((state: RootState) => state.product.data)[0];
  const tags = data.tags;
  
  const renderTags = () => {
    return tags.map((tag, index) => {
        const id = `${tag}-${index}`
        return (<div id={id} key={id} className="product-tags">{ tag }</div>)
    })
  }

  return (
    <div className="product-details-container">
        <img src={data.image} className="product-image" alt='img'/>
        <div className="product-title">{data.title}</div>
        <div className="product-subtitle">{data.subtitle}</div>
        <div className="product-tag-container">{renderTags()}</div>
    </div>
  );
}

export default ProductDetailsContainer;
