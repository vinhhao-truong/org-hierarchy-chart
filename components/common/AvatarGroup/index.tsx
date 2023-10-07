"use client";

import ReactProps from "@/interfaces/ReactProps";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MuiAvatar from "@mui/material/Avatar";
import MuiAvatarGroup from "@mui/material/AvatarGroup";

import Avatar from "@/interfaces/Avatar";

const AvatarGroup: React.FC<
  {
    avatarList: Avatar[];
    avatarSize?: number;
  } & ReactProps
> = ({ avatarList, avatarSize = 48 }) => {
  return (
    <MuiAvatarGroup>
      {avatarList?.map(({ url, onClickEvent, name }, idx) => {
        return (
          <Tooltip
            arrow
            describeChild
            title={name}
            key={`${name}-avatar-${idx}`}
          >
            <MuiAvatar
              alt={`${name}-avatar-${idx}`}
              src={url}
              imgProps={{
                onClick: onClickEvent,
              }}
              sx={{
                cursor: onClickEvent ? "pointer" : "auto",
                width: avatarSize,
                height: avatarSize,
              }}
            />
          </Tooltip>
        );
      })}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
