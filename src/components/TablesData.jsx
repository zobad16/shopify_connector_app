import React from "react";
import { fetchUsers } from "../redux/Slices/Users/AsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
const TablesData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsId = searchParams.get("id");
  const userId = paramsId - 1;

  const dispatch = useDispatch();
  const users = useSelector((state) => state?.users?.users);
  const isLoading = useSelector((state) => state?.users?.isLoading);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  let usersId = users[userId]?.id;
  let usersEmail = users[userId]?.email;
  let usersFirstName = users[userId]?.first_name;
  let usersLastName = users[userId]?.last_name;
  let usersAvatar = users[userId]?.avatar;

  //   console.log(`users[${userId}].id`);
  console.log(paramsId, userId, usersId, usersEmail);
  const className = "border-b border-blue-gray-50";

  return (
    <>
      <h1>TablesData</h1>
      <Card className="overflow-hidden xl:col-span-2 mr-6">
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
        <CardBody className="overflow-x-scroll px-6  ml-6 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "email", "first name", "last name", "image"].map(
                  (el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3  text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-medium uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="">
              <tr key={usersId} className="">
                <td className={className}>
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {usersId}
                    </Typography>
                  </div>
                </td>
                <td className={className}>
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {usersEmail}
                    </Typography>
                  </div>
                </td>
                <td className={className}>
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {usersFirstName}
                    </Typography>
                  </div>
                </td>
                <td className={className}>
                  <div className="flex items-center gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {usersLastName}
                    </Typography>
                  </div>
                </td>

                <td className={className}>
                  <Tooltip content={usersFirstName}>
                    <Avatar
                      src={usersAvatar}
                      alt={usersFirstName}
                      size="sm"
                      variant="circular"
                      className="cursor-pointer border-2 border-white"
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default TablesData;
