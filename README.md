# vue-dyte

> A vue component for Dyte client

[📖 **Release Notes**](./CHANGELOG.md)

:warning: v2.x.x is for Vue 2. Vue 3 support will be on v3.x.x

## Installaction

### With npm or yarn

```bash
npm i -S vue-dyte

yarn add vue-dyte
```

## For Vue 2.0

### Typical Use

```html
<vue-dyte-client
  :client-id="clientId"
  :meeting-config="meetingConfig"
  @init="onInit"
  @error="onError"
  @connect="onConnect"
  @disconnect="onDisconnect"
/>
```

```js
import { VueDyteClient } from "vue-dyte";

export default {
  components: {
    VueDyteClient,
  },
  data() {
    return {
      clientId: '<your Dyte organization id>',
      meetingConfig: {
        roomName: '<room name>',
        authToken: '<the participant authToken>',
        // for more options, see here: https://docs.dyte.io/javascript/reference/meeting
      }
    }
  }
  methods: {
    onInit(meeting) {
      console.log("onInit", meeting);
    },
    onError(e) {
      console.error(e);
    },
    onConnect() {
      console.log("connected");
    },
    onDisconnect() {
      console.log("disconnected");
    },
}
```

### Events

All Meeting events are supported:
`connect`, `meetingJoined` , `localMediaConnected`, `disconnect`, `meetingEnded`, `participantJoin`, `participantLeave`, `chatMessage`, `roomMessage`, `message`, `activeSpeaker`, `recordingStarted`,
`recordingStopped`

[See here for reference](https://docs.dyte.io/javascript/events)
