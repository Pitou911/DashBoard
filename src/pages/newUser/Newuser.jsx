import React from "react";
import "./Newuser.css";

function Newuser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label>Username</label>
          <input type="text" placeholder="song" />
        </div>
        <div className="newUserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="Song Pitou" />
        </div>
        <div className="newUserFormItem">
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="newUserFormItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserFormItem">
          <label>Phone</label>
          <input type="text" placeholder="+855 12 456 789" />
        </div>
        <div className="newUserFormItem">
          <label>Address</label>
          <input type="text" placeholder="Siem Reap | Cambodia" />
        </div>
        <div className="newUserFormItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserFormItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
}

export default Newuser;
