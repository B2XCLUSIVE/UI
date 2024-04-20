import SideBar from "@/components/SideBar";

function Layout({ children }) {
  return (
    <>
      <div className="flex h-full relative gap-2  w-full mx-auto">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default Layout;