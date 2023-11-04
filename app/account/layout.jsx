
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';


export default function RootLayout({children}) {
  return (
      <div>
        <NavBar />
        <div>{children}</div>
        <div className="my-20"></div>
        <Footer />
      </div>
  )
}
