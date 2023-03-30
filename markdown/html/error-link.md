
# How should to do I do if I get an error in css?

Bueno si tenemos un error, en nuestro express, por que no acepta el css, es fácil, debido a que sólo agarra o usa todo el contenido de la carpeta indica, pues si las direcciones de html están apuntando afuera de la carpeta de la que tenemos acceso, no podrá utilizar dicho link. Para que se me entinda leer el [**Link**](https://stackoverflow.com/questions/49406057/refused-to-apply-style-from-because-its-mime-type-text-html-is-not-a-supp) o mirar el siguiente ejemplo:

~~~
app.use( express.static('public) );
~~~

> Con el ejemplo de arriba es el acceso a donde tenemos permitido usar, a esto nos referíamos cuando decía a la carpeta indicada.

~~~
app.use( express.static('public') );

si usamos un archivo o carpeta de html y lo llamamos
Ese archivo html tiene que apuntar todos sus enlaces adentro de public
~~~

**ADVICE:** pille el error en uno de los link de html, que apuntaba afuera de la carpeta public, esto hacía que mi archivo css no funcionara. Al modificar el enlace a que funcione dentro del archivo public y eso, si logró funcionar.

**Pssdta:** Como modifique el link este enlace no funcionará fuera del puerto que estamos usando.