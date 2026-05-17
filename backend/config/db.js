import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akshaypatil880537_db_user:akshaypatil@mernstack.uyeoapd.mongodb.net/food-delivery').then(() => console.log('MongoDB Connected'));
}