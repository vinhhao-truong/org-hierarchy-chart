"use client";

import { useGetOrgStructureQuery } from "@/redux/services/api";
import {
  closeEmployeeModal,
  openEmployeeModal,
  selectApp,
} from "@/redux/services/appSlice";
import { flex } from "@/utils/get/getSxMUI";
import {
  Avatar,
  Box,
  Dialog,
  Fade,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelAndAvatars from "../LabelAndAvatars";
import AvatarInterface from "@/interfaces/Avatar";
import getPositionLvlColor from "@/utils/get/getPositionLvlColor";
import CloseIcon from "@mui/icons-material/CloseRounded";
import PositionIcon from "@/components/common/PositionIcon";

const ItemModal: React.FC = () => {
  const { employeeModalData } = useSelector(selectApp);
  const { data: employeeList } = useGetOrgStructureQuery();
  const dispatch = useDispatch();

  if (!employeeModalData) {
    return <></>;
  }

  const getAvatarListByLevel = (
    key: "subordinates" | "supervisors"
  ): AvatarInterface[] => {
    return employeeList
      ? employeeList
          .filter((thisEmp) =>
            employeeModalData[key]?.includes(thisEmp.fullName)
          )
          .map((thisEmp) => ({
            name: thisEmp.fullName,
            url: thisEmp.avatar,
            onClickEvent: () => dispatch(openEmployeeModal(thisEmp)),
            hoverColor: getPositionLvlColor(thisEmp.level),
          }))
      : [];
  };

  return (
    <Modal
      onClose={() => dispatch(closeEmployeeModal())}
      open={!!employeeModalData}
      sx={{
        opacity: 0.2,
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* --WHITE MODAL-- */}
      <Fade in={!!employeeModalData}>
        <Box
          sx={{
            ...flex("col"),
            width: "80%",
            maxHeight: "80%",
            overflow: "auto",
            backgroundColor: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "6px",
            gap: 2,
            p: 3,
          }}
        >
          {/* --CLOSE BTN-- */}
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
            }}
            onClick={() => dispatch(closeEmployeeModal())}
          />
          {/* --AVATAR-- */}
          <Avatar
            src={employeeModalData.avatar}
            alt={`modal-${employeeModalData.fullName}-avatar`}
            sx={{
              width: "86px",
              height: "86px",
            }}
          />
          {/* --NAME AND POSITION-- */}
          <Stack
            sx={{
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{employeeModalData.fullName}</Typography>
            <Typography
              sx={{
                fontWeight: 400,
                color: getPositionLvlColor(employeeModalData.level),
              }}
            >
              {employeeModalData.position}
            </Typography>
          </Stack>
          {/* --Intro-- */}
          <Typography color="GrayText" variant="subtitle1" fontStyle="italic">
            &ldquo;{employeeModalData.introduction}&rdquo;
          </Typography>
          {/* --AVATAR GROUP-- */}
          <LabelAndAvatars
            label="Supervisors"
            avatarList={getAvatarListByLevel("supervisors")}
          />
          <LabelAndAvatars
            label="Subordinates"
            avatarList={getAvatarListByLevel("subordinates")}
          />
          {/* --BOTTOM RIGHT ICON-- */}
          <PositionIcon
            level={employeeModalData.level}
            sx={{
              color: getPositionLvlColor(employeeModalData.level),
              position: "absolute",
              bottom: "0.2rem",
              right: "0.2rem",
              fontSize: "100px",
              opacity: 0.2,
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ItemModal;
