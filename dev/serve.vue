<template>
  <div id="app">
    <vue-dyte-client
      :client-id="''"
      :meetingConfig="{
        roomName: '',
        authToken: '',
      }"
      :uiConfig="{
        header: false,
      }"
      @init="onInit"
      @error="onError"
      @connect="onConnect"
      @disconnect="onDisconnect"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { VueDyteClient } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueDyteClient,
  },
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
  },
});
</script>
