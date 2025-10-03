# 00042223_practica5_seccion2

¿Qué resultado arroja esta funcionalidad?
Al correr el comando de Vite para React, me crea automáticamente un proyecto base ya listo para trabajar: aparece la carpeta con package.json, index.html, la carpeta src/ con main.jsx y App.jsx, y la configuración de Vite. O sea, queda listo para hacer npm install y npm run dev sin tener que armar todo a mano.

2) ¿Por qué se comporta exactamente igual que si lo hubiera cambiado por HTML puro?
Porque el componente termina renderizando el mismo HTML. JSX al final se convierte en llamadas que crean el mismo DOM. Si el componente devuelve el mismo marcado y maneja los mismos eventos, el navegador ve lo mismo que si lo hubiera escrito como HTML directo.

3) ¿Qué significa className en React?
Es la forma de poner clases CSS en JSX. En lugar de class (que en JS es una palabra reservada), en React se usa className. Funciona igual que class en HTML, solo cambia el nombre del atributo.

4) ¿Las props tienen un límite?
No hay un límite “duro”. Las props pueden llevar strings, números, objetos, arreglos, funciones, etc. El límite real es de sentido común: si un componente recibe demasiadas props se vuelve difícil de leer y mantener. En esos casos conviene agrupar en un objeto, dividir el componente, o usar otras estrategias (context, estados más cerca de donde se usan, etc.).

5) ¿Quién define las props?
Las define el componente padre cuando usa al hijo. Ejemplo:

<MyButton texto="Haz click" onClick={increment} />
