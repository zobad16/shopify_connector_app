import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchComments } from "../../redux/Slices/Dashboard/AsyncThunk";
import {
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Avatar,
  Card,
  CardBody,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import AppTab from "../../components/AppTab";
import MessageTab from "../../components/MessageTab";
import SettingsTab from "../../components/SettingsTab";
const User = () => {
  const [appTab, setAppTab] = useState(true);
  const [message, setMessage] = useState(false);
  const [settings, setSettings] = useState(false);
  // console.log(appTab);
  const dispatch = useDispatch();
  const data = localStorage.getItem('user_data');
  const {user,token,role, firstname,lastname}=JSON.parse(data);
  //const user = data.user| '@';
  console.log(`USER::${data.token}`);
  const dashboard = useSelector((state) => state?.dashboard?.dashboard);
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  // console.log(dashboard);
  return (
    <>
      <div className="relative mt-8  h-72 mr-6  overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center ">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 mr-9">
        <CardBody>
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {" "}
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                width="120"
                // size="sm"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {firstname} {lastname}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
            <div className="w-96 rounded-lg bg-[#00000017] ">
              <Tabs value="app">
                <TabsHeader>
                  <Tab
                    value="app"
                    className={`rounded-lg  ${appTab ? "bg-white" : false}`}
                    onClick={() => {
                      setAppTab(true);
                      setMessage(false);
                      setSettings(false);
                    }}
                  >
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab
                    value="message"
                    className={`rounded-lg  ${message ? "bg-white" : false}`}
                    onClick={() => {
                      setMessage(true);
                      setAppTab(false);
                      setSettings(false);
                    }}
                  >
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab
                    value="settings"
                    className={`rounded-lg  ${settings ? "bg-white" : false}`}
                    onClick={() => {
                      setMessage(false);
                      setAppTab(false);
                      setSettings(true);
                    }}
                  >
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div>
            {appTab ? <AppTab /> : false}
            {message ? <MessageTab /> : false}
            {settings ? <SettingsTab /> : false}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default User;
