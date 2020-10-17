exports.handler = async (event) => {
    // TODO implement
  
    const param = event["queryStringParameters"]["keyword"];
    const response = {
      statusCode: 200,
      body: JSON.stringify("Ck says" + param),
    };
    return response;
  };
  