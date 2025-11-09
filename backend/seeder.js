import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import Product from './models/product.model.js';
import User from './models/user.model.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        // Create mock users
        const users = [
            {
                name: 'Admin User',
                email: 'admin@craftingsign.com',
                password: 'admin',
                role: 'admin',
            },
            {
                name: 'Demo User',
                email: 'demo@demo.com',
                password: 'demo',
                role: 'customer',
            },
        ];

        const createdUsers = await User.insertMany(users);
        console.log('Users Imported!', createdUsers);

        // Import products
        const sampleProducts = products.map((product) => {
            return { ...product };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}