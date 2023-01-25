import React from "react";
import { fetchUsers } from "../redux/Slices/Users/AsyncThunk";
import { fetchProducts } from "../redux/Slices/Products/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
const NewUsersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users);
  const isLoading = useSelector((state) => state?.users?.isLoading);
  const products = useSelector((state) => state?.products?.products);
  const isLoadingProducts = useSelector((state) => state?.products?.isLoading);
  useEffect(() => {
    //dispatch(fetchProducts());
    dispatch(fetchUsers());
    
  }, []);
  console.log(users);
  //console.log("PRODUCTS::",products);
  const projectsTableData = [
    {
      img: "/img/logo-xd.svg",
      name: "Material XD Version",
      members: [
        { img: users[0]?.avatar, name: users[0]?.first_name, id: users[0]?.id },
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      img: "/img/logo-atlassian.svg",
      name: "Add Progress Track",
      members: [
        { img: users[1]?.avatar, name: users[1]?.first_name, id: users[1]?.id },
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      img: "/img/logo-slack.svg",
      name: "Fix Platform Errors",
      members: [
        { img: users[2]?.avatar, name: users[2]?.first_name, id: users[2]?.id },
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      img: "/img/logo-spotify.svg",
      name: "Launch our Mobile App",
      members: [
        { img: users[3]?.avatar, name: users[3]?.first_name, id: users[3]?.id },
      ],
      budget: "$20,500",
      completion: 100,
    },
    {
      img: "/img/logo-jira.svg",
      name: "Add the New Pricing Page",
      members: [
        { img: users[4]?.avatar, name: users[4]?.first_name, id: users[4]?.id },
      ],
      budget: "$500",
      completion: 25,
    },
    {
      img: "/img/logo-invision.svg",
      name: "Redesign New Online Shop",
      members: [
        { img: users[5]?.avatar, name: users[5]?.first_name, id: users[5]?.id },
      ],
      budget: "$2,000",
      completion: 40,
    },
  ];

  const clickHandler = (id) => {
    navigate(`/tables/data?id=${id}`);
    // console.log(id, "vclick");
  };
  return (
    <>
      <Card className="overflow-hidden xl:col-span-2">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
              <strong>
                {isLoading ? "Loading..." : users[2]?.id} done
              </strong>{" "}
              this month
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["companies", "members", "budget", "completion"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectsTableData?.map(
                ({ img, name, members, budget, completion }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="xs" />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        {" "}
                        {members?.map(({ img, name, id }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              onClick={() => {
                                clickHandler(id);
                              }}
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {budget}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? "green" : "blue"}
                            className="h-1"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default NewUsersTable;
