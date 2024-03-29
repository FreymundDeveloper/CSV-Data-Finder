# CSV-Data-Finder

CSV Data Finder is an application that aims to convert data from files in the “.csv” format into dynamic cards, with the ability to filter data by search. In this way, facilitating the process of searching for data related to this file format.

Some technologies used:

* TypeScript;
* Express;
* React;
* HTML;
* CSS(Styled);
* Node;
* Jest.

## Routes 

All routes are linked to the "localhost:3000/ ..." address. The backend runs on port 3000 and the frontend on port 4000. The application has the following endpoints:

* POST - /api/files; 

* GET - /api/users;

## Running the app

**Obs 1**: The application starts to present slowness and malfunction problems in files with approximately 10000 items and a high variety of fields. For use with large-scale data, improvements are necessary;

**Obs 2**: When finishing the application, an abnormal number of confirmation messages appear in the terminal, this is due to a problem present in the "concurrently" library itself used.

```bash
# Installation
$ npm install

# Running
$ npm run dev
# Or for only the frontend
$ npm run start-front
# Or for only the backend
$ npm run start-back

# Running Test
$ npm run test
```