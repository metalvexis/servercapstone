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
  return db.createTable('milestonechecklists', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: { type: 'string', length: 255, notNull: true },
    description: { type: 'string', length: 255, notNull: true },
    category: { type: 'string', length: 255, notNull: false },
    sequence: { type: 'integer', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('milestonechecklists', { ifExists: true });
};

exports._meta = {
  "version": 1
};
