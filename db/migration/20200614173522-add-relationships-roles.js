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

var relations = [
  {
    tableName: 'enrollees',
    referencedTableName: 'users',
    keyName: 'users_enrollees_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  },
  {
    tableName: 'coordinators',
    referencedTableName: 'users',
    keyName: 'users_coordinators_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  },
  {
    tableName: 'panelists',
    referencedTableName: 'users',
    keyName: 'users_panelists_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  },
  {
    tableName: 'proponents',
    referencedTableName: 'users',
    keyName: 'users_proponents_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  },
  {
    tableName: 'advisers',
    referencedTableName: 'users',
    keyName: 'users_advisers_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  },
  {
    tableName: 'deans',
    referencedTableName: 'users',
    keyName: 'users_deans_fk',
    fieldName: 'userid',
    fieldMapping: {
      userid: 'id'
    }
  }
];

exports.up = function(db) {
  var tasks = [];

  relations.forEach(rel => {
    tasks.push(
      db.addForeignKey(rel.tableName, rel.referencedTableName, rel.keyName, rel.fieldMapping,{
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      })
    )
  });

  return Promise.all(tasks);
};

exports.down = function(db) {
  var tasks = [];

  relations.forEach(rel => {
    tasks.push(
      db.removeColumn(rel.tableName, rel.fieldName)
    );
  });

  return Promise.all(tasks);
};

exports._meta = {
  "version": 1
};
