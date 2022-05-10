import express from 'express'
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import  useRoutes  from './routes/useRoutes.js';


dotenv.config();

connectDB();
import cors from 'cors'

const app = express();


app.use(cors())
app.use(express.json());


app.get('/', (request, response) => {
  response.send('API is running...')
})


app.use('/api/products', productRoutes)
app.use('/api/users', useRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))