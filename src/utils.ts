import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://ukksnjfg:zUrkVMYx3WswwQJjTgzPBtuf8rtdHzUi@silly.db.elephantsql.com/ukksnjfg");
    await client.connect();
    console.log(client)
    return client;
}