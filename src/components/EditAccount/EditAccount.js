import React from "react";
import Account from "../Account/Account";

const EditAccount = ({ accounts, deleteAccount }) => {

    const AllAccounts = accounts.map(account => {
        return (
            <Account account={account} edit={true} key={account.id} deleteAccount={deleteAccount} />
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Edit/Delete Accounts</h3>
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
                                        <th>Edit</th>
                                        <th>Delete</th>
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

export default EditAccount;