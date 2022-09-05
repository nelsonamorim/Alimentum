import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import './style.css';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox className='input-checkbox-pattern'
      defaultChecked 
      color="success"
      sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
