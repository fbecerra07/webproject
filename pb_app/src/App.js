import Login from "Login";
import CreateAccount from "CreateAccount";
import Home from "Home";
import CreatePost from "CreatePost";

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

  else if (localStorage.getItem("currentPage") === "CreateAccount") {
    return (
      <>
        <CreateAccount />
      </>
    )
  }

  // else if (localStorage.getItem("currentPage") === "Home") {
  //   return (
  //     <>
  //       <Home />
  //     </>
  //   )
  // }

  else if (localStorage.getItem("currentPage") === "CreatePost") {
    return (
      <>
        <CreatePost />
      </>
    )
  }
}
