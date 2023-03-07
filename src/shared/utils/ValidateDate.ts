export const FieldValidate = (value: any) => {
  const _number = () => {
    if (!value) {
      return 0;
    }
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      return parseInt(value);
    }
    return value;
  };

  const _string = () => {
    if (!value) {
      return '';
    }
    if (typeof value !== 'string') {
      return value.toString();
    }
    return value;
  };

  const _boolean = () => {
    if (!value) {
      return false;
    }
    if (typeof value === 'boolean') {
      return value;
    }
    return value;
  };

  return {_number, _string, _boolean};
};
