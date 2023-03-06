var config = {}


const connectionString = process.env.DATABASE_URL;

// Update to have your correct username and password
config.mongoURI = {
    production: connectionString,
    development: connectionString,
    test: connectionString,
}
module.exports = config;
