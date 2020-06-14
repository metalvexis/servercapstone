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
  return db.createTable('coordinators', {
    // Add relationships later
    // userId: {
    //   type: 'int',
    //   notNull: true,
    //   primaryKey: true,
    //   foreignKey: {
    //     name: 'coordinators_userId_fk',
    //     table: 'users',
    //     rules: {
    //       onDelete: 'CASCADE',
    //       onUpdate: 'RESTRICT'
    //     },
    //     mapping: 'id'
    //   }
    // },
    // researchSectionId: {
    //   type: 'int',
    //   notNull: true,
    //   primaryKey: true,
    //   foreignKey: {
    //     name: 'coordinators_researchSectionId_fk',
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
  return db.dropTable('coordinators', { ifExists: true });
};

exports._meta = {
  "version": 1
};
