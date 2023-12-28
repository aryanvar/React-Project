import React, {useState,useEffect} from 'react'
import moduleName from 'axios'
import'./MainComponent.css'
import axios from 'axios';
import AddCardModal from '../Modal/AddCardModal';
import EditCardModal from '../Modal/EditCardModal';
import CardDetail from '../Modal/CardDetail';
const MainComponent = (isCollapsed) => {
  const [imageData, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6', {
         
        });
        const limitedImages = response.data.slice(0, 6);

        setImages(limitedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);


  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddCard = (newCard) => {
    // Update the state to add the new card
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [editCard, setEditCard] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditCard = (cardId, updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? { ...card, ...updatedCard } : card
      )
    );
    setEditCard(null);
    setShowEditModal(false);
  };

  const openEditModal = (card) => {
    setEditCard(card);
    setShowEditModal(true);
  };
  const [deleteCardId, setDeleteCardId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteCard = (cardId) => {
    setDeleteCardId(cardId);
    setShowDeleteModal(true);
  };

  const confirmDeleteCard = () => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== deleteCardId));
    setShowDeleteModal(false);
  };

  const cancelDeleteCard = () => {
    setDeleteCardId(null);
    setShowDeleteModal(false);
  };
  
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);  
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowDetailsModal(true);
  };

  return (
<div className={`heading ${isCollapsed ? 'collapsed' : ''}`}>
      <div className='positioning' >
        <h1>My Projects</h1>
        <button  className="card-modal" onClick={openModal}>Add Card</button>
      </div>
      <div className="card-wrapper">
      {imageData.map((image) => (
          <div className="card" key={image.id}>
            <img src={image.download_url} alt={`Project ${image.id}`} />
            <p className="card-modal" onClick={openModal}>
              Create a New Project
            </p>
            <span>
              or try a <a href="">sample project</a>
            </span>
            <div className="Edit-Delete">
              <button onClick={() => openEditModal(image)}>Edit</button>
              <button onClick={() => handleDeleteCard(image.id)}>Delete</button>
            </div>
          </div>
        ))}
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <p>Title: {card.title}</p>
            <p>Description: {card.description}</p>
            <div className="Edit-Delete">
            <button onClick={() => openEditModal(card)}>Edit</button>
            <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
            <button onClick={() => handleCardClick(card)}>View more</button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <AddCardModal onClose={closeModal} onAddCard={handleAddCard} />
      )}
      {showEditModal && (
        <EditCardModal
          card={editCard}
          onEditCard={handleEditCard}
          onClose={() => setShowEditModal(false)}
        />
      )}
       {showDeleteModal && (
        <div className="delete-modal">
            <button onClick={confirmDeleteCard}>Yes</button>
            <button onClick={cancelDeleteCard}>No</button>
        </div>
      )}
{showDetailsModal && (
        <CardDetail
          card={selectedCard}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </div>
  )
}

export default MainComponent
