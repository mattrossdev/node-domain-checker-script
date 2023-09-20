const dns = require("dns");

const isValidDomain = async (domain) => {
  try {
    const address = await dns.promises.lookup(domain);
    return Boolean(address);
  } catch (error) {
    return false;
  }
};

const filterDomains = async (domains) => {
  const validDomains = [];
  for (const domain of domains) {
    const result = await isValidDomain(domain);

    if (result === true) {
      validDomains.push(domain);
    }
  }
  return validDomains;
};

module.exports = {
  filterDomains,
};
