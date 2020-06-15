'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('appointments', {
    concern: { type: 'string', length: 255, notNull: true },
    prerequisite: { type: 'string', length: 255, notNull: false },
    feedback: { type: 'string', length: 255, notNull: false },
    status: { type: 'string', length: 255, notNull: true },
    dateAssigned: { type: 'timestamp', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('appointments', { ifExists: true });
};

exports._meta = {
  "version": 1
};
