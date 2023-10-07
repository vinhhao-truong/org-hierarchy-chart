const toHyphenedStr = (str: string): string => {
  return str.trim().toLowerCase().split(" ").join("-");
};

export default toHyphenedStr;
