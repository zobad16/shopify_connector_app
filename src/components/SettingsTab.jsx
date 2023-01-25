import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import ProfileInfoCard from "../widgets/Cards/profile-info-card";
const SettingsTab = () => {
  return (
    <>
      <ProfileInfoCard
        title="Profile Information"
        description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
        details={{
          "first name": "Alec M. Thompson",
          mobile: "(44) 123 1234 123",
          email: "alecthompson@mail.com",
          location: "USA",
          social: (
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-facebook text-blue-700" />
              <i className="fa-brands fa-twitter text-blue-400" />
              <i className="fa-brands fa-instagram text-purple-500" />
            </div>
          ),
        }}
        action={
          <Tooltip content="Edit Profile">
            <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
          </Tooltip>
        }
      />
    </>
  );
};

export default SettingsTab;
