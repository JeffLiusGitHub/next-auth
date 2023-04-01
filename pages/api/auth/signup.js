import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;
		const { email, password } = data;
		if (
			!email ||
			!email.includes('@') ||
			!password ||
			password.trim().length < 7
		) {
			return res
				.status(442)
				.json({ message: 'Invalid input, password at least 7 characters' });
		}
		const client = await connectToDatabase();
		const db = client.db();
		const hashedPassword = await hashPassword(password);
		const result = await db.collection('users').insertOne({
			email: email,
			password: hashedPassword,
		});
		res.status(201).json({ message: 'Create user!' });
		client.close();
	}
};
export default handler;
