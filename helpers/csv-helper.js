const fs = require("fs");

const readDomainsFromCSV = (csvFilePath) => {
  const csvData = fs.readFileSync(csvFilePath, "utf-8");
  const domains = csvData.split(",").map((domain) => domain.trim());
  return domains;
};

const writeValidDomainsToCSV = (validDomains) => {
  const writeStream = fs.createWriteStream("valid-domains.csv");
  writeStream.write(validDomains.join(", "));
};

module.exports = {
  readDomainsFromCSV,
  writeValidDomainsToCSV,
};
