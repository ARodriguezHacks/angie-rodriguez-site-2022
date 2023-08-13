export default function ImageCarousel({ toggleMobileNav, children }) {
  return <button onClick={toggleMobileNav}>{children}</button>;
}
