import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: false,
    });
    // this.modal.on('hidden.bs.modal', this.doSomethingOnHidden);
  },
};
