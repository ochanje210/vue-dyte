<template>
  <div id="vue-dyte-client"></div>
</template>
<script>
import { loadHeadScript, loadHeadLink } from "./utils";

export default {
  name: "VueDyteClient",
  props: {
    clientId: {
      type: String,
      required: true,
    },
    meetingConfig: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initClient();
  },
  methods: {
    async initClient() {
      try {
        await Promise.all([
          loadHeadScript("https://cdn.dyte.in/lib/dyte.js"),
          loadHeadLink("https://cdn.dyte.in/lib/dyte.css"),
        ]);

        const client = new DyteClient({ clientId: this.clientId });

        const meeting = client.Meeting(this.meetingConfig);
        this.registerMeetingEvents(meeting);

        this.$emit("init", meeting);

        meeting.onError((e) => {
          this.$emit("error", e);
        });
        meeting.init("vue-dyte-client");
      } catch (e) {
        this.$emit("error", e);
      }
    },
    registerMeetingEvents(meeting) {
      const {
        connect,
        meetingJoined,
        localMediaConnected,
        disconnect,
        meetingEnded,
        participantJoin,
        participantLeave,
        chatMessage,
        roomMessage,
        message,
        activeSpeaker,
        recordingStarted,
        recordingStopped,
      } = meeting.Events;

      meeting.on(connect, () => {
        this.$emit("connect");
      });
      meeting.on(meetingJoined, () => {
        this.$emit("meetingJoined");
      });
      meeting.on(localMediaConnected, () => {
        this.$emit("localMediaConnected");
      });
      meeting.on(disconnect, () => {
        this.$emit("disconnect");
      });
      meeting.on(meetingEnded, () => {
        this.$emit("meetingEnded");
      });
      meeting.on(participantJoin, (participant) => {
        this.$emit("participantJoin", participant);
      });
      meeting.on(participantLeave, (participant) => {
        this.$emit("participantLeave", participant);
      });
      meeting.on(chatMessage, (msg) => {
        this.$emit("chatMessage", msg);
      });
      meeting.on(roomMessage, (msg) => {
        this.$emit("roomMessage", msg);
      });
      meeting.on(message, (msg) => {
        this.$emit("message", msg);
      });
      meeting.on(activeSpeaker, (participant) => {
        this.$emit("activeSpeaker", participant);
      });
      meeting.on(recordingStarted, () => {
        this.$emit("recordingStarted");
      });
      meeting.on(recordingStopped, () => {
        this.$emit("recordingStopped");
      });
    },
  },
};
</script>
<style>
@import "https://cdn.dyte.in/lib/dyte.css";
</style>
