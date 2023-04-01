import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://jeffliu:911006@cluster0.gbw3n.mongodb.net/?retryWrites=true&w=majority'
	);
	return client;
};
