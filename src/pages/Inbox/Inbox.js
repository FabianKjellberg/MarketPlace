import { useState } from "react";
function Inbox() {

  const handleSubmit = ((event) =>{
    event.preventDefault();
});
const handleChange = ((e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
});
const [formData, setFormData] = useState({
  name: '',
  price: '',
  color: '',
  condition: ''
});
    return (
      <>
      <div>
        <form className="sell-product-form" onSubmit={handleSubmit}>
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

          </form>

      </div>
      <div> </div>
      </>
    );
  }

  export default Inbox;
