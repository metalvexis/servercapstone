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
  return db.createTable('gradingcriteria', {
    rating: { type: 'decimal', notNull: false },
    percentage: { type: 'decimal', notNull: false },
    sequence: { type: 'int', notNull: false }
  });
};

exports.down = function(db) {
  return db.dropTable('gradingcriteria', { ifExists: true });
};

exports._meta = {
  "version": 1
};
