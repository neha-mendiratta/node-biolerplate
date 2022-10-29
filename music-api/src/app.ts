import express from "express";
import helmet from "helmet";
import cors from "cors";
import comperssion from "compression";
import { handleException, logging } from "./middleware";
import musticFestivalList from "./controllers/music-festivals";


const app = express();
app.use(express.json())
const port = process.env.PORT || 3006;

// For Application Security

// Helmet package is used here, to setting the response Http headers appropriately
app.use(helmet());

// Cors packange used here, to enable the app access control to allow restricted resources being access from external domains
app.use(cors());

// Comperssion package is used to improve the perfoemance of the node application
app.use(comperssion());

// better loggin on the console
app.use(logging());

// Handle exceptions
app.use(handleException());



app.use('/api/v1/music-festival/list', musticFestivalList);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
