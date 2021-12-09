<template>
  <div id="app">
    <vue-dyte-client
      :client-id="''"
      :meetingConfig="{
        roomName: '',
        authToken: '',
      }"
      @init="onInit"
      @error="onError"
      @connect="onConnect"
      @disconnect="onDisconnect"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Meeting, VueDyteClient } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  components: {
    VueDyteClient,
  },
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
</script>
