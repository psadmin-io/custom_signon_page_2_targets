# Custom Signon Page for 2 Targets

This is a customized PeopleSoft signon page that let's you log into 2 different applications. 

## Installation 

1. Copy the `psadmin.html` file to `PORTAL.war/WEB_INF/psftdocs/[domain]`. 
2. Add the custom text and URLs to the `text.properties` file in `PORTAL.war/WEB_INF/psftdocs/[domain]`. 
2. Copy the `*.css` and `*.js` files to `PORTAL.war/[domain]`.
3. In the Web Profile, under the Look and Feel tab, set `psadmin.html` for these pages:
    1. Signon Page
    2. Signon Error Page
    3. Logout Page
1. Save the Web Profile and restart the web server

## Configuration

In the `text.properties` file, change the `9000` and `9001` values for your URLs. 

Value `8999` will change the header above the Username and Password boxes. This field can be used for the environment name.

## Maintenance Mode

WebProfile options you can set: 

Property Name | Validation Type | Property Value
---------------- | ----------------- | ---------------
maintMode | String | false
**maintModeHR** | String | true
**maintModeFS** | String | false

`maintMode` will disable the entire login box until the special key combination is hit (see `psadmin.js`). The two bolded options let you disable individual buttons instead of the entire login box.
