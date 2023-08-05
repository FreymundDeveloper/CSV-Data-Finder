import fs from 'fs';
import csvParser from 'csv-parser';

export function convertToJSON(fileCSV: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const jsonData: any[] = [];

        fs.createReadStream(fileCSV)
            .pipe(csvParser())
            .on('data', (row: any) => {
                if (Object.keys(row).length > 0) jsonData.push(row);
        })
            .on('end', () => {
                resolve(jsonData);
        })
            .on('error', (error) => {
                reject(error);
        });
  });
}

