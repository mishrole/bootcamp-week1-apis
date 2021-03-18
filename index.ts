export {};
import moduleAlias from 'module-alias';
require('dotenv/config');

const app = process.env.APPLICATION;
const enviroment = process.env.NODE_ENV;
const extension = enviroment === 'production' ? 'js' : 'ts';

moduleAlias.addAliases({
  datalayer: __dirname + '/src/datalayer',
  handler  : __dirname + '/handler',
  service  : __dirname + '/src/service',
  types    : __dirname + '/src/types',
  utils    : __dirname + '/src/utils',
});

require(`./handler/${app}.${extension}`);
