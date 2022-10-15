import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";
import { EspacioFisicoSchedule, EspacioFisicoScheduleEvent } from "https://raw.githubusercontent.com/cfuendesign/espaciofisico-hermes/mucho/mod.ts"
import { createEspacioFisicoTable } from "./table.ts"

await new Command()
  .name("qclase")
  .version("1.0.0")
  .description("")
	.arguments("<input:string>")
  .option("-m, --mcw <mcw:number>", "Establece el ancho máximo de todas las celdas del horario", { default: 10 })
  .action(async (options, input) => {
		createEspacioFisicoTable(await new EspacioFisicoSchedule(input).getScheduleObject(), options.mcw);
	})
  .parse(Deno.args);
