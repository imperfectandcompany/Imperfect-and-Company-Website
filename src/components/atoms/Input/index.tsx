import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  as?: 'input';
  className?: string;
  error?: boolean;
  warning?: boolean;
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: 'textarea';
  className?: string;
  error?: boolean;
  warning?: boolean;
};

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  as: 'radio';
  className?: string;
  error?: boolean;
  warning?: boolean;
  label?: string;
};

type RadioGroupProps = {
  radios: RadioProps[];
};

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  as: 'checkbox';
  className?: string;
  error?: boolean;
  warning?: boolean;
  label?: string;
};


const InputComponent: React.FC<InputProps> = ({ className, error, warning, ...props }) => {
  const classNames = `${styles.input} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
  return <input className={classNames} {...props} />;
};

const TextInputComponent: React.FC<TextareaProps> = ({ className, error, warning, ...props }) => {
  const classNames = `${styles.input} ${styles.textarea} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
  return <textarea className={classNames} {...props} />;
};


const RadioComponent: React.FC<RadioProps> = ({ className, error, warning, label, ...props }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const classNames = `${styles.radio} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
  const labelClassNames = `${styles.radioLabel} ${isChecked ? styles.defaultCursor : ''}`;
  const id = Math.random().toString(); // generate a unique id

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.radioContainer}>
      <div className="flex">
        <input type="radio" id={id} className={classNames} onChange={handleInputChange} {...props} />
        <label htmlFor={id} className={labelClassNames}>{label}</label>
      </div>
    </div>
  );
};


const RadioGroup: React.FC<RadioGroupProps> = ({ radios }) => {
  return (
    <>
      {radios.map((radios, index) => (
        <RadioComponent key={index} {...radios} />
      ))}
    </>
  );
};

const CheckboxComponent: React.FC<CheckboxProps> = ({ className, error, warning, label, ...props }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const classNames = `${styles.checkbox} ${error ? styles.error : ''} ${warning ? styles.warning : ''} ${className}`;
  const labelClassNames = `${styles.checkboxLabel} ${isChecked ? styles.defaultCursor : ''} ${isClicked ? styles.clickedCursor : ''}`;
  const id = Math.random().toString(); // generate a unique id

  const handleInputChange = () => {
    setIsClicked(true);
    setIsChecked(prev => !prev); // toggle isChecked state
    setTimeout(() => setIsClicked(false), 200); // reset isClicked state after 200ms
  };

  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" id={id} className={classNames} checked={isChecked} onChange={handleInputChange} {...props} />
      <label htmlFor={id} className={labelClassNames}>{label}</label>
    </div>
  );
};


type AsProps = InputProps | TextareaProps | RadioProps | CheckboxProps;
type Props = AsProps | RadioGroupProps;


const Input: React.FC<Props> = (props) => {
  if ('as' in props) {
    if (props.as === 'textarea') {
      return <TextInputComponent {...(props as TextareaProps)} />;
    }

    if (props.as === 'radio') {
      return <RadioComponent {...(props as RadioProps)} />;
    }

    if (props.as === 'checkbox') {
      return <CheckboxComponent {...(props as CheckboxProps)} />;
    }

    return <InputComponent {...(props as InputProps)} />;
  }

  if ('radios' in props) {
    return <RadioGroup radios={props.radios} />;
  }

  return null;
};

export default Input;