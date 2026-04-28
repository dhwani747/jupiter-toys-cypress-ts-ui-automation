// I prefer using interfaces for data objects and having a separtate data provider class to set up and serve data to tests
export interface Contact {
  forename: string;
  surname: string;
  email: string;
  telephone: string;
  message: string;
}
