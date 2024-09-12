export function Navbar() {
  const menuItems = [
    { page: "About", url: "/" },
    { page: "Projects", url: "/projects" },
    { page: "Resume", url: "/cv" },
    // {
    //   page: "Contact",
    //   url: "mailto:yang.siming@Outlook.com?subject=Mail From the Portfolio",
    // },
  ];

  const menuButtons = menuItems.map(
    (val: { page: string; url: string }, key: number) => (
      <li key={key}>
        <a href={val.url}>
          <b>{val.page}</b>
        </a>
      </li>
    )
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuButtons}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Siming Yang Portfolio</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuButtons}</ul>
      </div>
    </div>
  );
}
