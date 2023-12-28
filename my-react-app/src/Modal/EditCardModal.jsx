// EditCardModal.jsx
import React, { useState } from 'react';

const EditCardModal = ({ card, onEditCard, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(card.title);
  const [editedDescription, setEditedDescription] = useState(card.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditCard(card.id, { title: editedTitle, description: editedDescription });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleEditSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
