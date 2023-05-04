const App = () => {
  return (
    <div>
      <Tweet
        username="yoda1"
        name="Rambo"
        date={new Date().toDateString()}
        message="May the force be with you"
      />

      <Tweet
        username="yoda2"
        name="Monk"
        date={new Date().toDateString()}
        message="Its a trap!"
      />

      <Tweet
        username="yoda3"
        name="Catty"
        date={new Date().toDateString()}
        message="I find your lack of faith disturbing."
      />
    </div>
  );
};
