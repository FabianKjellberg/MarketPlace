import HistoryTable from "../../components/HistoryTable/HistoryTable";
import './History.css'

function History() {
  

    return (
      <>
        <h1>Pruchasing/Sales History</h1>
        <h3>You can choose to only view the history based on a timespan, Leave this blank if you want to see all your purchases and sales</h3>
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
            <HistoryTable buyer={true}/>
          </div>
          <div className="history-tables-table">
            <h2>Sales</h2>
            <HistoryTable buyer={false}/>
          </div>
        </div>
      </>
    );
  }
  
  export default History;