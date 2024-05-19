import './HistoryTable.css'
import { useEffect, useState } from "react";

function HistoryTable(props) {
  
    const [buyer, setBuyer] = useState(props.buyer !== undefined ? props.buyer : true);
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
            {props.products.map((product) => {
                const inDateRange = true;
                return inDateRange && 
                <>
                    <tr>
                        <th>{product.date}</th>
                        <th>{product.name}</th>
                        <th>{buyer ? product.sellerUsername : product.buyerUsername}</th>
                        <th>{product.price}</th>
                    </tr>
                </>
            })}
        </table>
      </>
    );
  }
  
  export default HistoryTable;