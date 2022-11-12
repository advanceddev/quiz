# W3BB - Квиз
### Виджет для проведения быстрых онлайн-опросов.

Помогает в составлении портрета потенциальных клиентов, способствует росту объема продаж.

- Возможность интеграции в абсолютно любой веб-сайт.
- Отображение в виде встроенной формы или виджета.
- Несколько готовых вариантов оформления.
- Отправка результатов опросов в Telegram или на E-mail

## Установка

Для интеграции достаточно на нужной странице перед закрывающим тегом `body` добавить следующий код:

```html
 <!-- W3BB quiz widget -->
<script type="text/javascript" >
			setTimeout(() => {
				(function(w3b, b, q, u, i, z, w) {
					w3b[i] = w3b[i] || function() {
						(w3b[i].w = w3b[i].w || []).push(arguments)
					};
					w3b[i].l = 1 * new Date();
					for (var j = 0; j < document.scripts.length; j++) {
						if (document.scripts[j].src === u) {
							return;
						}
					}
					z = b.createElement(q), w = b.getElementsByTagName(q)[0], z.async = 1, z.src =
						u, w.parentNode.insertBefore(z, w)
				})
				(window, document, "script",
					"https://advanceddev.github.io/quiz/w3bb-widget.js", "w3bb-quiz");
			}, 1500);
</script>
<!-- /W3BB quiz widget -->
```

После этого отобразится стандартная кнопка вызова виджета. Для того, чтобы использовать свою кнопку вызова виджета, нужно добавить следующий код, наприме для кнопки:

```html
<button id="w3bb-widget-toggler" data-w3bb-id="1234567890">
    Пройти опрос
</button>
```

`id="w3bb-widget-toggler"` - требуемый идентификатор

`data-w3bb-id="1234567890"` - где **1234567890** - идентификатор проекта


## Лицензия
(скоро)

