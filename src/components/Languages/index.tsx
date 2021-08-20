import * as React from 'react';

import {block as bem} from 'bem-cn';

import Link from 'components/Link';

const block = bem('menu');

export default class Languages extends React.Component {
  public render() {
    return (
        <nav className={block()}>
          <ol>
            <li><Link to='https://ru.crazysquirrel.ru'>Russian</Link></li>
            <li><Link to='https://en.crazysquirrel.ru'>English</Link></li>
            <li><Link to='https://hy.crazysquirrel.ru'>Armenian</Link></li>
            <li><Link to='https://cs.crazysquirrel.ru'>Czech</Link></li>
            <li><Link to='https://no.crazysquirrel.ru'>Norwegian</Link></li>
            <li><Link to='https://sq.crazysquirrel.ru'>Albanian</Link></li>
            <li><Link to='https://nl.crazysquirrel.ru'>Dutch</Link></li>
            <li><Link to='https://fr.crazysquirrel.ru'>French</Link></li>
            <li><Link to='https://uk.crazysquirrel.ru'>Ukrainian</Link></li>
            <li><Link to='https://ro.crazysquirrel.ru'>Romanian</Link></li>
            <li><Link to='https://az.crazysquirrel.ru'>Azerbaijan</Link></li>
            <li><Link to='https://el.crazysquirrel.ru'>Greek</Link></li>
            <li><Link to='https://sr.crazysquirrel.ru'>Serbian</Link></li>
            <li><Link to='https://lv.crazysquirrel.ru'>Latvian</Link></li>
            <li><Link to='https://be.crazysquirrel.ru'>Belarusian</Link></li>
            <li><Link to='https://es.crazysquirrel.ru'>Spanish</Link></li>
            <li><Link to='https://ca.crazysquirrel.ru'>Catalan</Link></li>
            <li><Link to='https://it.crazysquirrel.ru'>Italian</Link></li>
            <li><Link to='https://tr.crazysquirrel.ru'>Turkish</Link></li>
            <li><Link to='https://sk.crazysquirrel.ru'>Slovak</Link></li>
            <li><Link to='https://hr.crazysquirrel.ru'>Croatian</Link></li>
            <li><Link to='https://lt.crazysquirrel.ru'>Lithuanian</Link></li>
            <li><Link to='https://pl.crazysquirrel.ru'>Polish</Link></li>
            <li><Link to='https://bg.crazysquirrel.ru'>Bulgarian</Link></li>
            <li><Link to='https://pt.crazysquirrel.ru'>Portuguese</Link></li>
            <li><Link to='https://mk.crazysquirrel.ru'>Macedonian</Link></li>
            <li><Link to='https://de.crazysquirrel.ru'>German</Link></li>
            <li><Link to='https://da.crazysquirrel.ru'>Danish</Link></li>
            <li><Link to='https://sv.crazysquirrel.ru'>Swedish</Link></li>
            <li><Link to='https://sl.crazysquirrel.ru'>Slovenian</Link></li>
            <li><Link to='https://hu.crazysquirrel.ru'>Hungarian</Link></li>
            <li><Link to='https://et.crazysquirrel.ru'>Estonian</Link></li>
            <li><Link to='https://fi.crazysquirrel.ru'>Finnish</Link></li>
          </ol>
        </nav>
    );
  }
}
