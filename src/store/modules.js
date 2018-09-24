import camelCase from 'lodash/camelCase';
import {
  pipe,
  map,
  mergeAll,
  replace,
  equals,
  ifElse,
  assocPath,
  objOf,
  anyPass,
  prop,
} from 'ramda';
import { stubObj } from 'ramda-adjunct';

const requireModule = require.context('.', false, /\.js$/);

const getModuleName = pipe(
  replace(/(\.\/|\.js)/g, ''),
  camelCase,
);

const addNamespacedProp = fileName => assocPath([getModuleName(fileName), 'namespaced'], true);

const getModuleByName = fileName => pipe(
  requireModule,
  prop('default'),
  objOf(getModuleName(fileName)),
  addNamespacedProp(fileName),
)(fileName);

const isIndexFile = equals('./index.js');
const isModulesFile = equals('./modules.js');
const hasToIgnoreFile = anyPass([isIndexFile, isModulesFile]);

const getModule = fileName => ifElse(
  hasToIgnoreFile,
  stubObj,
  getModuleByName,
)(fileName);

const getModules = pipe(
  requireModule.keys,
  map(getModule),
  mergeAll,
);

export default getModules();
