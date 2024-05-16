import SideBar from "@/components/SideBar";
import ToastNotificationContainer from "@/components/ToastNotificationComponent";

function Layout({ children }) {
  return (
    <>
      <div className="md:flex h-full relative w-full mx-auto">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
