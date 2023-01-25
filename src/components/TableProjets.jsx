import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "../redux/Slices/Dashboard/AsyncThunk";
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
const TableProjets = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.dashboard?.dashboard);
  const isLoading = useSelector((state) => state?.dashboard?.isLoading);
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  console.log(comments);
  // console.log(isLoading, "loading....");
  const projectsTableData = [
    {
      img: "/img/logo-xd.svg",
      name: "Material XD Version",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
      budget: `$${isLoading ? "Loading..." : comments[13]?.id},000`,
      completion: isLoading ? "Loading..." : comments[88]?.id,
    },
    {
      img: "/img/logo-atlassian.svg",
      name: "Add Progress Track",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
      budget: `$${isLoading ? "Loading..." : comments[3]?.id},000`,

      completion: isLoading ? "Loading..." : comments[8]?.id,
    },
    {
      img: "/img/logo-slack.svg",
      name: "Fix Platform Errors",
      members: [{ img: "/img/team-1.jpeg", name: "Romina Hadid" }],
      budget: "Not set",
      completion: isLoading ? "Loading..." : comments[99]?.id,
    },
    {
      img: "/img/logo-spotify.svg",
      name: "Launch our Mobile App",
      members: [{ img: "/img/team-3.jpeg", name: "Jessica Doe" }],
      budget: `$${isLoading ? "Loading..." : comments[19]?.id},000`,

      completion: isLoading ? "Loading..." : comments[59]?.id,
    },
    {
      img: "/img/logo-jira.svg",
      name: "Add the New Pricing Page",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
      budget: `$${isLoading ? "Loading..." : comments[4]?.id},000`,

      completion: isLoading ? "Loading..." : comments[25]?.id,
    },
    {
      img: "/img/logo-invision.svg",
      name: "Redesign New Online Shop",
      members: [{ img: "/img/team-1.jpeg", name: "Romina Hadid" }],
      budget: `$${isLoading ? "Loading..." : comments[1]?.id},000`,

      completion: isLoading ? "Loading..." : comments[49]?.id,
    },
  ];
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
                {isLoading ? "Loading..." : comments[28]?.id} done
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
              {projectsTableData.map(
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
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
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

export default TableProjets;
