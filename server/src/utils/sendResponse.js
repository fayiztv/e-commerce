const sendResponse = ({
  res,
  statusCode = 200,
  success = true,
  message = "",
  data,
  token,
}) => {
  return res.status(statusCode).json({
    success: success,
    message: message,
    ...(data !== undefined && { data }),
    ...(token && { token }),
  });
};

export default sendResponse;
