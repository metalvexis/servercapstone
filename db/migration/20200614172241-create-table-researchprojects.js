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
  return db.createTable('researchprojects', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: { type: 'text', notNull: true },
    abstract: { type: 'text', notNull: true },
    status: { type: 'string', length: 255, notNull: true },
    dateCreated: { type: 'timestamp', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('researchprojects', { ifExists: true });
};

exports._meta = {
  "version": 1
};
