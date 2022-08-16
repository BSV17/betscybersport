
- Configure env
```
  $ cp .env.example .env
```

- Start container:
```
  $ docker-compose up -d

or for setting up with a MySQL and PhpMyAdmin container as well:

  $ docker-compose -f docker-compose.yml -f docker-compose.mysql.yml up -d

```

- Enter container:
```
  $ docker-compose exec php bash

alternatively run commands from outside using:

  $ docker-compose exec php <command>

```

- Run these commands in container:
```
  $ composer install
  $ craft install
  $ craft migrate/all
  $ craft project-config/sync
```


 <!-- - `docker-compose exec php apt-get update` <-- to fix certificate error for composer
 - `docker-compose exec php apt-get upgrade` <-- to fix certificate error for composer -->

 :waring: If you experience the warning `curl error 60 while downloading...`:
 ```
  $ (docker-compose exec php) apt-get update
  $ (docker-compose exec php) apt-get upgrade
  $ (docker-compose exec php) composer require <package name>
  $ (docker-compose exec php) composer install (not needed every time)
 ```

the craft installation should be running on following paths:

|Service|Path|
|---|---|
|Craft CMS|http://HOST:CRAFT_PORT|
|Frontend dev|http://HOST:WEBPACK_PORT|
|phpMyAdmin|http://HOST:PMA_PORT|

-

run `yarn install`, then `yarn run dev` to start frontend watch build process

### Installing plugins

run `docker-compose exec php composer require <plugin package name>`

### Working with css

Place template specific styles together with their templates in `/templates`. All `.scss` files in this folder will automatically be imported to the `/index.scss` file. For other non-template specifix styles, mixins, utility classes etc. place them in `/src/scss` and make sure they're imported into `/index.scss` through one of the import files.

### Working with js

Global scripts should be imported in `/index.js`. Utilities and other non-template specific scripts should go into `/src/js`. If you have template specific scripts that belongs in the global scope, place them with the template they belong and give them a name ending with `.global.js`. E.g. `templates/_partials/footer/footer.global.js`.

Page specific js should be separated into separate entry points and only loaded when needed. All files in `/templates` with `.js` extensions that don't start with `_` or end with `.global.js` will automatically be threated as separate entry points. In the twig file where this script belongs, import the file eg. like in the entry template here:

/templates/templates/_entry/index.twig
```
{% import "_macros/js.macro" as js %}
{{ js.add('templates/_entry/entry.js') }}
```

If you want to split your file into modules, you can prefix your js file with `_` to avoid creating an entry point.

```
import EntrySubModule from './_entry-sub-module';
```
