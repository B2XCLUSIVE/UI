import SideBar from "@/components/SideBar";

function Layout({ children }) {
  return (
    <>
      <div className="flex h-full relative gap-2 my-20 w-full md:w-5/6 mx-auto">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default Layout;
