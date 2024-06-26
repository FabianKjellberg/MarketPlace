import './SellProduct.css';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CreateListingManager from '../../utilities/CreateListingManager';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import NotificationManager from '../../utilities/NotificationManager';

function SellProduct() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (v, i) => currentYear - i);
  const createListingManager = new CreateListingManager("http://localhost:8080/");
  const notificationManager = new NotificationManager("http://localhost:8080/");
  const { token } = useAuthentication();

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    color: '',
    category: '',
    yearOfProduction: currentYear,
    condition: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createListingManager.CreateListing(formData, token)
      .then(() => {
        setShowPopup(true);
        setFormData({
          name: '',
          price: '',
          color: '',
          category: '',
          yearOfProduction: currentYear,
          condition: ''
        });
      })
      .catch((error) => {
        console.error("Error creating listing:", error);
      });

      notificationManager.SendNotifications(formData, token).catch((error) => {
        console.error("Error sending notifications:", error);
      });
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your product has been listed!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <div className='sell-product'>
        <div className='sell-product-window'>
          <div className='sell-product-greeting'>
            <h2>Create a listing for your item!</h2>
            <h3>Enter the information needed below to sell an item</h3>
          </div>
          <form className="sell-product-form" onSubmit={handleSubmit}>
            <label className='sell-product-labels'>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className='sell-product-labels'>
              <p>Price</p>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
            <label className='sell-product-labels'>
              <p>Color</p>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              >
                <option value="">Select Color</option>
                <option value="RED">Red</option>
                <option value="GREEN">Green</option>
                <option value="BLUE">Blue</option>
                <option value="BLACK">Black</option>
                <option value="WHITE">White</option>
                <option value="YELLOW">Yellow</option>
                <option value="ORANGE">Orange</option>
                <option value="PURPLE">Purple</option>
                <option value="GREY">Grey</option>
              </select>
            </label>
            <label className='sell-product-labels'>
              <p>Category</p>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="COMPUTER">Computer</option>
                <option value="MOBILE">Mobile</option>
                <option value="ELECTRONIC">Electronic</option>
                <option value="FURNITURE">Furniture</option>
                <option value="OTHER">Other</option>
              </select>
            </label>
            <label className='sell-product-labels'>
              <p>Year Of Production</p>
              <select
                type="text"
                name="yearOfProduction"
                value={formData.yearOfProduction}
                onChange={handleChange}
                required
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </label>
            <label className='sell-product-labels'>
              <p>Condition</p>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="">Select Condition</option>
                <option value="new">New</option>
                <option value="used-very-good">Used - Very good</option>
                <option value="used-good">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
                <option value="used-bad">Used - Bad</option>
              </select>
            </label>

            <div className='sell-product-button'>
              <button type="submit">List Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellProduct;
