import { expect, it, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react-native';

import Button from '.';

it('should respond to click events', async () => {
  const handleOnPress = jest.fn();

  const view = render(<Button label="Hello World!" onPress={handleOnPress} />);

  const button = await view.findByTestId('button');

  fireEvent(button, 'press');

  expect(handleOnPress).toHaveBeenCalled();
});
