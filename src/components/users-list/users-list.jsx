import UserCard from "../user-card/user-card";
import "./users-list.css";

function UsersList({usersData}) {
  return (
    <div
      className="users-list-div"
    > 
      {
        usersData.map((userObject) => {
          // console.log(userObject);
          return <UserCard key={userObject.login.uuid} userObject={userObject}/>
        })  
      }
    </div>
  );
}

export default UsersList;