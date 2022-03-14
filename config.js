// @ts-check

const config = {
  endpoint: "https://42190bdb-0ee0-4-231-b9ee.documents.azure.com:443/",
  key: "LvLTECEfKEaAaPLUliiqBHDAne9nfzDH6RKW5Ke1IWcwz09fpZqLepXC3aAOCtu6B6aGAqvXqT9djHOjXCJp2g==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
