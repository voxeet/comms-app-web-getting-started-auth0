let auth0 = null;
/**
 * Retrieves the auth configuration from the server
 */
const fetchAuthConfig = () => fetch("/auth_config.json");

/**
 * Initializes the Auth0 client
 */
const configureClient = async () => {
    const response = await fetchAuthConfig();
    const config = await response.json();

    auth0 = await createAuth0Client({
        domain: config.DOMAIN,
        client_id: config.CLIENT_ID
    });
};

const processLoginState = async () => {
    // Check code and state parameters
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
        // Process the login state
        await auth0.handleRedirectCallback();
        // Use replaceState to redirect the user away and remove the querystring parameters
        window.history.replaceState({}, document.title, window.location.pathname);
    }
};

const updateUI = async (initializeToken,openSession) => {
    const isAuthenticated = await auth0.isAuthenticated();
    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
    /**
     *  Logic to show/hide gated content after authentication
        Only initialize and start the conference if the user is authenticated
     */

    if (isAuthenticated) {
        document.getElementById("gated-content").classList.remove("hidden");
         // Establish Real-time Communications by first initializing the Dolby.io Web SDK with credentials
        await initializeToken();
        // Get logged user's nickname from Auth0 to start a conference with participant name
        const userInfo =  JSON.stringify(await auth0.getUser());
        const name = JSON.parse(userInfo).nickname;
        // Start a new session with logged user's name and connect to the Dolby.io platform establishing a client-server link
        await openSession(name);
        
    } else {
        document.getElementById("gated-content").classList.add("hidden");
    }
};

const login = async () => {
    await auth0.loginWithRedirect({
        redirect_uri: window.location.href
    });
};

const logout = () => {
    auth0.logout({
        returnTo: window.location.href
    });
};