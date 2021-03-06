function validateNumericInput(input, opts) {
  let value = input.value;
  if (value === '' && opts.empty) {
    return value;
  }

  if (!value) {
    return opts.lastValidValue || null;
  }

  value = parseInt(value, 10);

  if (!/^\d{1,5}$/.test(value)) {
    opts.onInvalid(input);
    return opts.lastValidValue;
  }

  if (opts.max && value > opts.max) {
    opts.onInvalid(input);
    return opts.max;
  }

  if (opts.min && value < opts.min) {
    opts.onInvalid(input);
    return opts.min;
  }

  return value;
}

function handleKeyDown(event) {
  const multiplier = event.shiftKey ? 10 : 1;
  const parsedValue = parseInt(this.value, 10);
  if (event.key === 'ArrowUp') {
    this.value = parsedValue + (1 * multiplier); // eslint-disable-line no-implicit-coercion
    this.oninput();
  } else if (event.key === 'ArrowDown') {
    this.value = parsedValue - (1 * multiplier); // eslint-disable-line no-implicit-coercion
    this.oninput();
  }
}

exports.validateNumericInput = validateNumericInput;
exports.handleKeyDown = handleKeyDown;
