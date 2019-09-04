/**
 * Actions creator
 */
export const inData = (type = "null", data = []) => {
  console.log("inData exec Action");
  return {
    type: "ADD_DATA",
    payload: data
  };
};
