import exceltojson from "convert-excel-to-json";
import csvToJson from "convert-csv-to-json";
import fs from "fs";

export default class DataUtils {
  static excelDataRead(excelPath: string, sheet: string, columnKeys: object) {
    const exceldata = exceltojson({
      sourceFile: excelPath,

      header: {
        rows: 1,
      },
      sheets: [sheet],
      columnToKey: columnKeys,
    });

    let array: Array<any> = [];

    exceldata.data.forEach((element) => {
      array.push(element);
    });

    return Object.entries(array);
  }

  static csvDataRead(csvPath: string) {
    let json = csvToJson.parseSubArray("*", ",").getJsonFromCsv(csvPath);

    return Object.entries(json);
  }

  static writeDataToTextFile(
    filePath: string,
    data: string,
    Keys: "writefile" | "appedfile",
  ) {
    if (Keys === "writefile") {
      fs.writeFile(filePath, data, (err) => {
        if (err) throw err;
      });
    } else if (Keys === "appedfile") {
      fs.appendFile(filePath, data, (err) => {
        if (err) throw err;
      });
    }
  }
}
