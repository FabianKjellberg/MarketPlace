import ProductListing from "../../components/ProductListing/ProductListing";
import { useState } from "react";

function Inbox() {
  

    const [ownProducts, setProducts] = useState([
      { id: 1, name: 'Mac book air pro1', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
      { id: 2, name: 'Mac book air pro2', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
      { id: 3, name: 'Mac book air pro3', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
      { id: 4, name: 'Mac book air pro4', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
      { id: 5, name: 'Mac book air pro5', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
      { id: 6, name: 'Mac book air pro7', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' }
    ]);

    return (
      <>
      <select>
      <option>hej</option>
      <option>hej2</option>
      <option>hej3</option>
      </select>
      <ProductListing />    
      <p>hej</p>  
    </>
    );
  }
  
  export default Inbox;