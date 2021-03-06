import { FILTER_OPERATORS } from './../Filter/operators';

const GREATER = { label: 'More than', operator: FILTER_OPERATORS.GREATER };
const GREATER_INCL = {
  label: 'More than, incl',
  operator: FILTER_OPERATORS.GREATER_INCL
};
const LESS = { label: 'Less than', operator: FILTER_OPERATORS.LESS };
const LESS_INCL = {
  label: 'Less than, incl',
  operator: FILTER_OPERATORS.LESS_INCL
};
const EQUAL = { label: 'Equals to', operator: FILTER_OPERATORS.EQUAL };
const NOT_EQUAL = {
  label: 'Not equals to',
  operator: FILTER_OPERATORS.NOT_EQUAL
};

const INCLUDES = { label: 'Includes', operator: FILTER_OPERATORS.INCLUDES };
const NOT_INCLUDES = {
  label: 'Not includes',
  operator: FILTER_OPERATORS.NOT_INCLUDES
};

export const DATE_OPERATORS = [
  GREATER,
  GREATER_INCL,
  LESS,
  LESS_INCL,
  EQUAL,
  NOT_EQUAL
];

export const TEXT_OPERATORS = [INCLUDES, NOT_INCLUDES];
