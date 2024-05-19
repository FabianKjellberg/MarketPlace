import './HistoryTable.css'
import { useState } from "react";

function HistoryTable(props) {
  
    const [buyer, setBuyer] = useState(props.buyer !== undefined ? props.buyer : true);
    const [products, setProducts] = useState(props.products)
    const [fromDate, setFromDate] = useState(props.fromDate);
    const [toDate, setToDate] = useState(props.toDate);

    return (
      <>
        <table className='history-table'>
            <tr className='history-table-legend'>
                <th>Date</th>
                <th>Item</th>
                <th>{buyer ? 'Seller' : 'Buyer'}</th>
                <th>Price</th>
            </tr>
            {products.map((product) => {
                const inDateRange = true;
                return inDateRange && 
                <>
                    <tr>
                        <th>{product.date}</th>
                        <th>{product.name}</th>
                        <th>{buyer ? product.seller : product.buyer}</th>
                        <th>{product.price}</th>
                    </tr>
                </>
            })}
        </table>
      </>
    );
  }
  
  export default HistoryTable;