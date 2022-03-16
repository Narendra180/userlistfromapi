import "./user-card.css";

function UserCard({userObject}) {
  const { street,city,state,country,postcode } = userObject.location;
  const { title,first,last } = userObject.name;
  return (
    <div
      className="user-card-div"
    >
      <span className="country-label">{userObject.nat}</span>
      <div
        className="image-div"
      >
        <img
          className="profile-image" 
          src={userObject.picture.thumbnail}
          alt="profile" 
        />
      </div>

      <div
        className="user-details-div"
      >
        <h1>
          {`${title}. ${first} ${last} | ${userObject.dob.age}`}
        </h1>
        <h2>{userObject.email}</h2>
        <p>
          {
            `${street.name}, ${city}, ${state}, ${country}, ${postcode} `
          }
        </p>
      </div>
    </div>
  );
}

export default UserCard;