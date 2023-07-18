export default function Button({ toggleMobileNav, children }) {
  return <button onClick={toggleMobileNav}>{children}</button>;
}
