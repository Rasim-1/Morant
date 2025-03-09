import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './AdminForm.module.scss';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: '',
    images: [],
    image: '',
    price: '',
    fuel: '',
    transmission: '',
    seats: '',
    oldPrice: null,
    about: ''
  });
  const [cars, setCars] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Ошибка при получении списка товаров:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImagesChange = (e) => {
    const { value } = e.target;
    const imagesArray = value.split(',').map((img) => img.trim());
    setFormData({
      ...formData,
      images: imagesArray
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:3000/cars/${formData.id}`, formData);
        alert('Товар успешно обновлен!');
      } else {
        await axios.post('http://localhost:3000/cars', {
          ...formData,
          id: Date.now()
        });
        alert('Товар успешно добавлен!');
      }
      setFormData({
        id: null,
        name: '',
        category: '',
        images: [],
        image: '',
        price: '',
        fuel: '',
        transmission: '',
        seats: '',
        oldPrice: null,
        about: ''
      });
      setEditMode(false);
      fetchCars();
    } catch (error) {
      console.error('Ошибка при сохранении товара:', error);
      alert('Ошибка при сохранении товара.');
    }
  };

  const handleEdit = (car) => {
    setFormData(car);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cars/${id}`);
      alert('Товар успешно удален!');
      fetchCars();
    } catch (error) {
      console.error('Ошибка при удалении товара:', error);
      alert('Ошибка при удалении товара.');
    }
  };

  return (
    <section>
      <div className="container">
        <div className={s.wrap}>
          <h2>{editMode ? 'Редактирование товара' : 'Добавление товара'}</h2>
          <form className={s.inpWrapper} onSubmit={handleSubmit}>
          <div className={s.inpWrap}>
          <div>
              <label>Название:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Категория:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Ссылки на изображения:</label>
              <input
                type="text"
                name="images"
                value={formData.images.join(', ')}
                onChange={handleImagesChange}
              />
            </div>
          </div>
           <div className={s.inpWrap}>
           <div>
              <label>Главное изображение:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Цена:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Объем топлива:</label>
              <input
                type="text"
                name="fuel"
                value={formData.fuel}
                onChange={handleInputChange}
              />
            </div>
           </div>
            <div className={s.inpWrap}>
            <div>
              <label>Трансмиссия:</label>
              <input
                type="text"
                name="transmission"
                value={formData.transmission}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Количество мест:</label>
              <input
                type="text"
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Старая цена:</label>
              <input
                type="text"
                name="oldPrice"
                value={formData.oldPrice || ''}
                onChange={handleInputChange}
              />
            </div>
            </div>
            <div>
              <label>Описание:</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">{editMode ? 'Обновить' : 'Добавить'}</button>
          </form>

          <h2>Список товаров</h2>
          <ul className={s.editWrapper} >
            {cars.map((car) => (
              <li key={car.id} className={s.infos}>
                <strong>{car.name}</strong> - {car.price}
                <button onClick={() => handleEdit(car)}>Редактировать</button>
                <button onClick={() => handleDelete(car.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminForm;
