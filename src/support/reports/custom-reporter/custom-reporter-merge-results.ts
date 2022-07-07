import { writeFile } from "../../files/write-file";
import { getEnviroment } from "./get-enviroment";

const fs = require('fs');
const path = require('path');

type Result = { info: {enviroments: Array<string> }; tests: Array<any> };

export function customReporterMergeResults(dir: string, filePattern: string, capabilities: any): void {
    const data = getDataFromFiles(dir, filePattern);

    const results: Result = {
        info: {
            enviroments: [getEnviroment(capabilities)],
        },
        tests: data,
    };

    writeFile(path.join(dir, 'merged.json'), JSON.stringify(results));
}

function getDataFromFiles(dir: string, filePattern: string): Array<any> {
    const fileNames = fs.readdirSync(dir).filter((file: string) => file.match(filePattern));

    let arr: Array<any> = [];
    
   fileNames.forEach((fileName: string) => {
    arr = arr.concat(JSON.parse(fs.readFileSync(path.join(dir, fileName))));
   });

    return arr;
}