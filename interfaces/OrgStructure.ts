import Position from "./Position";

interface OrgStructure {
  id: string;
  createdAt: number;
  fullName: string;
  avatar: string;
  position: Position;
  introduction: string;
}

export default OrgStructure;
