const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ytdl = require("ytdl-core");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/d", (req, res) => {
  const url = req.query.URL;
  const quality = req.query.QUALITY;

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, {
    format: "mp4",
    quality: quality,
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
