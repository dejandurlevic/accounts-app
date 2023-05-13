import React from "react";
import { Link } from "react-router-dom";

const Account = ({account,edit,deleteAccount}) => {
   const acctionButtons = edit ? (
    <>
    <td><Link to={"/edit/"+ account.id} className="btn btn-warning">Edit</Link></td>
    <td><button onClick={()=>{deleteAccount(account.id)}} className="btn btn-danger">Delete</button></td>
    </>
   ) : null;

    return (
        <tr>
            <th>{account.id}</th>
            <th>{account.name}</th>
            <th>{account.lastname}</th>
            <th>{account.phone}</th>
            <th>{account.email}</th>
            {acctionButtons}
        </tr>
    )

}
export default Account;