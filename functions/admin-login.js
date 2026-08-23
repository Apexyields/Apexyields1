exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" })
    };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    const expectedUser = process.env.ADMIN_USER;
    const expectedPass = process.env.ADMIN_PASS;

    if (username === expectedUser && password === expectedPass) {
      const token = "admin_session_" + Math.random().toString(36).substring(2);

      return {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          token: token
        })
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({
          success: false,
          message: "Invalid credentials"
        })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" })
    };
  }
};
