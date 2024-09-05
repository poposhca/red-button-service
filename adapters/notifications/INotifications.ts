interface INotifications {
    registerDevice: ({deviceId}: {deviceId:string}) => void;
    sendPushNotification: ({deviceId, message} : {deviceId:string, message: string}) => void;
}

export default INotifications;
