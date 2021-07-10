import * as localForage from 'localforage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

localForage.config({
  driver: localForage.INDEXEDDB,
  name: 'daofslauncher',
  version: 1.0,
  storeName: 'daofslauncher_persist'
});

export default {
  key: 'root',
  storage: localForage,
  whitelist: ['settings', 'app'],
  stateReconciler: autoMergeLevel2
};
