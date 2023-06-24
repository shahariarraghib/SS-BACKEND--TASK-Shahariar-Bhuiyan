const userLogInfo = require("../Models/userLogInfo");

exports.signupService = async (userInfo) => {
  const result = await userLogInfo.create(userInfo);
  return result;
};

exports.loginService = async (email) => {
  const result = await userLogInfo.findOne({ email });
  return result;
};
