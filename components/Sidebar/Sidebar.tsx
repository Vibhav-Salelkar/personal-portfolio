import Button from "../Button/Button";
import Avatar from "./Avatar/Avatar";
import Contact from "./Contact/Contact";
import About from "./About/About";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

const Sidebar = () => {

  const [mode, setMode] =useState('Dark');
  const {theme, setTheme} = useTheme();

  const emailOnClick = () => {
    window.open("mailto: salelkarvibhav@gmail.com")
  }

  const handleToggle = () => {
    setTheme(theme==='light'?'dark':'light');
  }

  useEffect(() => {    
    setMode(theme==='light'? 'Dark' : 'Light');
  }, [theme])

  return (
    <div>
      <Avatar/>
      <About/>
      <Contact/>
      <Button name="Email me" btnFunctionality={emailOnClick}/>
      <Button name={mode} btnFunctionality={handleToggle}/>
    </div>
  );
};

export default Sidebar;
