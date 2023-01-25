import React from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Tooltip,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AppTab = () => {
  const projectsData = [
    {
      img: "/img/home-decor-1.jpeg",
      title: "Modern",
      tag: "Project #1",
      description:
        "As Uber works through a huge amount of internal management turmoil.",
      route: "/dashboard/profile",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
    },
    {
      img: "/img/home-decor-2.jpeg",
      title: "Scandinavian",
      tag: "Project #2",
      description:
        "Music is something that every person has his or her own specific opinion about.",
      route: "/dashboard/profile",
      members: [{ img: "/img/team-1.jpeg", name: "Romina Hadid" }],
    },
    {
      img: "/img/home-decor-3.jpeg",
      title: "Minimalist",
      tag: "Project #3",
      description:
        "Different people have different taste, and various types of music.",
      route: "/dashboard/profile",
      members: [{ img: "/img/team-4.jpeg", name: "Alexander Smith" }],
    },
    {
      img: "/img/home-decor-4.jpeg",
      title: "Gothic",
      tag: "Project #4",
      description:
        "Why would anyone pick blue over pink? Pink is obviously a better color.",
      route: "/dashboard/profile",
      members: [{ img: "/img/team-1.jpeg", name: "Romina Hadid" }],
    },
  ];
  return (
    <>
      <div>
        <div className="px-4 pb-4">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Projects
          </Typography>
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            Architects design houses
          </Typography>
          <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
            {projectsData.map(
              ({ img, title, description, tag, route, members }) => (
                <Card key={title} color="transparent" shadow={false}>
                  <CardHeader
                    floated={false}
                    color="gray"
                    className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                  >
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                  </CardHeader>
                  <CardBody className="py-0 px-1">
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {tag}
                    </Typography>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mt-1 mb-2"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                    {/* <Link to={route}> */}
                    <Button variant="outlined" size="sm">
                      view project
                    </Button>
                    {/* </Link> */}
                    <div>
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
                    </div>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTab;
