const {
  readDomainsFromCSV,
  writeValidDomainsToCSV,
} = require("./modules/csv-helper.js");

const { filterDomains } = require("./modules/domain-helper.js");

(async () => {
  console.time("Domain CSV Generated");
  const domains = readDomainsFromCSV("domains.csv");
  try {
    const validDomains = await filterDomains(domains);
    writeValidDomainsToCSV(validDomains);
    console.timeEnd("Domain CSV Generated");
  } catch (error) {
    console.error("Error:", error);
  }
})();
