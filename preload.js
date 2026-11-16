const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('bridge', {
  startPresage: () => ipcRenderer.invoke('presage:start'),
  stopPresage: () => ipcRenderer.invoke('presage:stop'),
  sendFrame: (buf, w, h, ts) => ipcRenderer.send('presage:frame', { buf, w, h, ts }),
  env: () => ipcRenderer.invoke('env'),
  onMetrics: (cb) => ipcRenderer.on('metrics', (_e, m) => cb(m))
});
