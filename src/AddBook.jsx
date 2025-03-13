import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Book Added! (Functionality not implemented yet)');
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} className="block w-full border p-2" required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} className="block w-full border p-2" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="block w-full border p-2" required></textarea>
        <input type="url" name="coverImage" placeholder="Cover Image URL" onChange={handleChange} className="block w-full border p-2" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
