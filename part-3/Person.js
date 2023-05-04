const Person = ({ name, age, hobbies }) => {
  let message = age > 18 ? "Please go Vote!" : "You must be 18";
  let likes = hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, 6)}</li>
        <li>Age: {age}</li>
        <i>Hobbies:</i>
        <ul>{likes}</ul>
      </ul>
      <h3>{message}</h3>
    </div>
  );
};
