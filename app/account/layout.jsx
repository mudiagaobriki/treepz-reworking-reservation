
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import BottomBreadCrumb from '@/components/sections/BottomBreadCrumb';


export default function RootLayout({children}) {
  return (
      <div>
        <NavBar />
        <div>{children}</div>
        <div className="my-20"></div>
        <BottomBreadCrumb />
        <div className="my-14"></div>
        <div className="pt-14 tz-border-top-3 tz-bg-light">
          <Footer />
        </div>
      </div>
  )
}
