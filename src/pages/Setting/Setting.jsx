import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchComments } from "../../redux/Slices/Dashboard/AsyncThunk";
import { CheckIcon } from "@heroicons/react/24/outline";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Progress,
  Input,
  Button,
} from "@material-tailwind/react";
import { debounce } from "lodash";
import axios from "axios";
const Setting = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state?.dashboard?.dashboard);
  const isLoading = useSelector((state) => state?.dashboard?.isLoading);
  const [formData, setFormData] = useState("");
  // console.log(formData);
  const handelChange = (e) => {
    // console.log(e.target.value);
    setFormData(e.target.value);
  };
  const handleSearch = debounce(async () => {
    // console.log(formData);
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?id=${formData}`
    );
    const data = await resp.data;
    // console.log(data);

    data.map(({ id, name, email, body }) => {
      document.querySelector(".userSearchData").innerHTML = `
        <h1>ID     : ${id}</h1>
        <h1>Name   : ${name}</h1>
        <h1>Email  : ${email}</h1>
        <h1>Body   : ${body}</h1>
      `;
      // <table className="w-full min-w-[640px] table-auto">
      // <thead>
      // <tr>
      // <td className="flex items-center gap-4">Id</td>
      // <td className="flex items-center gap-4">Name</td>
      // <td className="flex items-center gap-4">Email</td>
      // <td className="flex items-center gap-4">Body</td>
      // </tr></thead>
      // <tbody>
      // <tr>
      // <td className="flex items-center gap-4">${id}</td>
      // <td className="flex items-center gap-4">${name}</td>
      // <td className="flex items-center gap-4">${email}</td>
      // <td className="flex items-center gap-4">${body}</td>
      // </tr>
      // </tbody>
      // </table>
    });
    setFormData("");
  }, 1000);
  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  // console.log(comments);
  return (
    <>
      <Card className="overflow-hidden xl:col-span-2 p-5 mr-6 mt-20 mb-10">
        <CardBody>
          <div className="rounded-xl flex mb-10">
            <Input
              className="w-72 rounded-xl border-indigo-800"
              label="Search Users"
              placeholder="Enter ID"
              type="number"
              value={formData}
              onChange={handelChange}
            />
            <Button onClick={handleSearch} className=" bg-indigo-800">
              Search
            </Button>
          </div>
          <div className="userSearchData text-black text-centers"></div>
        </CardBody>
      </Card>
    </>
  );
};

export default Setting;

{
  /* <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Comments
            </Typography>
          </div>
        </CardHeader>
        <CardBody className=" px-0 pt-0 pb-2">
          <table>
            <thead>
              <tr>
                {["ID", "Name", "Email", "Body"].map((el) => (
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
                ))}
              </tr>
            </thead>
            <tbody>
              {comments?.map(({ id, name, email, body }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody> */
}
