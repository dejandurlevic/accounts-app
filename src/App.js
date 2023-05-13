import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AccountsTable from "./components/AccountsTable/AccountsTable"
import AddAccount from "./components/AddAccount/AddAccount";
import EditAccount from "./components/EditAccount/EditAccount";
import EditDelAcc from "./components/EditDelAcc/EditDelAcc";

function App () {

    const [accounts, setAccounts] = useState([])
    
    const addNewAccountToState = (acc) => {
        setAccounts([...accounts, acc])
    }

    const deleteAccount = (id) => {
        const newCopyAccounts = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccounts);
    }

    const editAccount= (acc)=>{
        let accountPosition = accounts.map(account => account.id).indexOf(acc.id);
        accounts[accountPosition] = acc;
        setAccounts(accounts)

    }
    
        return (
            <BrowserRouter>
                <Header />
                <Route path="/" exact>
                    <AccountsTable accounts={accounts} />
                </Route>

                <Route path="/add">
                    <AddAccount addNewAccountToState={addNewAccountToState} />
                </Route>
                <Switch>
                    <Route path="/edit/:id">
                        <EditDelAcc accounts={accounts} editAccount={editAccount}/>
                    </Route>
                    <Route path="/edit">
                        <EditAccount accounts={accounts} deleteAccount={deleteAccount} />
                    </Route>

                </Switch>

            </BrowserRouter>

        )
   
}

export default App;