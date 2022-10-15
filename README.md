- Construido y compilado con [Deno](https://deno.land/), el runtime jurásico y Typescript-céntrico
- Interfaz de línea de comando y gráficos ASCII logrados mediante [Cliffy](https://cliffy.io/), una librería brutal para la creación de aplicaciones de línea de comandos con Deno.
- Datos de los horarios consultados mediante [Hermes](https://github.com/cfuendesign/espaciofisico-hermes), una chimba de librería de Deno para consumir la info de los horarios.

### Getting Started

No hay mucho que explicar, pues qclase solo es *un (1)* comando, y ese comando es el mismo nombre de la aplicación.
Dicho comando solo tiene un parámetro, que es el número de cédula del estudiante cuyo horario se quiere consultar.
```bash
qclase 742396
```

Y una opción/bandera/flag `--mcw` (Abreviada como `-m`), la cual especifica el tamaño máximo de las celdas del horario, que por defecto es 10.
```bash
qclase 742396 -m 20
```

### Compilando desde fuente

Para generar binarios de qclase, primero hay que tener una carpeta "bin", por lo que la estructura del proyecto debería verse algo así:

```txt
bin/
src/
├─ main.ts
├─ table.ts
.gitignore
LICENSE
Makefile
README.md
```

Teniendo la carpeta, solo hay que correr la tarea de Make que genera los archivos binarios de qclase. Por esto, es necesario tener Make instalado en tu máquina.

```bash
make build
```

Cuando la tarea termine, tendrás 4 binarios (Los que actualmente Deno soporta):

- Linux x64
- Windows x64
- MacOS x64
- MacOS ARM
