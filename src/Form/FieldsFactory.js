import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

export const FieldGroup = ({
  id,
  label,
  help,
  name,
  operators,
  state,
  ...rest
}) => {
  return (
    <>
      <FormGroup controlId={`${id}.value`}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl name={`${name}.value`} value={state.value} {...rest} />

        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
      <FormGroup controlId={`${id}.operator`}>
        {/* <Operator operators={operators} name={`${name}.operator`} /> */}
        <FormControl
          componentClass="select"
          name={`${name}.operator`}
          placeholder="Select option"
          value={state.operator}
          {...rest}
        >
          {operators.map((operator, i) => (
            <option key={`operator-${i}`} value={operator.operator}>
              {operator.label}
            </option>
          ))}
        </FormControl>

        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    </>
  );
};
