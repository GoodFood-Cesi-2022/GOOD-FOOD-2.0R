import {ReactChild, useCallback} from 'react';
import { Checkbox, useCheckboxState } from 'pretty-checkbox-react';
import {Text} from 'react-native';

function CheckBox() {
    const checkbox = useCheckboxState();

    const onSubmit = useCallback(
        e => {
            e.preventDefault();

            if (!checkbox.state) {
                // update the state manually from the `confirm` result
                checkbox.setState(confirm('Do you agree to the terms and conditions?'));
            }
        },
        [checkbox]
    );

    return (
        <form onSubmit={onSubmit}>
            <Checkbox name="tac" value="" {...checkbox}>
                <Text>Do you agree to the terms and conditions?</Text>
            </Checkbox>
        </form>
    );
}
export default CheckBox;