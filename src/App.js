import { Accountform } from "./CreateAccount";
import { Transactionform } from "./CreateTransaction";
import { AllTransactions } from "./Listalltransaction";
import { Loginpage } from "./Loginpage";
import { Homepage } from "./Mainpage";
import { Viewaccountdetails } from "./Showaccount";

function App() {
  return (
    <>
      <Homepage />
      <Loginpage />
      <Accountform />
      <Transactionform />
      <AllTransactions />
      <Viewaccountdetails />
    </>
  );
}

export default App;
