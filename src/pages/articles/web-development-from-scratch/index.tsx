import * as React from 'react';

import App from 'components/App';
import Link from 'components/Link';

import {Metadata, MetadataType} from 'types/index';
import {siastrebov} from 'authors/index';

export const metadata: Metadata = {
  menu: 'Веб-разработка с нуля',
  title: 'Веб-разработка с нуля',
  description: 'Материалы для изучения веб-разработки с нуля до профессионального уровня.',
  keywords: 'Веб-разработка с нуля',
  h1: 'Веб-разработка с нуля',
  author: siastrebov,
  type: MetadataType.ARTICLE,
};

export default function () {
  return (
      <App {...metadata}>
        <h2> Front-end</h2>
        <h3>Верстка</h3>
        <h4>Знакомство с версткой</h4>
        <p>Данный уровень
          предназначен для людей, которые никогда не верстали и не имеют представления о верстке,
          CSS и HTML.</p>
        <h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/course/introduction'>Введение в Интернет</Link></li>
          <li><Link to='https://webref.ru/course/html-basics'>Основы HTML</Link></li>
          <li><Link to='https://webref.ru/course/html-content'>Содержимое в HTML</Link></li>
          <li><Link to='https://webref.ru/course/html5-form'>Формы в HTML</Link></li>
          <li><Link to='https://webref.ru/course/css-basics'>Основы CSS</Link></li>
          <li><Link to='https://webref.ru/course/css-text'>Текст в CSS</Link></li>
          <li><Link to='https://webref.ru/course/box-model'>Блочная модель в CSS</Link></li>
          <li><Link to='https://webref.ru/course/positioning'>Позиционирование в CSS</Link></li>
          <li><Link to='https://webref.ru/layout/learn-html-css'>Уроки по HTML и CSS</Link></li>
        </ol>
        <h5>Справочники</h5>
        <ol>
          <li><Link
              to='https://everstudent.ru/blog/htmlcss/30-css-seletors-to-memorize/'>CSS-селекторы</Link>
          </li>
          <li><Link to='https://webref.ru/css/value/size'>Размеры</Link></li>
          <li><Link to='https://webref.ru/css/value/color'>Цвета</Link></li>
          <li><Link to='https://webref.ru/css/value/angle'>Уголы</Link></li>
          <li><Link to='https://webref.ru/css/value/media'>Медиа-запросы</Link></li>
          <li><Link to='https://webref.ru/css/value/filter'>Фильтры</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=ocstRLlFoQI&amp;list=PLqHlAwsJRxAOAuZ53NGC_1azSdPhAtFTR'>Основы
            HTML</Link></li>
        </ol>
        <h4>Базовая верстка</h4><p>Данный уровень предназначен для людей, имеющих базовые
        представления о верстке, CSS и HTML.</p><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/layout/diveintohtml5'>Погружение в HTML5</Link></li>
          <li><Link to='https://webref.ru/layout/howtocodeinhtml'>Как верстать на HTML5 и
            CSS3</Link></li>
          <li><Link to='https://webref.ru/layout/html5-css3'>HTML5 и CSS3 на примерах</Link></li>
          <li><Link to='https://webref.ru/layout/magic-of-css'>Магия CSS</Link></li>
          <li><Link to='https://webref.ru/course/css-advanced'>Продвинутый CSS</Link></li>
          <li><Link to='https://webref.ru/layout/advanced-html-css'>Продвинутые уроки по HTML и
            CSS</Link></li>
        </ol>
        <h5>Статьи</h5>
        <ol>
          <li><Link to='https://habrahabr.ru/post/144003/'>Адаптивная верстка</Link></li>
          <li><Link to='https://habrahabr.ru/post/150071/'>Retina</Link></li>
          <li><Link to='https://habrahabr.ru/company/pechkin/blog/255819/'>Email-писем</Link></li>
        </ol>
        <h5>Справочники</h5>
        <ol>
          <li><Link to='https://webref.ru/css'>Справочник CSS</Link></li>
          <li><Link to='https://webref.ru/html'>Справочник HTML</Link></li>
        </ol>
        <h4>Современные технологии верстки</h4><p>Данный уровень предназначен для людей, имеющих
        представления о верстке и желающих изучить новые технологии и подходы к верстке.</p>
        <h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/layout/font-awesome'>Font Awesome</Link></li>
          <li><Link to='https://www.udacity.com/course/browser-rendering-optimization--ud860'>Browser
            Rendering Optimization</Link></li>
        </ol>
        <h5>Документация</h5>
        <ol>
          <li><Link to='https://ru.bem.info/methodology/key-concepts/'>Основы БЭМ</Link></li>
        </ol>
        <h5>Статьи</h5>
        <ol>
          <li><Link to='https://habrahabr.ru/company/pechkin/blog/256853/'>Вёрстка адаптивных
            email-писем (часть 1)</Link></li>
          <li><Link to='https://habrahabr.ru/company/pechkin/blog/257397/'>Вёрстка адаптивных
            email-писем (часть 2)</Link></li>
          <li><Link to='https://habrahabr.ru/post/256109/'>Способы организации CSS-кода</Link>
          </li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=7Lg-438gAc8&amp;list=PLqHlAwsJRxAPs942EdJ1akeWpOg2yatiM'>CSS:
            Flexbox</Link></li>
          <li><Link to='https://www.youtube.com/watch?v=hTmxbJF2Tts'>Пишем БЭМ правильно</Link>
          </li>
        </ol>
        <h5>Справочники</h5>
        <ol>
          <li><Link to='https://csstriggers.com'>Рендеринг CSS</Link></li>
        </ol>
        <h4>Надстройки над HTML и CSS</h4><p>Метаязыки являющиеся надстройками над HTML CSS.</p>
        <h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/course/sass'>Основы Sass</Link></li>
          <li><Link to='https://webref.ru/layout/sass'>Sass</Link></li>
          <li><Link to='https://webref.ru/layout/less'>Less</Link></li>
        </ol>
        <h5>Документация</h5>
        <ol>
          <li><Link to='https://sass-scss.ru/documentation/sassscript/'>SassScript</Link></li>
          <li><Link to='https://jade-lang.com/tutorial/'>Jade</Link></li>
          <li><Link to='https://stylus-lang.com/'>Stylus</Link></li>
        </ol>
        <h4>Автоматизация разработки</h4><p>Данный уровень предназначен для людей, имеющих
        глубокие представления о верстке и желающих изучить способы
        оптимизации и автоматизации своей работы. Для дальнейшего изучения понадобится знание так
        же JavaScript и
        NodeJs</p><h5>
        Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/grunt-getting-started'>Приступая к работе с
            Grunt</Link></li>
          <li><Link to='https://webref.ru/dev/building-with-gulp'>Сборка с Gulp</Link></li>
          <li><Link to='https://webref.ru/dev/automate-with-gulp'>Автоматизация работы с
            Gulp</Link></li>
          <li><Link to='https://webref.ru/dev/bower-gulp-yeoman'>Bower, Gulp и Yeoman</Link></li>
          <li><Link to='https://webref.ru/dev/node-express-libsass'>Node, Express и libsass:
            проект с нуля</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=uPk6lQoTThE&amp;list=PLDyvV36pndZFLTE13V4qNWTZbeipNhCgQ'>Скринкаст
            по Gulp</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=kLMjOd-x0aQ&amp;list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn'>Скринкаст
            по Webpack</Link></li>
        </ol>
        <h4> Фреймворки для верстки</h4><p> Готовые фреймворки для верстки макетов.</p>
        <h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/layout/bootstrap'>Bootstrap</Link></li>
        </ol>
        <h5>Документация</h5>
        <ol>
          <li><Link to='https://getbootstrap.com/2.3.2/getting-started.html'>Bootstrap</Link></li>
          <li><Link
              to='https://foundation.zurb.com/sites/docs/installation.html'>Foundation</Link></li>
          <li><Link to='https://getskeleton.com/#intro'>Skeleton</Link></li>
        </ol>
        <h3>JavaScript</h3><h4>Язык JavaScript</h4><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/learn-javascript'>Знакомство с JavaScript</Link>
          </li>
        </ol>
        <h5>Учебник</h5>
        <ol>
          <li><Link to='https://learn.javascript.ru/getting-started'>Введение</Link></li>
          <li><Link to='https://learn.javascript.ru/first-steps'>Основы JavaScript</Link></li>
          <li><Link to='https://learn.javascript.ru/writing-js'>Качество кода</Link></li>
          <li><Link to='https://learn.javascript.ru/data-structures'>Структуры данных</Link></li>
          <li><Link to='https://learn.javascript.ru/functions-closures'>Замыкания, область
            видимости</Link></li>
          <li><Link to='https://learn.javascript.ru/objects-more'>Методы объектов и контекст
            вызова</Link></li>
          <li><Link to='https://learn.javascript.ru/js-misc'>Некоторые другие возможности</Link>
          </li>
          <li><Link to='https://learn.javascript.ru/oop'>ООП в функциональном стиле</Link></li>
          <li><Link to='https://learn.javascript.ru/prototypes'>ООП в прототипном стиле</Link>
          </li>
          <li><Link to='https://learn.javascript.ru/es-modern'>Современные возможности
            ES-2015</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=4YfsAz-sNAo&amp;list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q'>Основы
            ES6</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=fGdd9qNwQdQ&amp;list=PLoYCgNOIyGACnrXwo5HMCfOH9VT05znGv'>Javascript
            Tutorial For Beginners</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=fGdd9qNwQdQ&amp;list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V'>Javascript
            Fundamentals</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=HkFlM73G-hk&amp;list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f'>Modular
            Javascript</Link></li>
        </ol>
        <h4>Документ, события, интерфейсы</h4><h5>Учебник</h5>
        <ol>
          <li><Link to='https://learn.javascript.ru/document'>Документ и объекты страницы</Link>
          </li>
          <li><Link to='https://learn.javascript.ru/events-and-interfaces'>Основы работы с
            событиями</Link></li>
          <li><Link to='https://learn.javascript.ru/event-details'>События в деталях</Link></li>
          <li><Link to='https://learn.javascript.ru/forms-controls'>Формы, элементы
            управления</Link></li>
          <li><Link to='https://learn.javascript.ru/widgets'>Создание графических
            компонентов</Link></li>
        </ol>
        <h4>Дополнительно</h4><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/canvasdeepdive'>Глубокое погружение в Canvas</Link>
          </li>
        </ol>
        <h5>Учебник</h5>
        <ol>
          <li><Link to='https://learn.javascript.ru/webcomponents'>Веб-компоненты: взгляд в
            будущее</Link></li>
          <li><Link to='https://learn.javascript.ru/ajax'>AJAX и COMET</Link></li>
          <li><Link to='https://learn.javascript.ru/animation'>Анимация</Link></li>
          <li><Link to='https://learn.javascript.ru/optimize'>Оптимизация</Link></li>
          <li><Link to='https://learn.javascript.ru/frames-and-windows'>Окна и Фреймы</Link></li>
          <li><Link to='https://learn.javascript.ru/css-for-js'>CSS для
            JavaScript-разработчика</Link></li>
          <li><Link to='https://learn.javascript.ru/tools'>Сундучок с инструментами</Link></li>
          <li><Link to='https://learn.javascript.ru/regular-expressions-javascript'>Регулярные
            выражения</Link></li>
          <li><Link to='https://learn.javascript.ru/extra'>О всякой всячине</Link></li>
        </ol>
        <h4>Node.JS</h4><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/first-node-app'>Создание первого приложения на
            Node</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=ILpS4Fq3lmw&amp;list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg'>Скринкаст
            по Node.JS</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=pU9Q6oiQNd0&amp;list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh'>Node.js
            Tutorials</Link></li>
        </ol>
        <h5>Документация</h5>
        <ol>
          <li><Link to='https://nodejs.org/dist/latest-v6.x/docs/api/'>Node.JS</Link></li>
        </ol>
        <h4>jQuery</h4><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/jqfundamentals'>Основы jQuery</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=hMxGhHNOkCU&amp;list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_'>jQuery
            Tutorial for Beginners</Link></li>
        </ol>
        <h5>Документация</h5>
        <ol>
          <li><Link to='https://api.jquery.com/'>jQuery API</Link></li>
        </ol>
        <h4>AngularJS</h4><h5>Курсы</h5>
        <ol>
          <li><Link to='https://webref.ru/dev/angular-cookbook'>AngularJS. Рецепты
            программирования</Link></li>
        </ol>
        <h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=X_JH1gBJe2E&amp;list=PLqHlAwsJRxANDZPGvgX4DQCtN1TTUCUxx'>Основы
            Angular 2</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=QETUuZ27N0w&amp;list=PLoYCgNOIyGAApoDfJHjmMgGNlYenKg5jO'>MEAN
            Stack Tutorials (MongoDB, Express, Angular, NodeJs)</Link></li>
        </ol>
        <h4>React</h4><h5>Скринкасты</h5>
        <ol>
          <li><Link
              to='https://www.youtube.com/watch?v=MhkGQAoc7bc&amp;list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b'>React
            JS Tutorials</Link></li>
          <li><Link
              to='https://www.youtube.com/watch?v=1w-oQ-i1XB8&amp;list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt'>Redux
            Tutorials</Link></li>
        </ol>
        <h2>Back-end</h2><h3>PHP</h3><h4>Справочник языка</h4><h5>Документация</h5>
        <ol>
          <li><Link to='https://php.net/manual/ru/language.basic-syntax.php'>Основы
            синтаксиса</Link></li>
          <li><Link to='https://php.net/manual/ru/language.types.php'>Типы</Link></li>
          <li><Link to='https://php.net/manual/ru/language.variables.php'>Переменные</Link></li>
          <li><Link to='https://php.net/manual/ru/language.constants.php'>Константы</Link></li>
          <li><Link to='https://php.net/manual/ru/language.expressions.php'>Выражения</Link></li>
          <li><Link to='https://php.net/manual/ru/language.operators.php'>Операторы</Link></li>
          <li><Link to='https://php.net/manual/ru/language.control-structures.php'>Управляющие
            конструкции</Link></li>
          <li><Link to='https://php.net/manual/ru/language.functions.php'>Функции</Link></li>
          <li><Link to='https://php.net/manual/ru/language.oop5.php'>Классы и объекты</Link></li>
          <li><Link to='https://php.net/manual/ru/language.namespaces.php'>Пространства
            имен</Link></li>
        </ol>
        <h4>Дополнительно</h4><h5>Документация</h5>
        <ol>
          <li><Link to='https://php.net/manual/ru/language.errors.php'>Errors</Link></li>
          <li><Link to='https://php.net/manual/ru/language.exceptions.php'>Исключения</Link></li>
          <li><Link to='https://php.net/manual/ru/language.generators.php'>Generators</Link></li>
          <li><Link to='https://php.net/manual/ru/language.references.php'>Ссылки.
            Разъяснения</Link></li>
          <li><Link to='https://php.net/manual/ru/reserved.variables.php'>Предопределённые
            переменные</Link></li>
          <li><Link to='https://php.net/manual/ru/reserved.exceptions.php'>Предопределённые
            исключения</Link></li>
          <li><Link to='https://php.net/manual/ru/reserved.interfaces.php'>Встроенные интерфейсы и
            классы</Link></li>
          <li><Link to='https://php.net/manual/ru/context.php'>Контекстные опции и
            параметры</Link></li>
          <li><Link to='https://php.net/manual/ru/wrappers.php'>Поддерживаемые протоколы и
            обработчики (wrappers)</Link></li>
          <li><Link to='https://php.net/manual/ru/security.php'>Безопасность</Link></li>
          <li><Link to='https://php.net/manual/ru/features.php'>Отличительные особенности</Link>
          </li>
          <li><Link to='https://php.net/manual/ru/funcref.php'>Справочник функций</Link></li>
          <li><Link to='https://php.net/manual/ru/internals2.php'>Ядро PHP: Руководство
            хакера</Link></li>
        </ol>
        <h2>Дополнительно</h2><h3>Системы контроля версий</h3><h4> Git</h4><h5>Учебник</h5>
        <ol>
          <li><Link
              to='https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5'>Введение</Link>
          </li>
          <li><Link to='https://git-scm.com/book/ru/v1/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git'>Основы
            Git</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git'>Ветвление
            в Git</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5'>Git
            на сервере</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B9-Git'>Распределённый
            Git</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git'>Инструменты
            Git</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git'>Настройка
            Git</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/Git-%D0%B8-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9'>Git
            и другие системы контроля версий</Link></li>
          <li><Link
              to='https://git-scm.com/book/ru/v1/Git-%D0%B8%D0%B7%D0%BD%D1%83%D1%82%D1%80%D0%B8'>Git
            изнутри</Link></li>
        </ol>
      </App>
  );
}
