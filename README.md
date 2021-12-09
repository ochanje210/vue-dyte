# vue-dyte

> A vue component for Dyte client

[📖 **Release Notes**](./CHANGELOG.md)

:warning: v2.x.x is for Vue 2. Vue 3 is supported with v3.x.x

## For Vue 3

### Install

```bash
npm i -S vue-dyte

yarn add vue-dyte
```

### Use

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

```ts
// typescript example
import { defineComponent } from "vue";
import { Meeting, VueDyteClient } from "vue-dyte";

export default defineComponent({
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
    onInit(meeting: Meeting) {
      console.log("onInit", meeting);
    },
    onError(e: any) {
      console.error(e);
    },
    onConnect() {
      console.log("connected");
    },
    onDisconnect() {
      console.log("disconnected");
    },
  },
});
```

## For Vue 2

### Install

```bash
npm i -S vue-dyte@2.0.2

yarn add vue-dyte@2.0.2
```

### Use

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

## Events

All Meeting events are supported:
`connect`, `meetingJoined` , `localMediaConnected`, `disconnect`, `meetingEnded`, `participantJoin`, `participantLeave`, `chatMessage`, `roomMessage`, `message`, `activeSpeaker`, `recordingStarted`,
`recordingStopped`

[See here for reference](https://docs.dyte.io/javascript/events)
