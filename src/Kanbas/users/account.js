import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
      const account = await client.account();
      setAccount(account);
    };
    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        console.log("test");
        await client.signout();
        navigate("/Kanbas/signin");
    };

    useEffect(()=>{
        fetchAccount();
    }, []);

    return (
        <div className="container-fluid w-50">
          <h1>Account</h1>
          {account && (
            <div>
              <input value={account.password} className="form-control w-75 mb-2"
                onChange={(e) => setAccount({ ...account,
                  password: e.target.value })}/>
              <input value={account.firstName} className="form-control w-75 mb-2"
                onChange={(e) => setAccount({ ...account,
                  firstName: e.target.value })}/>
              <input value={account.lastName} className="form-control w-75 mb-2"
                onChange={(e) => setAccount({ ...account,
                  lastName: e.target.value })}/>
              <input type="date" value={account.dob} className="form-control w-75 mb-2"
                onChange={(e) => setAccount({ ...account,
                  dob: e.target.value })}/>
              <input value={account.email} className="form-control w-75 mb-2"
                onChange={(e) => setAccount({ ...account,
                  email: e.target.value })}/>
              <select onChange={(e) => setAccount({ ...account,
                  role: e.target.value })} className="form-select w-75 mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
              <button className="btn btn-primary border w-75 mb-2" onClick={save}>Save</button>
              <Link to="/Kanbas/admin/users" className="btn btn-warning w-75 mb-2">Users</Link>
              <button className="btn btn-danger border w-75 mb-2" onClick={signout}>SignOut</button>
            </div>
          )}
        </div>
    );
}
export default Account;