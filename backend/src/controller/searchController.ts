import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '../data/data_generate.json');

export function searchFeature(query: string, callback: (err: Error | null, searchResult?: any[]) => void): void {
  if (query.trim() === '') {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        return callback(err);
      }

      try {
        const jsonData = JSON.parse(data) as any[];
        callback(null, jsonData);
      } catch (err) {
        callback(err as Error);
      }
    });
  } else {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        return callback(err);
      }

      try {
        const jsonData = JSON.parse(data) as any[];
        const result = jsonData.filter((content: any) =>
          Object.keys(content).some((value: string) =>
            String(content[value]).toLowerCase().includes(query.toLowerCase())
          )
        );

        callback(null, result);
      } catch (err) {
        callback(err as Error);
      }
    });
  }
}


