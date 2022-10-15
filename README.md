- Construido y compilado con [Deno](https://deno.land/), el runtime jurásico y Typescript-céntrico
- Interfaz de línea de comando y gráficos ASCII logrados mediante [Cliffy](https://cliffy.io/), una librería brutal para la creación de aplicaciones de línea de comandos con Deno.
- Datos de los horarios consultados mediante [Hermes](https://github.com/cfuendesign/espaciofisico-hermes), una chimba de librería de Deno para consumir la info de los horarios.

### Manos a la obra

Lo primero que debes hacer es bajar uno de los ejecutables/binarios de la sección de [lanzamientos](https://github.com/cfuendesign/qclase/releases). Estos ejecutables deben ser ejecutados desde una línea de comandos como Bash, PowerShell, cmd, Fish, Zsh, Xonsh, NuShell, etc.

No hay mucho que explicar, pues qclase solo es *un (1)* comando, y ese comando es el mismo nombre de la aplicación.
Dicho comando solo tiene un parámetro, que es el número de cédula del estudiante cuyo horario se quiere consultar.
```bash
qclase 742396
```
El resultado es una hermosa tabla con el horario (Por ejemplo, les muestro el mío, no se burlen :'v)
```txt
  ┌──────────┬─────────────┬───────────────┬──────────────────┬─────────────┬──────────────────┬───┬───┐
  │          │ L           │ M             │ X                │ J           │ V                │ S │ D │
  ├──────────┼─────────────┼───────────────┼──────────────────┼─────────────┼──────────────────┼───┼───┤
  │ 07:00:00 │             │               │ REDES DE DATOS 1 │             │ REDES DE DATOS 1 │   │   │
  ├──────────┼─────────────┼───────────────┼──────────────────┼─────────────┼──────────────────┼───┼───┤
  │ 11:00:00 │             │ INGENIERÍA DE │ LABOR SOCIAL     │ MATEMÁTICAS │ INGENIERÍA DE    │   │   │
  │          │             │ SOFTWARE 2    │                  │ APLICADAS   │ SOFTWARE 2       │   │   │
  ├──────────┼─────────────┼───────────────┼──────────────────┼─────────────┼──────────────────┼───┼───┤
  │ 16:00:00 │ MATEMÁTICAS │ MODELOS Y     │ MATEMÁTICAS      │ MODELOS Y   │                  │   │   │
  │          │ APLICADAS   │ SIMULACIÓN DE │ APLICADAS        │ SIMULACIÓN  │                  │   │   │
  │          │             │ SISTEMAS      │                  │ DE SISTEMAS │                  │   │   │
  ├──────────┼─────────────┼───────────────┼──────────────────┼─────────────┼──────────────────┼───┼───┤
  │ 18:00:00 │ GESTIÓN DE  │               │                  │ GESTIÓN DE  │                  │   │   │
  │          │ PROYECTOS   │               │                  │ PROYECTOS   │                  │   │   │
  ├──────────┼─────────────┼───────────────┼──────────────────┼─────────────┼──────────────────┼───┼───┤
  │ 20:00:00 │             │ INVESTIGACIÓN │                  │             │                  │   │   │
  │          │             │ TECNOLÓGICA Y │                  │             │                  │   │   │
  │          │             │ DE INGENIERÍA │                  │             │                  │   │   │
  └──────────┴─────────────┴───────────────┴──────────────────┴─────────────┴──────────────────┴───┴───┘
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
