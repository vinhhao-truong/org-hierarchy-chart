"use client";

import AvatarGroup from "@/components/common/AvatarGroup";
import Avatar from "@/interfaces/Avatar";
import ReactProps from "@/interfaces/ReactProps";
import { flex } from "@/utils/get/getSxMUI";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

interface LabelAndAvatarsProps extends ReactProps {
  label: string;
  avatarList: Avatar[];
}

const LabelAndAvatars: React.FC<LabelAndAvatarsProps> = ({
  label,
  avatarList,
}) => {
  return avatarList.length > 0 ? (
    <Box sx={{ ...flex("row", "flex-start"), gap: 2 }}>
      <Typography fontWeight={500} fontSize={16}>
        {label}:
      </Typography>
      <AvatarGroup avatarList={avatarList} avatarSize={32} />
    </Box>
  ) : (
    <></>
  );
};

export default LabelAndAvatars;
