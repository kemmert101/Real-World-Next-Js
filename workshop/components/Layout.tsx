import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Layout({children} : {children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState(false);

    return <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
        <div className="w-full relative">
        <Switch
      checked={darkMode}
      onChange={setDarkMode}
      className={`${
        darkMode ? 'bg-blue-600' : 'bg-gray-200'
      } absolute right-1 top-1 inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
        </div>
        {children}
        </div>
}