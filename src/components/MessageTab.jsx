import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import MessageCard from "../widgets/Cards/message-card";
const MessageTab = () => {
  const conversationsData = [
    {
      img: "/img/team-1.jpeg",
      name: "Sophie B.",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a, deserunt, reprehenderit, magni ratione saepe vitae aut quas tenetur dolores quos voluptatibus in inventore sapiente itaque ea. Et, non laudantium!",
    },
    {
      img: "/img/team-2.jpeg",
      name: "Alexander",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a, deserunt, reprehenderit, magni ratione saepe vitae aut quas tenetur dolores quos voluptatibus in inventore sapiente itaque ea. Et, non laudantium!",
    },
    {
      img: "/img/team-3.jpeg",
      name: "Ivanna",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a, deserunt, reprehenderit, magni ratione saepe vitae aut quas tenetur dolores quos voluptatibus in inventore sapiente itaque ea. Et, non laudantium!",
    },
    {
      img: "/img/team-4.jpeg",
      name: "Peterson",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a, deserunt, reprehenderit, magni ratione saepe vitae aut quas tenetur dolores quos voluptatibus in inventore sapiente itaque ea. Et, non laudantium!",
    },
    {
      img: "/img/bruce-mars.jpeg",
      name: "Bruce Mars",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi a, deserunt, reprehenderit, magni ratione saepe vitae aut quas tenetur dolores quos voluptatibus in inventore sapiente itaque ea. Et, non laudantium!",
    },
  ];
  return (
    <>
      <div className="mb-6 ">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Messages
        </Typography>
      </div>
      <ul className=" flex flex-col gap-8">
        {conversationsData.map((props) => (
          <MessageCard
            key={props.name}
            {...props}
            action={
              <Button variant="text" size="md">
                reply
              </Button>
            }
          />
        ))}
      </ul>
    </>
  );
};

export default MessageTab;
