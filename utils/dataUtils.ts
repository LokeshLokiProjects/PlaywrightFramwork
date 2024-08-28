import exceltojson from 'convert-excel-to-json'
import csvToJson from 'convert-csv-to-json'

export default class DataUtils {

    static excelDataRead(excelPath: string, sheet: string, columnKeys: object) {

        const exceldata = exceltojson({
            sourceFile: excelPath,

            header: {
                rows: 1
            },
            sheets: [sheet],
            columnToKey: columnKeys

        });

        let array: Array<any> = []


        exceldata.data.forEach(element => {
            array.push(element)
        });

        return Object.entries(array)
    }

    static csvDataRead(csvPath: string) {

        let json = csvToJson.parseSubArray('*',',').getJsonFromCsv(csvPath)

        return Object.entries(json)
    }
}