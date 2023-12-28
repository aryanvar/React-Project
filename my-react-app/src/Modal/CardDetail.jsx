import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import './CardDetail.css'
const CardDetail = ({card,onClose }) => {
    const [imageData, setImages] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6', {
           
          });
          const limitedImages = response.data.slice(0, 1);
  
          setImages(limitedImages);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div>
        {imageData.map((image) => (
      <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{card.title}</h2>
        <img src={image.download_url} className='card-image'/>
        {/* Display additional card details here */}
        <p>{card.description}</p>
      </div>
    </div>
    ))}
    </div>
  )
}

export default CardDetail
