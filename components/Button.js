export default function Button({ children }) {
  function handleClick() {
    alert("You clicked me!");
  }
  return <button onClick={handleClick}>{children}</button>;
}
