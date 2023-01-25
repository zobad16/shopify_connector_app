import { Disclosure } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";
import { Typography, Breadcrumbs } from "@material-tailwind/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBar() {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  return (
    <Disclosure as="nav" className="pt-2  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-1">
            <div className="relative flex h-16 items-center ">
              <div className="absolute inset-y-0 left-0 flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-start">
                <div className="flex flex-shrink-0 ">
                  <Breadcrumbs>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="px-2 font-normal"
                    >
                      Dashboard
                    </Typography>
                    <Link to={`/${layout}`}>
                      <Typography
                        variant="small"
                        // color="blue-gray"
                        className="px-3 capitalize"
                      >
                        {layout}
                      </Typography>
                    </Link>
                  </Breadcrumbs>
                </div>
              </div>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="px-6 -mt-4 capitalize"
            >
              {layout}
            </Typography>
          </div>
        </>
      )}
    </Disclosure>
  );
}
