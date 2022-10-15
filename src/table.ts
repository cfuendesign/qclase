import { Table } from "https://deno.land/x/cliffy@v0.25.2/table/mod.ts";
import { EspacioFisicoScheduleEvent } from "https://raw.githubusercontent.com/cfuendesign/espaciofisico-hermes/mucho/mod.ts"
import dayjs from "https://deno.land/x/deno_dayjs@v0.2.2/mod.ts";

let getObjectsWithUniqueProperty = (arr: any, prop: string) => {
  let uniqueBuffer: any = [];
  let uniqueResult: any = [];
  arr.forEach((arrItem: any) => {
    uniqueBuffer.find((buffer: any) => buffer === arrItem[prop]) == undefined
      ? uniqueBuffer.push(arrItem[prop])
      : uniqueBuffer.push(null);
  });
  uniqueBuffer.forEach((buffer: any) => {
    buffer === null
      ? null
      : uniqueResult.push(arr[uniqueBuffer.indexOf(buffer)]);
  });
  return uniqueResult;
};

const createEspacioFisicoTable = (schedule: any, maxColWidth: number) => {
  const hours: string[][] = getObjectsWithUniqueProperty(schedule, "startHour").map((obj: any)=>[obj.startHour]).sort();
  // [ [ "16:00:00" ], [ "18:00:00" ], [ "11:00:00" ], [ "20:00:00" ], [ "07:00:00" ] ]
  hours.forEach((row)=>{
    //schedule.filter lo q equivalga a row[0]
    //ponerlo en el arrayResultante dependiendo de si es Lunes (0) Martes (1) etc.
    //y luego row.push(...arrayResultante)
    const filteredEventArray: {name: String, day: number}[] =
      schedule.filter((event: EspacioFisicoScheduleEvent) => event.startHour === row[0])
      .map((filteredEvent: any) => ({ 
        name: filteredEvent.name,
        day: dayjs(`${filteredEvent.date} 00:00`).day()-1 })
      );
    let sortedEventArray: any = [];
    filteredEventArray.forEach((filteredEvent)=>{
      sortedEventArray[filteredEvent.day] = filteredEvent.name;
    });
    row.push(
      ...sortedEventArray
    )
  })
  /*[
    "07:00:00",
    undefined,
    undefined,
    "REDES DE DATOS 1",
    undefined,
    "REDES DE DATOS 1"
  ],
  [
    "11:00:00",
    undefined,
    "INGENIERÍA DE SOFTWARE 2",
    "LABOR SOCIAL",
    "MATEMÁTICAS APLICADAS",
    "INGENIERÍA DE SOFTWARE 2"
  ],
  ...*/

  new Table()
    .header(["", "L", "M", "X", "J", "V", "S", "D"])
    .body(
      //cada fila es una hora
      hours
    )
    .maxColWidth(maxColWidth)
    .padding(1)
    .indent(2)
    .border(true)
    .render();
}

export { createEspacioFisicoTable };
