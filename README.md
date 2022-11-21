# PWA-MVP

This is a simple Progressive Web App (PWA) to show some benefits and capabilities of this technology.
It is able to run without an internet connection, has access to some Hardware functionality (like Camera) and is able
to fetch Information from an endpoint and cache them. Furthermore, it is able to work with this data in offline mode and 
then sync this back to the server, when there is an internet connection.

It also supports checks for updating the app when there is a connection to the server. 

## Prerequisites
if you would like to run the app on a server locally you can use _http-server_ which is supported by this project. Simply run the following command to install _http-server_
globally on your PC.
```
npm install -g http-server
``` 
It is also possible to run this project in docker. Therefore Docker needs to be installed on your computer.


## Quick start

Install the dependencies by  using npm or yarn
```
npm install

or 

yarn install
```
Then you can serve the application locally with the following command. However, to test the offline capabilities it might be better to run this application with a server like _http-server_ or inside a docker environment.
```
npm run start

or 

yarn start
```

## Docker

If you want to, you also can start this Project in a docker container by running
```
npm run start:docker

or 

yarn start:docker
```
