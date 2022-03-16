import { useState,useEffect } from 'react';
import Header from './components/header/header';
import UsersList from './components/users-list/users-list';
import LoadingIndicator from './components/loading-indicator/loading-indicator';
import './App.css';

function App() {
  
  const handleSearchInputChange = ({target: {value: v}}) => {
    const filteredUsers = [];
    usersData.apiDataUsers.results.forEach((userObject) => {
      const { street,city,state,country,postcode } = userObject.location;
      const { title,first,last } = userObject.name;
      const str = `${street.name}, ${city}, ${state}, ${country}, ${postcode} ${title}. ${first} ${last} | ${userObject.dob.age}`;
      if(str.toLowerCase().includes(v.toLowerCase())) {
        filteredUsers.push(userObject);
      }
    });
    // console.log(filteredUsers);
    console.log(filteredUsers.length);
    if(filteredUsers.length === 0) {
      setNoDataFoundVisiblity(true);
    } else {
      setNoDataFoundVisiblity(false);
    }
    setUsersData({...usersData,filteredUsers: {results: filteredUsers}});
  }

  const getUsersFromAPi = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=15");
      const data = await response.json();
      setUsersData({
        ...usersData,
        apiDataUsers: data,
        filteredUsers: data
      });
    } catch(err) {
      console.log(err);
      setTimeout(getUsersFromAPi,4000);
    }
  } 

  useEffect(() => {
    // console.log(searchInputState);
    getUsersFromAPi();
  },[]);

  const [usersData,setUsersData] = useState({
    apiDataUsers: {results: []},
    filteredUsers: {results: []}
  });

  const [noDataFoundVisiblity,setNoDataFoundVisiblity] = useState(false);

  useEffect(() => {
    console.log(usersData);
  });

  return (  
    <div className="App">
      <Header 
        onSearchInputChange={handleSearchInputChange}
      />

      {
        (usersData.apiDataUsers.results.length>0)
        ?
          (
            <UsersList 
              usersData={usersData.filteredUsers.results}
            />
          )
        :
        (
          <LoadingIndicator />
        )
      }
      

      {
        noDataFoundVisiblity?<h2>No Data Found</h2>:""
      }
    </div>
  );
}

export default App;
