import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function UseRadioGroup() {
  return (
    <RadioGroup sx={{
      '& .MuiSvgIcon-root': {
        fontSize: 20,
      },
    }}  name="use-radio-group" defaultValue="Horário comercial (08:00 às 18:00)">
      <MyFormControlLabel value="Horário comercial (08:00 às 18:00)" label="Horário comercial (08:00 às 18:00)" control={<Radio />} />
      <MyFormControlLabel value="Outro:" label="Outro:" control={<Radio />} 
      />
    </RadioGroup>
  );
}
