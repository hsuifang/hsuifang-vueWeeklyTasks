import emitter from '@/services/emitter';

export default function (isLoading) {
  if (isLoading) {
    emitter.emit('v-loading', { isLoading: true });
  } else {
    emitter.emit('v-loading', { isLoading: false });
  }
}
