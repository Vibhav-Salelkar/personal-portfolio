import Button from "../Button/Button";
import Avatar from "./Avatar/Avatar";
import Contact from "./Contact/Contact";
import About from "./About/About";

const Sidebar = () => {

  const emailOnClick = () => {
    window.open("mailto: salelkarvibhav@gmail.com")
  }

  return (
    <div>
      <Avatar/>
      <About/>
      <Contact/>
      <Button name="Email me" btnFunctionality={emailOnClick}/>
      <Button name="Toggle Theme"/>
    </div>
  );
};

export default Sidebar;
