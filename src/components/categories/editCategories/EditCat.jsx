// EditCat.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditCat = ({ category, index, onSave }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDetails(category.details);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const categories = JSON.parse(localStorage.getItem('categories')) || [];
    if (categories.some(cat => cat.name.toLowerCase() === name.toLowerCase() && categories.indexOf(cat) !== index)) {
      setError('Category name must be unique.');
      return;
    }

    // Update the category
    const updatedCategory = { name, details };
    categories[index] = updatedCategory;
    localStorage.setItem('categories', JSON.stringify(categories));

    // onSave(); // Call onSave to update the parent state
    // navigate('/categories');
  };

  return (
    <div className="category-container">
      <h1>Edit Category</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Details:
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className='btn'>Update Category</button>
      </form>
    </div>
  );
};

export default EditCat;
