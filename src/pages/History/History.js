import { useEffect, useState } from "react";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import './History.css'
import GetHistoryManager from "../../utilities/GetHistoryManager";
import { useAuthentication } from "../../utilities/AuthenticationProvider";

function History() {
  
  const [purchaseHistory, setPurchaseHistory] = useState([])
  const [salesHistory, setSalesHistory] = useState([])

  const { token } = useAuthentication();

  const getHistoryManager = new GetHistoryManager("http://localhost:8080")

  useEffect(() => {
    async function loadPurchases() {
      await getHistoryManager.RetrieveHistoryPurchases(token).then((response) => {
        console.log(response)
        setPurchaseHistory(response)
      });
    }

    async function loadSales() {
      await getHistoryManager.RetrieveHistorySales(token).then((response) => {
        console.log(response)
        setSalesHistory(response)
      });
    }


    loadPurchases();
    loadSales();
  },[])
  
  return (
      <>
        <h1>Pruchasing/Sales History</h1>
        <p>You can choose to only view the history based on a timespan, Leave this blank if you want to see all your purchases and sales</p>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#333', marginBottom: '20px', marginRight: '25px' }} />
        <div class="form-container">
          <form>
              <label for="from">From:</label>
              <input type="date" id="from" name="from"/>
              <label for="to">      To:</label>
              <input type="date" id="to" name="to"/>
          </form>
        </div>
        <div className="history-tables">
          <div className="history-tables-table">
            <h2>Purchases</h2>
            <HistoryTable 
              buyer={true}
              products={purchaseHistory}
            />
          </div>
          <div className="history-tables-table">
            <h2>Sales</h2>
              <HistoryTable 
              buyer={false}
              products={salesHistory}
            />
          </div>
        </div>
      </>
    );
  }
  
  export default History;