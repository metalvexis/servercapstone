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
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    fNname: { type: 'string', length: 255, notNull: true },
    lNname: { type: 'string', length: 255, notNull: true },
    mNname: { type: 'string', length: 255, notNull: false },
    gender:  { type: 'char', notNull: true },
    email: { type: 'string', length: 255, notNull: true },
    contact: { type: 'string', length: 255, notNull: true },
    bday: { type: 'date', notNull: true },
    dept: { type: 'string', length: 255, notNull: true },
    password: { type: 'string', length: 255, notNull: true },
    status: { type: 'string', length: 255, notNull: true },
    address: { type: 'string', length: 255, notNull: true },
    educBg: { type: 'string', length: 255, notNull: true },
    personnelNum: { type: 'string', length: 255, notNull: true },
    dateCreated: { type: 'timestamp', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('users', { ifExists: true });
};

exports._meta = {
  "version": 1
};
