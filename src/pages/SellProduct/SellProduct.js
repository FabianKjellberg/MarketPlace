import './SellProduct.css';
import { useState } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';

function SellProduct() {
 

  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (v, i) => currentYear - i);
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    color: '',
    yearOfProduction: currentYear, 
    condition: ''
  });

  const handleChange = ((e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  });

  const handleSubmit = ((event) =>{
        event.preventDefault();
        
  });
  
  return (
    <>
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
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
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
                <option value="used-like-new">Used - Like New</option>
                <option value="used-good">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
                <option value="used-fair">Used - Bad</option>
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