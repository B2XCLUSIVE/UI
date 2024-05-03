import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToastNotificationContainer from "@/components/ToastNotificationComponent";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ToastNotificationContainer />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
