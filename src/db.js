import mongodb from 'mongodb';

const { MongoClient } = mongodb;

const url = process.env.MONGO_URL;

const client = new MongoClient(url, { useNewUrlParser: true });

export async function connectDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });

    console.log('Database connected 😎');
  } catch (error) {
    console.log(error);
    await client.close();
  }
}
