import Defaults from 'superagent-defaults';
import { BEARER_CREDENCIALS_ENCODED } from './authConfig';

export const setToken = () => {
  const superagent = Defaults();
  superagent.set('Authorization', `Basic ${BEARER_CREDENCIALS_ENCODED}`);
  superagent
    .set('Host', 'api.twitter.com')
    .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
    .post('oauth2/token')
    .send('grant_type=client_credentials')
    .then(res => localStorage.setItem('token', res.body.access_token));
};

// export const setToken = () => {
//   console.log('sss');
//   var OAuth2 = OAuth.OAuth2;
//   const oauth2 = new OAuth2(
//     API_KEY,
//     API_KEY_SEC,
//     'https://api.twitter.com/',
//     null,
//     'oauth2/token',
//     null
//   );
//   oauth2.getOAuthAccessToken('', { grant_type: 'client_credentials' }, function(
//     e,
//     access_token,
//     refresh_token,
//     results
//   ) {
//     console.log('bearer: ', access_token);
//   });
// };
export const removeToken = () => {};
