var arsStatic = {
  html: `<table class='sunshine'><thead><tr><th style="width: 40px;">Действие</th><th>Команда</th><th>Права</th><th>Описание</th></tr></thead><tbody><tr><td><button class="swal-button">Использовать</button></td><td><code>2fa &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Генерирует временный токен ​<strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-zh-CN">двухфакторной аутентификации</a></strong>​ для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>2fano &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Отклоняет все ожидающие подтверждения ​<strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-zh-CN">двухфакторной аутентификации</a></strong>​ для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>2faok &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Принимает все ожидающие подтверждения ​<strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Two-factor-authentication-zh-CN">двухфакторной аутентификации</a></strong>​ для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>addlicense &lt;Боты&gt; &lt;Лицензии&gt;</code></td><td><code>Operator</code></td><td>Активирует указанные <code>Лицензии</code> для указанных ботов, детали параметра описаны ​<strong><a href="#addlicense-%E5%91%BD%E4%BB%A4%E7%9A%84-licenses-%E5%8F%82%E6%95%B0">ниже</a></strong>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>balance &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает баланс кошелька Steam для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>bgr &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает информацию об очереди <strong><a href="https://github.com/JustArchiNET/ArchiSteamFarm/wiki/Background-games-redeemer-zh-CN">BGR</a></strong> (фонового активатора игр) для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>bl &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает список пользователей в черном списке обмена для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>bladd &lt;Боты&gt; &lt;SteamIDs64&gt;</code></td><td><code>Master</code></td><td>Добавляет указанные <code>SteamIDs</code> в черный список обмена для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>blrm &lt;Боты&gt; &lt;SteamIDs64&gt;</code></td><td><code>Master</code></td><td>Удаляет указанные <code>SteamIDs</code> из черного списка обмена для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>exit</code></td><td><code>Owner</code></td><td>Полностью останавливает процесс ASF.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>farm &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Перезапускает модуль фарма карточек для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>help</code></td><td><code>FamilySharing</code></td><td>Показывает справку (ссылку на эту страницу).</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>input &lt;Боты&gt; &lt;Тип&gt; &lt;Значение&gt;</code></td><td><code>Master</code></td><td>Вводит указанное значение для указанных ботов, доступно только в режиме <code>Headless</code> — подробнее ​<strong><a href="#input-%E5%91%BD%E4%BB%A4">ниже</a></strong>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>ib &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает черный список автоматического фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>ibadd &lt;Боты&gt; &lt;AppIDs&gt;</code></td><td><code>Master</code></td><td>Добавляет указанные <code>AppIDs</code> в черный список автоматического фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>ibrm &lt;Боты&gt; &lt;AppIDs&gt;</code></td><td><code>Master</code></td><td>Удаляет указанные <code>AppIDs</code> из черного списка автоматического фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>iq &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает очередь приоритетного фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>iqadd &lt;Боты&gt; &lt;AppIDs&gt;</code></td><td><code>Master</code></td><td>Добавляет указанные <code>AppIDs</code> в очередь приоритетного фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>iqrm &lt;Боты&gt; &lt;AppIDs&gt;</code></td><td><code>Master</code></td><td>Удаляет указанные <code>AppIDs</code> из очереди приоритетного фарма для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>level &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает уровень аккаунта Steam для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>loot &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Отправляет все предметы сообщества типа <code>LootableTypes</code> от указанных ботов пользователю <code>Master</code> (с наименьшим steamID, если их несколько), указанному в свойстве <code>SteamUserPermissions</code>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>loot@ &lt;Боты&gt; &lt;RealAppIDs&gt;</code></td><td><code>Master</code></td><td>Отправляет все предметы сообщества типа <code>LootableTypes</code>, соответствующие указанным <code>RealAppIDs</code>, от указанных ботов пользователю <code>Master</code> (с наименьшим steamID, если их несколько), указанному в свойстве <code>SteamUserPermissions</code>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>loot^ &lt;Боты&gt; &lt;AppID&gt; &lt;ContextID&gt;</code></td><td><code>Master</code></td><td>Отправляет все предметы из категории инвентаря <code>ContextID</code>, соответствующие указанному <code>AppID</code>, от указанных ботов пользователю <code>Master</code> (с наименьшим steamID, если их несколько), указанному в свойстве <code>SteamUserPermissions</code>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>nickname &lt;Боты&gt; &lt;Никнейм&gt;</code></td><td><code>Master</code></td><td>Изменяет никнейм указанных ботов на <code>Никнейм</code>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>owns &lt;Боты&gt; &lt;Игры&gt;</code></td><td><code>Operator</code></td><td>Проверяет, владеют ли указанные боты <code>Играми</code>, детали параметра описаны ​<strong><a href="#owns-%E5%91%BD%E4%BB%A4%E7%9A%84-games-%E5%8F%82%E6%95%B0">ниже</a></strong>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>password &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Показывает зашифрованный пароль для указанных ботов (используйте вместе с <code>PasswordFormat</code>).</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>pause &lt;Боты&gt;</code></td><td><code>Operator</code></td><td>Навсегда приостанавливает модуль автоматического фарма для указанных ботов. ASF не будет пытаться фармить этот аккаунт в текущей сессии, пока вы вручную не выполните <code>resume</code> или не перезапустите ASF.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>pause~ &lt;Боты&gt;</code></td><td><code>FamilySharing</code></td><td>Временно приостанавливает модуль автоматического фарма для указанных ботов. Фарм автоматически возобновится при следующем игровом событии или отключении бота. Вы можете <code>resume</code>, чтобы возобновить фарм.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>pause&amp; &lt;Боты&gt; &lt;Секунды&gt;</code></td><td><code>Operator</code></td><td>Временно приостанавливает модуль автоматического фарма для указанных ботов на <code>Секунды</code> секунд. После этого модуль фарма автоматически возобновится.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>play &lt;Боты&gt; &lt;AppIDs,НазваниеИгры&gt;</code></td><td><code>Master</code></td><td>Переключается в ручной режим фарма — запускает указанные <code>AppIDs</code> для указанных ботов, опционально с пользовательским <code>НазваниеИгры</code>. Используйте команды <code>reset</code> или <code>resume</code> для возврата.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>privacy &lt;Боты&gt; &lt;Настройки&gt;</code></td><td><code>Master</code></td><td>Изменяет <strong><a href="https://steamcommunity.com/my/edit/settings" rel="nofollow">настройки приватности Steam</a></strong> для указанных ботов, доступные опции см. ​<strong><a href="#privacy-%E8%AE%BE%E7%BD%AE">ниже</a></strong>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>redeem &lt;Боты&gt; &lt;Ключи&gt;</code></td><td><code>Operator</code></td><td>Активирует указанные ключи игр или коды пополнения кошелька для указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>redeem^ &lt;Боты&gt; &lt;Режимы&gt; &lt;Ключи&gt;</code></td><td><code>Operator</code></td><td>Активирует указанные ключи игр или коды пополнения кошелька для указанных ботов в <code>Режимах</code>, подробнее о режимах см. ​<strong><a href="#redeem-%E6%A8%A1%E5%BC%8F">ниже</a></strong>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>reset &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Сбрасывает статус игры в нормальное состояние, используется вместе с командой <code>play</code> в ручном режиме фарма.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>restart</code></td><td><code>Owner</code></td><td>Перезапускает процесс ASF.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>resume &lt;Боты&gt;</code></td><td><code>FamilySharing</code></td><td>Возобновляет процесс автоматического фарма для указанных ботов. См. <code>pause</code> и <code>play</code>.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>start &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Запускает указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>stats</code></td><td><code>Owner</code></td><td>Показывает статистику процесса, например использование управляемой памяти.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>status &lt;Боты&gt;</code></td><td><code>FamilySharing</code></td><td>Показывает статус указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>stop &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Останавливает указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>transfer &lt;Боты&gt; &lt;ЦелевойБот&gt;</code></td><td><code>Master</code></td><td>Передает все предметы сообщества типа <code>TransferableTypes</code> от указанных ботов целевому боту.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>transfer@ &lt;Боты&gt; &lt;RealAppIDs&gt; &lt;ЦелевойБот&gt;</code></td><td><code>Master</code></td><td>Передает все предметы сообщества типа <code>TransferableTypes</code>, соответствующие указанным <code>RealAppIDs</code>, от указанных ботов целевому боту.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>transfer^ &lt;Боты&gt; &lt;AppID&gt; &lt;ContextID&gt; &lt;ЦелевойБот&gt;</code></td><td><code>Master</code></td><td>Передает все предметы из категории инвентаря <code>ContextID</code>, соответствующие указанному <code>AppID</code>, от указанных ботов целевому боту.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>unpack &lt;Боты&gt;</code></td><td><code>Master</code></td><td>Распаковывает все наборы в инвентаре указанных ботов.</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>update</code></td><td><code>Owner</code></td><td>Проверяет обновления ASF на GitHub (выполняется автоматически каждые <code>UpdatePeriod</code>).</td></tr><tr><td><button class="swal-button">Использовать</button></td><td><code>version</code></td><td><code>FamilySharing</code></td><td>Показывает версию ASF.</td></tr></tbody></table>`,
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABsFBMVEVHcEz9/f3+/v8Tdaf///8LGTP+/v4NPWX+/v8GGDj8/f4OGzX///////////8ZJ1ALJ0oNGzf+/v4mOGXX2+T8/f3z9vkPH0UjMFj5+fr///8NGzMJG0ERHS8SKEgXW40Ubp8WY5Ula5ePnrb3+PlnhKUfQ3Q3R3C2vMvt8PRcZH7///8TgrMTgbITfa4YNmcPHDT///8JGj0HGT2rucxGWYJ0g6H///9aZYbGy9jFyNQhL1TO0dp5lbOTma39/f7///+Sl6br7O6SlqT///////8UY5UUY5UJGTgTc6QThLUTfa8VToETdKYQK1sRK1sUWowUY5X///+mq7tlc5MzWX7Mztl5gZuytcJPV3AjL08iLlEUTYAUPXATK10Tfa4FO3IVToHEz9wAL2fj5+5GUG4JFz1mbIC8wMsFFzYFGDwHGkILGTIJG0cLHUoFGD8RJFMUU4YUN2kOIE4TSHsUYJMUbqAUQnUVTYAQLWEUWowUPG8SKFoTZ5kRHDATfq8Tdqf///8IIFQUaJkeWYrA0N4JMmgHQndAc5wJTYIIVooGXpNllrdchanT3ui2xtaZV9eJAAAAaXRSTlMAj/j97/vmAtD8xzncwJvwJay59uHd/ObqgnBtlpgLPfz8Femx+/7s0vitXqVLf53k3VmE9fDr59vaxLSY/qmGRnxeXjI/lGy5MLbr+8A/cPuiqLzgfLHJhJfN17bjr6z8xfmu9cH4cHitMXlOAAACjUlEQVQ4y2XTh1faQBgA8IMGQqCiGPaQAgUE3OLeFTfurR120SYkAQSrQUABUSyOf7l3kQC+/i7JfXff9/Ly4DsAXuA4AG0qi02jsVlUbS/rRnCpsvXkqnpsKmGrnsZBy2KOyTGyHBrooWlpeAkMLAzDyBiRDIayvloFnKwMJSOoKgJGsghD9YsVOLASBEE3pKtz/8t34MBCEXQddbQ7O/trjKAiVB96BY630I2ow1BobjoUmjXQdAR+KRyL0Ug0VhWlD+c+jBkMxzNzM3BXgwrWog1oYyBgODr47adnpv2xSBT+HkDDRlgxz9H+wM/jgNkc8BvNBzGWtQLgNLAcy8JbGLFJs3HSZDJNmQzjpmaWM7SBviRXk2SbxyXGSQkCI1jAqUB/Mp6sYbfV6mGvWq2W7JOSPQ7urIPuJBsXccNbkNG7t7cf397aQQkrMLUPZLh4JoMushV5P0yS3vatUbSV+QwkytaRQbJQ4DOFwqiySQnBR1PTKAnTPCyY0ikUSoVrgPcOjihE2vYdPnPK8yTfDczytwKtbsQVhHOvTqcd4Hn+VMCvg2lM3itHMK3LMyiXD/UGPbeXkFBwuQacrh8Yhg1hiM8TxHxu/vT8UvQJtud3j/ubVKCXTrix8O15Xaob/hf21MlJOZiX5qXSvHvi+Tacqgmn7Kgfvl6E7+58ped8vpTyTdwlLkThi49CP9gTiZv7R/1juXxTerpPNEINA6/d9Eb6/kH/VNKXbtJ1G+kFsSk3zxyOv46Hh3KlclbjOJsHYleDzWKxmK1UskUkixSzxfnGc9f1DvkjQvHCq6OHL61eX1+/qYLR6tKrw4lKOr+sXFWtdNj/O99wiTs7uzqWlzu6Op14Pf0P2PD9NrHDeWsAAAAASUVORK5CYII=',
  css: `table.sunshine{font-family:verdana,arial,sans-serif;font-size:11px;color:#333;border-width:1px;border-color:#999;border-collapse:collapse}table.sunshine th{background-color:#c3dde0;border-width:1px;padding:8px;border-style:solid;border-color:#a9c6c9}table.sunshine tr{background-color:#d4e3e5}table.sunshine td{border-width:1px;padding:8px;border-style:solid;border-color:#a9c6c9}table.sunshine caption{padding-top:8px;color:#808294;text-align:center;caption-side:top;background-color:#94d7df}table.sunshine h2{margin:0;font-size:25px}.swal-user{width:80%}table.sunshine a{color:#2196f3}table.sunshine .swal-button{padding:5px}#unusedKeyArea code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:3px}.notice_box_content{border:1px solid #a25024;border-radius:3px;color:#acb2b8;font-size:14px;font-family:"Motiva Sans",Sans-serif;font-weight:normal;padding:15px 15px;margin-bottom:15px}.notice_box_content b{font-weight:normal;color:#f47b20;float:left}#unusedKeys{margin:0 15px}#copyUnuseKey span{font-size:15px;line-height:20px}#unusedKeyArea li{white-space:nowrap;color:#007fff}.currency_change_option_ctn{vertical-align:top;margin:0 6%}.currency_change_option_ctn:first-child{margin-bottom:12px}.currency_change_option_ctn>p{font-size:12px;margin:8px 8px 0 8px}.currency_change_option_ctn{vertical-align:top;margin:0 6%}.currency_change_option_ctn:first-child{margin-bottom:12px}.currency_change_option{font-family:"Motiva Sans",Sans-serif;font-weight:300;display:block}.currency_change_option>span{display:block;padding:9px 19px}.currency_change_option .country{font-size:20px}.currency_change_option .notes{font-size:13px;line-height:18px}.currency_change_option_ctn>p{font-size:12px;margin:8px 8px 0 8px}.asf-class input[type="text"]{border:1px solid #c2e9ee;width:180px}.asf-output{width:90%;min-height:150px}.switch-key{margin:0 15%;height:100px}.switch-key-left{float:left}.switch-key-right{float:right}.switch-key div{width:50%;position:relative;cursor:default}.switch-key input{margin:10px 0}.switch-key p{font-size:25px;height:25px;color:black;margin:0}.swal-content *{color:#000}.swal-content textarea{background:#fff}#allKey{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;color:#333;background-color:#fff;border-color:#ccc}#allKey:hover{color:#333;background-color:#e6e6e6;border-color:#adadad;text-decoration:none}#allKey:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c;text-decoration:none}#allKey:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125);color:#333;background-color:#e6e6e6;border-color:#adadad}.icon-img{position:absolute;width:32px;height:32px;margin:0!important}.icon-div{width:32px!important;height:32px!important;display:none;background:#fff!important;border-radius:16px!important;box-shadow:4px 4px 8px #888!important;position:absolute!important;z-index:2147483647!important;cursor:pointer}`
}
