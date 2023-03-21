migrate(
  (db) => {
    const collection = new Collection({
      id: 'xxng20jw1tsygi3',
      created: '2023-01-25 13:10:41.049Z',
      updated: '2023-01-25 13:10:41.049Z',
      name: 'comments',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'aofvcez8',
          name: 'comment_body',
          type: 'text',
          required: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    });

    return Dao(db).saveCollection(collection);
  },
  (db) => {
    const dao = new Dao(db);
    const collection = dao.findCollectionByNameOrId('xxng20jw1tsygi3');

    return dao.deleteCollection(collection);
  }
);
