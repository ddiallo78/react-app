/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Créer un compte',
  },
  connexion: {
    id: `${scope}.connexion`,
    defaultMessage: 'Connexion',
  },
});
