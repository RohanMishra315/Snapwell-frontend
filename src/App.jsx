import { GoSync } from "react-icons/go";
import Sidebar, { SidebarItem } from "./components/Sidebar"
import { LuContainer } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { RiTimeZoneLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { RiNodeTree } from "react-icons/ri";


function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
      
          <SidebarItem icon={<GoSync />} text="DEPLOYMENTS" alert />
          <hr className="my-3" />
          <SidebarItem icon={<LuContainer />} text = "PODS/CONTAINERS" active/>
          <hr className="my-3" />
          <SidebarItem icon={<FaLocationDot />} text="REGION" />
          <hr className="my-3" />
          <SidebarItem icon={<RiTimeZoneLine />} text="ZONE" />
          <hr className="my-3" />
          <SidebarItem icon={<IoSettings />
} text="OS" />
          <hr className="my-3" />
          <SidebarItem icon={<BsTools />} text="ARCH" />
          <hr className="my-3" />
          <SidebarItem icon={<RiNodeTree />} text="NODE" />
          <hr className="my-3" />
        </Sidebar>
      </div>
    </>
  )
}

export default App