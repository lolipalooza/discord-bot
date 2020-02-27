Bot de Discord
==============

![Shelitos~](https://i.imgur.com/by5JtW6.png)

Este bot se llama `Shelitos`, pero también contestará bajo sus otros seudónimos: Yelitos, Hielitos, Yelos, Hielos, Yelocos, Hielocos. Así como también, con su nombre original, por supuesto: `Cirno`. Y sus variantes: Chiruno, Chirunito (no hay distinción de mayúsculas y minúsculas).

Este bot padece de autismo, por lo que solo responde con "cy" o con "ño". Tenía ganas de dotarle de una cierta inteligencia para hacer plática, pero creo que chocaría un poco con la caracterización que siempre le hemos dado en el chan lolnada.orgy (amén de que no sé si tenga las capacidades de hacer tal cosa).

Para hacerla funcionar, primero la registras en tu discord, en el [enlace de developers](https://discordapp.com/developers/applications/). Deberás colocar el token de tu bot en el archivo `auth.json` (duplica el archivo `auth.default.json` y renómbralo como `auth.json`), y luego, desde tu OS (*Windows*) ejecutas el archivo `turn on bot.bat`.

Nótese que deberás mantener la cónsola abierta para que el bot trabaje, si la cierras el bot se desconecta. Existen modos de hostear el bot en alguna parte para mantenerlo online permanentemente, pero escapa al alcance de esta documentación.

*(Consultar este [enlace](https://thomlom.dev/create-a-discord-bot-under-15-minutes/) para saber más sobre cómo registrar y poner a funcionar tu bot en un server de discord)*

![Dev screen](https://i.imgur.com/7u2OzIN.png)

Comandos para el bot
====================

Menciona el nombre del bot (descrito antes) o hazle mención de usuario y éste responderá "cy" o "ño".

Menciona su nombre, y además incluye la palabra "fortuna" en el comentario (no importa el orden, ni el resto del contenido del post), y te responderá con una linda fortuna. Alternativamente, solo incluye `!fortuna` en el post.

Incluye en tu post `!waifu` y se te asignará una waifu aleatoria (y una historia aleatoria con esa waifu).

Incluye en tu post `!caracola` acompañado con una pregunta, y la caracola te la responderá con un nivel de acierto fuera de este mundo!

![Example 1](https://i.imgur.com/vff4ToO.png)

![Example 2](https://i.imgur.com/JHv40Ad.png)

Estoy pensando qué otros comandos (o características) incluir en el bot. Tentativamente, estoy pensando en permitir que los comandos también funcionen con el hashtag `#` además de `!`.

Futuras adiciones
=================

### ¿Cómo agregar funcionalidad para calcular precios de distintas monedas?

La página de localbtc cuenta con una api

https://openexchangerates.org/

https://localbitcoins.com//bitcoinaverage/ticker-all-currencies/

https://localbitcoins.com/api-docs/

además está esta otra página que no sé exactamente qué hace, pero recoge info de las anteriores y hace cálculos:

https://shauna.website/currency.json

Algunos enlaces útiles
======================
Documentació oficial: https://discord.js.org/#/docs/main/stable/general/welcome

https://medium.com/davao-js/tutorial-creating-a-simple-discord-bot-9465a2764dc0 (Este enlace no sirve, el código está obsoleto)

https://thomlom.dev/create-a-discord-bot-under-15-minutes/

https://www.youtube.com/watch?v=QJ_X3D0zI5M (el video hace uso de esta info: https://portalmybot.com/guia/mybot)
