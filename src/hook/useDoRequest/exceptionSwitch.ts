/* eslint-disable */
import { message } from 'antd';

interface IException {
    exceptionName: string;
    IsMessageUserFriendly: boolean;
    Message?: string;
    errorMessage: string;
}


const exceptioSwitch = (exception: IException, errorMessage: string) => {
    message.destroy();

    if (!exception || !exception.IsMessageUserFriendly) {
        return message.error(errorMessage, 5.5);
    }

    if (exception.IsMessageUserFriendly) {
        return message.error(exception.Message, 5.5);
    }
};
export default exceptioSwitch;
