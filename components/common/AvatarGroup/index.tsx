"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import {
  AvatarGroup as MuiAvatarGroup,
  Avatar as MuiAvatar,
} from "@mui/material";
import Avatar from "@/interfaces/Avatar";

const AvatarGroup: React.FC<
  {
    avatarList: Avatar[];
  } & ReactProps
> = ({ avatarList }) => {
  return (
    <MuiAvatarGroup>
      {avatarList?.map(({ url, onClickEvent, name }, idx) => {
        return (
          <MuiAvatar
            key={`${name}-avatar-${idx}`}
            alt={`${name}-avatar-${idx}`}
            src={url}
            imgProps={{
              onClick: onClickEvent,
            }}
          />
        );
      })}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
