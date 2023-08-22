var config = {}


const connectionString = 'mongodb+srv://vimotanya:@gallery.dmqys79.mongodb.net/?retryWrites=true&w=majority';

// Update to have your correct username and password
config.mongoURI = {
    production: connectionString,
    development: connectionString,
    test: connectionString,
}
module.exports = config;
