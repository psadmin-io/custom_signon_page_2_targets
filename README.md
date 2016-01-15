# Custom Signon Page for 2 Targets

## Installation

1. Copy the `psadmin.html` file to `PORTAL.war/WEB_INF/psftdocs/[domain]`. 
2. Add the custom text and URLs to the `text.properties` file in `PORTAL.war/WEB_INF/psftdocs/[domain]`. 
2. Copy the `*.css` and `*.js` files to `PORTAL.war/[domain]`.
3. In the Web Profile, under the Look and Feel tab, set `psadmin.html` for these pages:
    1. Signon Page
    2. Signon Error Page
    3. Logout Page
1. Save the Web Profile and restart the web server


