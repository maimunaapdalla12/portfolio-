import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import compression from "compression";
import device from "express-device";
import cookieParser from "cookie-parser";

import sendMail from "../Routers/sendMail.js";


dotenv.config();

const Init_App = () => {
  const app = express();

  const whitelist = [
   "https://portfolio-snowy-nine-f8p302z7c8.vercel.app",
  "https://portfolio-ct00sp73g-maisahabdallah14-5985s-projects.vercel.app",
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  };

  app.use(cors(corsOptions));

  app.use(cookieParser());
  app.use(helmet());
  app.use(xss());
  app.use(hpp());
  app.use(compression());
  app.use(device.capture());

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  sendMail(app);


  return app;
};

export default Init_App;