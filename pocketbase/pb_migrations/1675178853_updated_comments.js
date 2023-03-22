migrate(
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('xxng20jw1tsygi3');

    // add
    collection.schema.addField(
      new SchemaField({
        system: false,
        id: 'fppenszs',
        name: 'uid',
        type: 'relation',
        required: false,
        unique: false,
        options: {
          maxSelect: 1,
          collectionId: '_pb_users_auth_',
          cascadeDelete: false,
        },
      })
    );

    return dao.saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('xxng20jw1tsygi3');

    // remove
    collection.schema.removeField('fppenszs');

    return dao.saveCollection(collection);
  }
);
