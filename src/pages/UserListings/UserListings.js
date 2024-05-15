import { useState } from "react";
import ProductListing from "../../components/ProductListing/ProductListing";

function UserListings() {
  
    const [ownProducts, setProducts] = useState([
        { id: 1, name: 'Mac book air pro1', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
        { id: 2, name: 'Mac book air pro2', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
        { id: 3, name: 'Mac book air pro3', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
        { id: 4, name: 'Mac book air pro4', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
        { id: 5, name: 'Mac book air pro5', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
        { id: 6, name: 'Mac book air pro7', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' }
      ]);
    
      const removeProduct = (productId) => {
        console.log(ownProducts[0])
        setProducts(ownProducts.filter(product => product.id !== productId));
      };

    return (
      <>
        <div className='profile-user-listings'>
            <div className='profile-my-listings'>
              <h1>My Listings</h1>
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