const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://maxmazal:nxyNzdho6qESrnjZ@infrastructure.14hl4.mongodb.net/Infrastructure?retryWrites=true&w=majority';

async function run() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to database");
    } catch (error) {
        console.error("Error connecting to database:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.error);
