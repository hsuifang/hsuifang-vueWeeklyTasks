<template>
  <!-- show -->
  <div class="position-fixed top-0 end-0" style="z-index: 1000">
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(msg, idx) in messages"
      :key="idx"
    >
      <div class="toast-header">
        <span class="bg-primary p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button type="button" class="btn-close" aria-label="Close" @click="clearMsg(idx)"></button>
      </div>
      <div class="toast-body" v-if="msg.content">
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [],
      toast: '',
    };
  },
  methods: {
    showMsg() {
      setTimeout(() => {
        this.messages.shift();
      }, 6000);
    },
    clearMsg(idx) {
      this.messages.splice(idx, 1);
    },
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('notice-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
      this.showMsg();
    });
  },
};
</script>
