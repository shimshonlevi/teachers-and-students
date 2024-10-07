import express, { Application } from 'express';
import userRouter from './routes/userRoutes.js'
import teacherRouter from './routes/teacherRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import connectDb from './config/db.js';
import dotenv from "dotenv"


dotenv.config()

const PORT = process.env.PORT || 3000;

const app: Application = express();

connectDb();

app.use(express.json());

app.use('/api/users', userRouter);

app.use('/api/teachers', teacherRouter);

app.use('/api/admins', adminRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
