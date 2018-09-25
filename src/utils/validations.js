/* eslint-disable import/prefer-default-export */
import {
  isNil,
  isEmpty,
  anyPass,
  not,
  pipe,
  prop,
} from 'ramda';

export const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const hasError = pipe(
  prop('error'),
  isNilOrEmpty,
  not,
);
