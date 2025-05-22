import claudeLogo from "../assets/chef-claude-icon.png";
export default function Header() {
  return (
    <header className="claudeHeader">
      <img src={claudeLogo} />
      <h1>Chef Claude</h1>
    </header>
  );
}
