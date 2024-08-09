import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

import { AdminRoute, VendorRoute } from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

mongoose
  .connect(
    process.env.MONGODB_CONNECTION_STRING as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "food-jay",
    } as ConnectOptions
  )
  .then((result) => {
    //console.log(result);
    console.log("DB Connected");
  })
  .catch((err) => console.log("error " + err));

app.listen(8000, () => {
  console.clear(); //clear the previous logs on the terminal.
  console.log("App is listening to the port 8000");
});
