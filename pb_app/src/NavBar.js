import "stylesheets/navbar.css";

export default function NavBar() {
    async function updatePage(page) {
        if (page === "CreateAccount") {
            localStorage.setItem("currentPage", "CreateAccount");
        }
        if (page === "Login") {
            localStorage.setItem("currentPage", "Login");
        }
        window.location.reload();
    }

    return (
        <>
            <html lang="en">
                <head>
                    <link rel="stylesheet" href="navbar.css"></link>
                </head>
                <body>
                    <div className="navbar-container">
                        <ul>
                            <li><a onClick={updatePage.bind(this, "Login")}>Login</a></li>
                            <li><a onClick={updatePage.bind(this, "CreateAccount")}>Create</a></li>
                        </ul>
                    </div>
                </body>
            </html>
        </>
    );
}