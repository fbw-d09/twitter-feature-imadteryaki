import {useState} from "react";
import './App.css';
const users = [
  {
    id: "6e432e18-0ec8-11ee-be56-0242ac120002",
    userName: "freeCodeCamp",
    name: "freeCodeCamp.org",
    isFollowing: false,
  },
  {
    id: "6e433110-0ec8-11ee-be56-0242ac120002",
    userName: "reactjs",
    name: "React",
    bio: "The library of web and native user interfaces",
    isFollowing: true,
  },
  {
    id: "6e433692-0ec8-11ee-be56-0242ac120002",
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: false,
  },
  {
    id: "b5282b44-0ec8-11ee-be56-0242ac120002",
    userName: "dci_education",
    name: "DCI Digital Career Institute",
    bio: "LEARN FOR A NEW LIFE 💙",
    isFollowing: true,
  },
];

function App() {

  const [usersData, setUsersData] = useState(users);

  const handleFollow = (userId) => {
    const updatedUsersData = usersData.map(user => {
      if (user.id === userId) {
        return { ...user, isFollowing: true };
      }
      return user;
    });
    setUsersData(updatedUsersData);
  };

  const handleUnfollow = (userId) => {
    const updatedUsersData = usersData.map(user => {
      if (user.id === userId) {
        return { ...user, isFollowing: false };
      }
      return user;
    });
    setUsersData(updatedUsersData);
  };

  return (
    <div className="App">
      <h2 className="heading">Who to Follow</h2>
      {usersData.map(user => (
        <div key={user.id} className="user">
          <img className="avatar" src={`https://unavatar.io/twitter/${user.userName}`} alt={user.userName} />
          <div className="user-details">
            <p className="user-name">{user.name}</p>
            {user.bio && <p className="bio">{user.bio}</p>}
          </div>
          {user.isFollowing ? (
            <button className="unfollow-button" onClick={() => handleUnfollow(user.id)}>Unfollow</button>
          ) : (
            <button className="follow-button" onClick={() => handleFollow(user.id)}>Follow</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
