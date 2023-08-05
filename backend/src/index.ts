import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import { convertToJSON } from './controller/convertCSV';
import { createJSONFile } from './controller/generateData';
import { searchFeature } from './controller/searchController';

const app = express();
const port = 3000;
const upload = multer({ storage: multer.diskStorage({ destination: 'backend/src/data', filename: (req, file, cb) => {
        cb(null, 'data_generate.csv');   
    },}),
});

app.use(cors());
app.use(bodyParser.json());
  
app.post('/api/files', upload.single('file'), async (req: Request, res: Response) => {
    try {

        if (!req.file) return res.status(400).json({ error: 'No files sent.' });
        if (req.file.mimetype !== 'text/csv') return res.status(409).json({ error: 'Invalid format, please insert .csv file.' });

        const jsonData = await convertToJSON('backend/src/data/data_generate.csv');

        const buildFilePath = 'backend/src/data/data_generate.json';
        createJSONFile(jsonData, buildFilePath);

        res.status(200).json({ message: 'Conversion completed and data saved.' });
    } 
    catch (error) {
        res.status(500).json({ error: 'Error processing CSV file.' });
    }
});

app.get('/api/users', (req: Request, res: Response) => {
    const query = req.query.q as string;
  
    if (!query) return res.status(400).json({ error: 'Query parameter not provided.' });
  
    searchFeature(query, (err, searchResult) => {
        if (err) {
            return res.status(500).json({ error: 'Error searching data.'});
        }

        if (searchResult && searchResult.length > 0) {
            res.status(200).json(searchResult);
        } else {
            res.status(404).json({ error: 'No results found.'});
        }
    });
});
  

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
