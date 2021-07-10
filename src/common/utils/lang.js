
import { useSelector } from 'react-redux';
import { t } from 'localizify';
import localizify from 'localizify';
import en from '../../lang/en.json';
import ru from '../../lang/ru.json';

export function Lang() {
  const curseChannelLang = useSelector(
    state => state.settings.curseChannelLang
  );
localizify
  .add('en', en)
  .add('ru', ru)
  .setLocale(curseChannelLang);
}

export default Lang;
