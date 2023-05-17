const dolbyio = {};
/**
 * Return an access token for initializing the Dolby.io Communications
 * Web SDK. The function uses the fetchAuthConfig() function to fetch 
 * APP_KEY and APP_SECRET from the auth_config.json, 
 * and uses them to construct an authorization header.
 *
 * @param {*}
 * @returns token (string)
 *
 * This function will provide a token that required for authenticating
 * with the Dolby.io API and enabling the SDK's features.
 */
dolbyio.getAccessToken = async () => {
  const configResponse = await fetchAuthConfig();
  const config = await configResponse.json();
  const APP_KEY = config.APP_KEY;
  const APP_SECRET = config.APP_SECRET;
  const authHeader =
    "Basic " + btoa(encodeURI(APP_KEY) + ":" + encodeURI(APP_SECRET));

  const tokenURL = "https://session.voxeet.com/v1/oauth2/token";
  const tokenParams = {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json", // add this line to specify the request's content type
    },
    body: JSON.stringify({
      // stringify the object to convert it to a JSON string
      grant_type: "client_credentials",
    }),
  };

  const response = await fetch(tokenURL, tokenParams);
  const jsonResponse = await response.json(); // resolve the response promise to access the JSON data

  // Return the access_token to the application
  return jsonResponse.access_token;
};
