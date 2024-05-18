import './HistoryTable.css'
import { useState } from "react";

function HistoryTable(props) {
  
    const [buyer, setBuyer] = useState(props.buyer !== undefined ? props.buyer : true);
    const [products, setProducts] = useState([
        {id: 1,date:"2017-02-05",name:"testtttt",buyer:"jag",seller:"någon annan", price: 99.99},
        {id: 2,date:"2018-02-05",name:"testttasdftt",buyer:"jag",seller:"någon annan", price: 99.99},
        {id: 3,date:"2017-02-02",name:"testtt3432",buyer:"jag",seller:"någon annan", price: 99.99},
        {id: 4,date:"2017-02-07",name:"testfadft",buyer:"jag",seller:"någon annan", price: 99.99}
    ])
    const [fromDate, setFromDate] = useState(props.fromDate);
    const [toDate, setToDate] = useState(props.toDate);

    return (
      <>
        <table className='history-table'>
            <tr className='history-table-legend'>
                <th>Date</th>
                <th>Item</th>
                <th>{buyer ? 'Buyer' : 'Seller'}</th>
                <th>Price</th>
            </tr>
            {products.map((product) => {
                const inDateRange = true;
                return inDateRange && 
                <>
                    <tr>
                        <th>{product.date}</th>
                        <th>{product.name}</th>
                        <th>{buyer ? product.buyer : product.seller}</th>
                        <th>{product.price}</th>
                    </tr>
                </>
            })}
        </table>
      </>
    );
  }
  
  export default HistoryTable;