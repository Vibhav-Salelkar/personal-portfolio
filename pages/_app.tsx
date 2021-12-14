import "../styles/globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import {ThemeProvider} from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-12 sm:px-20 md:px-24 lg:px-22">
        <div className="col-span-12 p-4 text-center bg-white shadow-vs-light dark:shadow-vs-dark dark:bg-dark-500 lg:col-span-3 rounded-2xl">
          <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500">
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
