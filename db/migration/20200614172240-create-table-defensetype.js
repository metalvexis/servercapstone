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
  return db.createTable('defensetypes', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    category: { type: 'string', length: 255, notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('defensetypes', { ifExists: true });
};

exports._meta = {
  "version": 1
};
