import Footer from './Footer/Footer'
export default function Layout({ children }) {
  return (
    <div>
      { children }
      <Footer />
    </div>
  )
}