const getPositionLvlTitle = (lvlNumber: number): string => {
  const headTitles = [
    "Executive Level",
    "Management Level",
    "Operational Level",
  ];
  if (lvlNumber > 0 && lvlNumber <= 3) {
    return headTitles[lvlNumber - 1];
  }

  return "";
};

export default getPositionLvlTitle;
