import { useState, useEffect } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";
import './UserListings.css'
import DeleteProductManager from "../../utilities/DeleteProductManager";
import UserListingManager from "../../utilities/UserListingManager";
import { useAuthentication } from "../../utilities/AuthenticationProvider";

function UserListings() {
  
  const [ownProducts, setProducts] = useState([]);
  const {token} = useAuthentication();

  const deleteProductManager = new DeleteProductManager("http://localhost:8080");
  const userListingManager = new UserListingManager("http://localhost:8080");
  
  useEffect(() => {
    async function loadProducts() {
      const productsData = await userListingManager.RetrieveListings(token);
      setProducts(productsData);
    }


    loadProducts();
  },[])  
    
  const removeProduct = (productId) => {
    deleteProductManager.DeleteProduct(productId, token)
    setProducts(ownProducts.filter(product => product.id !== productId));
  };

    return (
      <>
        <div className='profile-user-listings'>
            <h1>My Listings</h1>
            <div className='profile-my-listings'>
              {ownProducts.map((product) => (
                <ProductListing 
                  key={product.id}
                  product={product} 
                  isRemovable={true}
                  removeSelf={() => removeProduct(product.id)}
                />
              ))}
            </div>
        </div>
      </>
    );
  }
  
  export default UserListings;