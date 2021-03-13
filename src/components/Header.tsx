import "../styles/header.scss";

export function Header() {
  return (
    <header className="header">
      <div>
        <img src="/logo.svg" alt="to.do" />
        <label className="label-header"> by Gilles</label>
      </div>
    </header>
  );
}
