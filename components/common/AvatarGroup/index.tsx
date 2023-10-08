"use client";

import ReactProps from "@/interfaces/ReactProps";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import MuiAvatar from "@mui/material/Avatar";
import MuiAvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@/interfaces/Avatar";

interface AvatarGroupProps extends ReactProps {
  avatarList: Avatar[];
  avatarSize?: number;
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatarList,
  avatarSize = 48,
}) => {
  return (
    <MuiAvatarGroup>
      {avatarList?.map(({ url, onClickEvent, name, hoverColor }, idx) => {
        const isClickable: boolean = !!onClickEvent;
        return (
          <Tooltip
            arrow
            describeChild
            title={name}
            key={`${name}-avatar-${idx}`}
            disableInteractive
          >
            <MuiAvatar
              alt={`${name}-avatar-${idx}`}
              src={url}
              imgProps={{
                onClick: onClickEvent,
              }}
              sx={{
                cursor: isClickable ? "pointer" : "auto",
                width: avatarSize,
                height: avatarSize,
                borderColor: "transparent",
                border: 3,
                "&:hover": {
                  borderColor:
                    isClickable && hoverColor ? hoverColor : "transparent",
                },
              }}
            />
          </Tooltip>
        );
      })}
    </MuiAvatarGroup>
  );
};

export default AvatarGroup;
