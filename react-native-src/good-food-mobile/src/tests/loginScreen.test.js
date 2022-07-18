import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { render, fireEvent, getByPlaceholderText } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const onChangeTextMock = jest.fn();
const CHANGE_TEXT = 'content';

it('TextInput email is present', () => {
  const { getByPlaceholderText } = render(
    <View>
      <TextInput placeholder="email" onChangeText={onChangeTextMock} />
    </View>
  );
  fireEvent.changeText(getByPlaceholderText('email'), CHANGE_TEXT);
});

it('TextInput password is present', () => {
  const { getByPlaceholderText } = render(
    <View>
      <TextInput placeholder="password" onChangeText={onChangeTextMock} />
    </View>
  );
  fireEvent.changeText(getByPlaceholderText('password'), CHANGE_TEXT);
});

it('Login TouchableOpacity', () => {

    const onPressMock = jest.fn();
    const eventData = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };

    const { getByText } = render(
      <View>
        <TouchableOpacity onPress={onPressMock}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );

    fireEvent.press(getByText('Login'), eventData);
    expect(onPressMock).toHaveBeenCalledWith(eventData);
});