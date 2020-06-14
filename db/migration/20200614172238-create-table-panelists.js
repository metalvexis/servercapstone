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
  return db.createTable('panelists', {
    // Add relationships later
    // userId: {
    //   type: 'int',
    //   notNull: true,
    //   primaryKey: true,
    //   foreignKey: {
    //     name: 'panelists_userId_fk',
    //     table: 'users',
    //     rules: {
    //       onDelete: 'CASCADE',
    //       onUpdate: 'RESTRICT'
    //     },
    //     mapping: 'id'
    //   }
    // },
    // researchProjectId: {
    //   type: 'int',
    //   notNull: true,
    //   primaryKey: true,
    //   foreignKey: {
    //     name: 'panelists_researchProjectId_fk',
    //     table: 'users',
    //     rules: {
    //       onDelete: 'CASCADE',
    //       onUpdate: 'RESTRICT'
    //     },
    //     mapping: 'id'
    //   }
    // },
    dateAssigned: { type: 'timestamp', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable('panelists', { ifExists: true });
};

exports._meta = {
  "version": 1
};
