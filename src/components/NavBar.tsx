import Logo from "./Logo";

function NavBar() {
  return (
    <>
      <Logo />
      <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;