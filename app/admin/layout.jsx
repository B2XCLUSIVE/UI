import SideBar from "@/components/SideBar";
import ToastNotificationContainer from "@/components/ToastNotificationComponent";

function Layout({ children }) {
  return (
    <>
      <div className="md:flex h-full relative gap-2  w-full mx-auto">
        <SideBar />
        <ToastNotificationContainer />
        {children}
      </div>
    </>
  );
}

export default Layout;
