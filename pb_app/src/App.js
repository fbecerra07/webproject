import Login from "Login";
import CreateAccount from "CreateAccount";

export default function App() {
  if (localStorage.getItem("currentPage") === null) {
    localStorage.setItem("currentPage", "Login");
  }

  if (localStorage.getItem("currentPage") === "Login") {
    return (
      <>
        <Login/>
      </>
    );
  }

  if (localStorage.getItem("currentPage") === "CreateAccount") {
    return (
      <>
        <CreateAccount />
      </>
    )
  }
}
