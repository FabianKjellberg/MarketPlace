import { useState, useEffect } from 'react';
import { useInbox } from '../../utilities/InboxContext';
import { useCart } from '../../utilities/CartProvider';
import CurrentListingManager from '../../utilities/CurrentListingManager.js';
import NotificationManager from '../../utilities/NotificationManager.js';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import './Inbox.css';

function Inbox() {
  const { items } = useCart();
  const {token} = useAuthentication();
  const { setInboxCount } = useInbox();
  const [messages, setMessages] = useState([]); // Create state for meddelanden
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [formData, setFormData] = useState({ category: '' });
  const currentListingManager = new CurrentListingManager("http://localhost:8080");

  useEffect(() => {
    async function loadProducts() {
      const productsData = await currentListingManager.RetrieveListings();
      setProducts(productsData);
      setFilteredProducts(productsData); // Initialisera filteredProducts med alla produkter
      setInboxCount(productsData.length); // Uppdatera inboxCount när produkterna laddas
    };

    const notificationManager = new NotificationManager("http://localhost:8080");
    notificationManager.GetNotifications(token).then((messages) => {
      setMessages(messages);
    }).catch((error) => {
      console.error("Error retrieving notifications:", error);
    });

    loadProducts();
  }, [setInboxCount]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Filtrera produkter baserat på vald kategori
    if (value === '') {
      setFilteredProducts(products); // Visa alla produkter om ingen kategori är vald
      setInboxCount(products.length); // Uppdatera inboxCount
    } else {
      const filtered = products.filter(product => product.category === value);
      setFilteredProducts(filtered);
      setInboxCount(filtered.length); // Uppdatera inboxCount
    }
  };

  return (
    <div className="inbox-page">
      <form className="watch-category-form" onSubmit={handleSubmit}>
        <label className='watch-category-labels'>
          <p>Add to watch list</p>
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
      </form>
      <div className="inbox-message-wrapper">
        <h1>Inbox</h1>
        {formData.category && (
          <div className="inbox-message">
            <p>
              You are watching the <strong>{formData.category}</strong> category.
            </p>
            <p>
              There are <strong>{filteredProducts.length}</strong> products in this category.
            </p>
          </div>
        )}
      </div>
      <div className="inbox-message-wrapper">
        <h1>Notifications</h1>
        <div className='inbox-message'>
          {messages.map((message, index) => (
            <div key={index}>
              <p key={index}>{message.content}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Inbox;
