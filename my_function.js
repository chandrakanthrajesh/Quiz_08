exports.handler = async (event) => {
  let param = event["queryStringParameters"]["word"];
const response = {
  statusCode: 200,
  body: JSON.stringify("Chandra Kanth says " + param),
};
return response;
 
};
