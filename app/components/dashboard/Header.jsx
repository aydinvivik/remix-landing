import Brand from "../shared/Brand";
import User from "./User";
import Logout from "./Logout";
import Menu from "./Menu";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <header id="masthead" className="site-header dashboard-header dark">
      <div className="container large">
        <div className="row">
          <div className="col col-auto dinline-flex align-center">
            <Toggle />
            <Brand />
            <Menu />
            <Logout />
          </div>
          <div className="col col-strech dflex justify-end align-center hide-mobile">
            <User />
          </div>
        </div>
      </div>
    </header>
  )
}