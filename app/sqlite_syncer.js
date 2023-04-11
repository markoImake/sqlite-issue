const { BehaviorSubject } = require('rxjs');
global.onsyncmsg = new BehaviorSubject({});
class SqliteSyncer {
  constructor() {
    if (SqliteSyncer._instance) {
      throw new Error('Use SqliteSyncer.getInstance() instead of new.');
    }
  }

  setup(db, options) {
    console.log('Syncer Setup');
    this.db = db;
  }

  handleSync(res, callback) {
    console.log("handleSync");
    if (typeof callback === 'function') {
      callback(true);
    }
  }

  startSync(options) {
    console.log("startSync");
  }

  stopSync() {
    console.log("stopSync");
  }

  /**
   * @returns {SqliteSyncer}
   */
  static getInstance() {
    if (!SqliteSyncer._instance) {
      SqliteSyncer._instance = new SqliteSyncer();
    }

    return SqliteSyncer._instance;
  }
}

module.exports = {
  setup: function (db, options) {
    SqliteSyncer.getInstance().setup(db, options);
  },
  handleSync: function (res, callback) {
    SqliteSyncer.getInstance().handleSync(res, callback);
  },
  startSync: function (options) {
    SqliteSyncer.getInstance().startSync(options);
  },
  stopSync: function () {
    SqliteSyncer.getInstance().stopSync();
  },
};
