const toHyphenedStr = (str: string): string => {
  //For eg. "Hello World" -> "hello-world"
  return str.trim().toLowerCase().split(" ").join("-");
};

export default toHyphenedStr;
