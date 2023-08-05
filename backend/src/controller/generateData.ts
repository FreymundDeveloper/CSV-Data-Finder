import fs from 'fs';

export function createJSONFile(data: any[], buildFilePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const jsonData = JSON.stringify(data, null, 2);

        console.log(jsonData)
    
        fs.writeFile(buildFilePath, jsonData, (error) => {
            if (error) {
                reject(error);
            } 
            else {
                resolve();
            }

        });
    });
  }
  