import React , {useState} from 'react'
import './AddCardModal.css'

const AddCardModal = ({onClose, onAddCard}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    onAddCard({ title, description });

    setTitle('');
    setDescription('');
    onClose();
  };
  return (
<div className="modal" aria-hidden="true">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title:</label>
          
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">Add Card</button>
        </form>
      </div>
    </div>
  );
};
export default AddCardModal
