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
import contactRoutes from "../Routers/sendMail.js";

dotenv.config();

const Init_App = () => {
  const app = express();

  const whitelist = [
    "http://localhost:2545",
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
  contactRoutes(app);

  return app;
};

export default Init_App;