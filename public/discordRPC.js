const { Client } = require('discord-rpc');
const log = require('electron-log');

let client;
let activity;

exports.initRPC = () => {
  client = new Client({ transport: 'ipc' });

  activity = {
    details: 'Playing DaofsLauncher',
    state: 'Idle',
    startTimestamp: Math.floor(Date.now() / 1000),
    largeImageKey: 'icon',
    largeImageText: 'DaofsLauncher - A Launcher Dark of Sword',
    instance: false
  };

  client.on('ready', () => {
    log.log('Discord RPC Connected');
    client.setActivity(activity);
  });

  client.login({ clientId: '862705762231910400'}).catch(error => {
    if (error.message.includes('ENOENT')) {
      log.error('Unable to initialize Discord RPC, no client detected.');
    } else {
      log.error('Unable to initialize Discord RPC:', error);
    }
  });
};

exports.updateDetails = details => {
  activity.details = details;
  client.setActivity(activity);
};

exports.shutdownRPC = () => {
  if (!client) return;
  client.clearActivity();
  client.destroy();
  client = null;
  activity = null;
};
