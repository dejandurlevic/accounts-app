import React from "react";
import Account from "../Account/Account";

const AccountsTable = ({ accounts }) => {
    const AllAccounts = accounts.map(account => {
        return (
           <Account account={account} key={account.id}/>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Accounts</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>LastName</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {AllAccounts}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AccountsTable;