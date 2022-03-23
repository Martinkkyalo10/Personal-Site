import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://martin:Drbrand2020@cluster0.ntrwp.mongodb.net/martin?retryWrites=true&w=majority"
  );

  return client;
}
