import Globe from "../assets/globe.png";
function Header() {
  return (
    <>
      <header>
        <img src={Globe} alt="globe image" />
        <span>my travel journal.</span>
      </header>
    </>
  );
}

export default Header;
