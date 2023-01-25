import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "../../redux/Slices/Dashboard/AsyncThunk";
import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import StatisticsCard from "../../widgets/Cards/StatsCard";
import BarChart from "../../components/BarChart/index";
import LineChart from "../../components/LineChart/index";
import TableProjets from "../../components/TableProjets";
const DashHome = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.dashboard?.dashboard);
  const isLoading = useSelector((state) => state?.dashboard?.isLoading);

  const smallCards = [
    {
      color: "blue",
      icon: BanknotesIcon,
      title: "Today's Money",
      value: `$${isLoading ? "Loading..." : comments[80]?.id}k`,
      footer: {
        color: "text-green-500",
        value: `+${isLoading ? "Loading..." : comments[48]?.id}%`,
        label: "than last week",
      },
    },
    {
      color: "pink",
      icon: UserIcon,
      title: "Today's Users",
      value: `${isLoading ? "Loading..." : comments[498]?.id}0`,
      footer: {
        color: "text-green-500",
        value: `+${isLoading ? "Loading..." : comments[8]?.id}%`,
        label: "than last month",
      },
    },
    {
      color: "green",
      icon: UserPlusIcon,
      title: "New Clients",
      value: `${isLoading ? "Loading..." : comments[345]?.id}0`,
      footer: {
        color: "text-red-500",
        value: `-${isLoading ? "Loading..." : comments[4]?.id}%`,
        label: "than yesterday",
      },
    },
    {
      color: "orange",
      icon: ChartBarIcon,
      title: "Sales",
      value: `$${isLoading ? "Loading..." : comments[103]?.id}${
        comments[103]?.id
      }`,
      footer: {
        color: "text-green-500",
        value: `+${isLoading ? "Loading..." : comments[2]?.id}%`,
        label: "than yesterday",
      },
    },
  ];

  const ordersOverviewData = [
    {
      icon: BellIcon,
      color: "text-green-500",
      title: "$2400, Design changes",
      description: "22 DEC 7:20 PM",
    },
    {
      icon: PlusCircleIcon,
      color: "text-red-500",
      title: "New order #1832412",
      description: "21 DEC 11 PM",
    },
    {
      icon: ShoppingCartIcon,
      color: "text-blue-500",
      title: "Server payments for April",
      description: "21 DEC 9:34 PM",
    },
    {
      icon: CreditCardIcon,
      color: "text-orange-500",
      title: "New card added for order #4395133",
      description: "20 DEC 2:20 AM",
    },
    {
      icon: LockOpenIcon,
      color: "text-pink-500",
      title: "Unlock packages for development",
      description: "18 DEC 4:54 AM",
    },
    {
      icon: BanknotesIcon,
      color: "text-blue-gray-900",
      title: "New order #9583120",
      description: "17 DEC",
    },
  ];
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  return (
    <>
      <div className="mt-12 mr-6">
        <div className="mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          {smallCards?.map(({ icon, title, footer, color, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: "w-6 h-6 text-white ",
              })}
              color={color}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>
        <div className="mb-6 grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white p-3 rounded-lg ">
            {" "}
            <div className="">
              <BarChart />
            </div>
          </div>{" "}
          <div className="bg-white p-3 rounded-lg ">
            {" "}
            <div>
              <LineChart />
            </div>
          </div>{" "}
          <div className="bg-white p-3 rounded-lg ">
            <div>
              <LineChart />
            </div>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <TableProjets />
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-6"
            >
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Orders Overview
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <ArrowUpIcon
                  strokeWidth={3}
                  className="h-3.5 w-3.5 text-green-500"
                />
                <strong>24%</strong> this month
              </Typography>
            </CardHeader>
            <CardBody className="pt-0">
              {ordersOverviewData.map(
                ({ icon, color, title, description }, key) => (
                  <div key={title} className="flex items-start gap-4 py-3">
                    <div
                      className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                        key === ordersOverviewData.length - 1
                          ? "after:h-0"
                          : "after:h-4/6"
                      }`}
                    >
                      {React.createElement(icon, {
                        className: `!w-5 !h-5 ${color}`,
                      })}
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="block font-medium"
                      >
                        {title}
                      </Typography>
                      <Typography
                        as="span"
                        variant="small"
                        className="text-xs font-medium text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </div>
                  </div>
                )
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashHome;
