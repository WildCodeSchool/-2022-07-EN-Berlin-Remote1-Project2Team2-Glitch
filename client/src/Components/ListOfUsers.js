import React from "react";
import './listOfUsers.css'


function ListOFUsers(props) {
    
    const { users } = props;  

    return (
        <div className="listOfUsers">
            <ul>{users.map(item => <li key={item.userId}> {item.name} The {item.fullname}</li>)}</ul>
        </div>
    )
}

export default ListOFUsers;