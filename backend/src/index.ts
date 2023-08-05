import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import { convertToJSON } from './controller/convertCSV';
import { createJSONFile } from './controller/generateData';

const app = express();
const port = 4000;
const upload = multer({ storage: multer.diskStorage({ destination: 'backend/src/data', filename: (req, file, cb) => {
        cb(null, 'data_generate.csv');   
    },}),
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, this is your backend!');
});
  
app.post('/api/files', upload.single('file'), async (req: Request, res: Response) => {
    try {

        if (!req.file) return res.status(400).json({ error: 'No files sent.' });
        if (req.file.mimetype !== 'text/csv') return res.status(409).json({ error: 'Invalid format, please insert .csv file.' });

        const jsonData = await convertToJSON('backend/src/data/data_generate.csv');

        const outputFilePath = 'backend/src/data/data_generate.json';
        createJSONFile(jsonData, outputFilePath);

        res.status(200).json({ message: 'Conversion completed and data saved.' });
    } 
    catch (error) {
        res.status(500).json({ error: 'Error processing CSV file.' });
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
