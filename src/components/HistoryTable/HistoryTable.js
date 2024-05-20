import './HistoryTable.css'
import { useEffect, useState } from "react";

function HistoryTable(props) {
  
    const [buyer, setBuyer] = useState(props.buyer !== undefined ? props.buyer : true);
    
    const formatDate = (date) => {
        const formattedDate = new Date(date)
        
        const year = formattedDate.getFullYear();
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(formattedDate.getDate()).padStart(2, '0');
        const hours = String(formattedDate.getHours()).padStart(2, '0');
        const minutes = String(formattedDate.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const inDateRange = (date) => {
        const itemDate = new Date(date);

        const start = props.fromDate ? new Date(props.fromDate) : new Date(-8640000000000000); 
        const end = props.toDate ? new Date(props.toDate) : new Date(8640000000000000); 
        
        return itemDate >= start && itemDate <= end;
    }

    return (
      <>
        <table className='history-table'>
            
                <tr className='history-table-legend'>
                <th>Date</th>
                <th>Item</th>
                <th>{buyer ? 'Seller' : 'Buyer'}</th>
                <th>Price</th>
                </tr>
                {props.products.filter(product => inDateRange(product.timeWhenBought)).map((product, index) => (
                <tr key={index}>
                    <td>{formatDate(product.timeWhenBought)}</td>
                    <td>{product.name}</td>
                    <td>{buyer ? product.sellerUsername : product.buyerUsername}</td>
                    <td>{product.price}</td>
                </tr>
                ))}
            
        </table>
      </>
    );
  }
  
  export default HistoryTable;