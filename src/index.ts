import express from 'express';
import "dotenv/config"
import initDb from './db';
import initRoutes from './app';
const port= process.env.PORT || 6000;
const app = express();
app.use(express.urlencoded({ extended: false, limit: '1gb' }));
 
initRoutes(app) 
initDb; 

app.listen(port, () => {
  console.log(`Express server listening on ${port} `);
});
   
export default app; 