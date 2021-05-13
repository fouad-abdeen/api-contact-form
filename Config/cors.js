const whitelist = [
  "https://fouad-abdeen.web.app",
  "https://fouad-abdeen.github.io",
];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
