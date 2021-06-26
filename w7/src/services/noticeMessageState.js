import emitter from '@/services/emitter';

export function httpNoticeMessage(response, title = '更新') {
  const { success: httpSuccess, message: httpMessage } = response.data;
  if (httpSuccess) {
    emitter.emit('notice-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    // 架一個modify處理回傳格式不ㄧ
    const message = typeof httpMessage === 'string' ? [httpMessage] : httpMessage;
    emitter.emit('notice-message', {
      style: 'danger',
      title,
      content: message.join('、'),
    });
  }
}

// 處理非預期錯誤
export function errorHandleMessage() {
  emitter.emit('notice-message', {
    style: 'danger',
    title: '系統發生異常，請稍後再試',
  });
}
