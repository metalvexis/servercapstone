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
  return db.createTable('gradingsheets', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    status: { type: 'string', length: 255, notNull: true },
    decision: { type: 'text', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('gradingsheets', { ifExists: true });
};

exports._meta = {
  "version": 1
};
