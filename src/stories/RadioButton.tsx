import React from 'react';
import { style } from 'typestyle';
import { useTheme } from '../ThemeProvider';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  description?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, label, description, disabled }) => {
  const theme = useTheme();

  const containerStyle = style({
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    position: 'relative',
  });

  const inputStyle = style({
    marginRight: '10px',
    marginTop: '0px',
    appearance: 'none',
    width: '20px',
    height: '20px',
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: theme.colors.boxShadow,
    position: 'relative',
    $nest: {
      '&:hover': {
        borderColor: theme.colors.borderColorHover,
      },
      '&:checked': {
        borderColor: theme.colors.borderColorChecked,
        backgroundColor: theme.colors.backgroundColorChecked,
      },
      '&:checked:hover': {
        borderColor: theme.colors.borderColorCheckedHover,
        backgroundColor: theme.colors.backgroundColorCheckedHover,
      },
      '&:checked::before': {
        content: '""',
        display: 'block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: theme.colors.innerCircleColor,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      '&:focus': {
        outline: 'none',
      },
      '&:focus::after': {
        content: '""',
        display: 'block',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: `3px solid ${theme.colors.borderColorChecked}`,
        opacity: '60%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      '&:disabled': {
        borderColor: theme.colors.borderColorDisabled,
        backgroundColor: theme.colors.backgroundColorDisabled,
        cursor: 'not-allowed',
        boxShadow: theme.colors.boxShadow,
      },
      '&:disabled:checked': {
        borderColor: theme.colors.borderColorDisabled,
        backgroundColor: theme.colors.backgroundColorDisabled,
        cursor: 'not-allowed',
      },
      '&:disabled:checked::before': {
        content: '""',
        display: 'block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: theme.colors.innerCircleColorChecked,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  });

  const labelStyle = style({
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: theme.fonts.roboto,
    fontWeight: theme.fontWeights.medium,
    marginRight: '5px',
  });

  const descriptionStyle = style({
    fontSize: '12px',
    color: theme.colors.descriptionColor,
    position: 'absolute',
    top: '100%',
    left: '35px',
    marginTop: '4px',
    whiteSpace: 'nowrap',
  });

  return (
    <div className={containerStyle}>
      <input
        className={inputStyle}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        id={value}
        disabled={disabled}
      />
      <label className={labelStyle} htmlFor={value}>
        {label}
      </label>
      {description && (
        <span className={descriptionStyle}>
          {description}
        </span>
      )}
    </div>
  );
};

export default RadioButton;