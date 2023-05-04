const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <span>{name}</span>
      <b className="username">@{username}</b>
      <small className="date">{date}</small>
      <p>{message}</p>
    </div>
  );
};
