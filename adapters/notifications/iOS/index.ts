import INotifications from "../INotifications";

class iOSNotifications implements INotifications {
    registerDevice({deviceId}: {deviceId:string}) {
        console.log(`Registering device with id: ${deviceId}`);
    }

    sendPushNotification({deviceId, message} : {deviceId:string, message: string}) {
        console.log(`Sending push notification to device with id: ${deviceId}. Message: ${message}`);
    }
}
