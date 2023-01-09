import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Expense Tracker</h1>
      <div className={classes.nav}>
        <a href className={classes.link}>
          Home
        </a>
        <a href className={classes.link}>
          Features
        </a>
        <a href className={classes.link}>
          Pricing
        </a>
      </div>
      <div className={classes.sign}>
        <button href className={classes.button}>
          Login
        </button>
        <button href className={classes.button}>
          Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
