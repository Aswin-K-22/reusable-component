import PropTypes from "prop-types";

const data = [
  { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
  { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" },
];

function ProfileCard ({name,email}){
  return (
    <div className="profile__card">
      <h1>{name}</h1>
      <p>Email : {email}</p>
    </div>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function App() {
 

  return (
    <>
     <div className="App">
      {data.map((user)=> (
        <ProfileCard key={user.id} name={user.name} email={user.email} />
    ))}
     </div>
    </>
  )
}

export default App
