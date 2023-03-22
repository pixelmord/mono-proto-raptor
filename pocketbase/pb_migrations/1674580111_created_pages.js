migrate(
  (db) => {
    const collection = new Collection({
      id: 't1szpg2w5qrpovd',
      created: '2023-01-24 17:08:31.662Z',
      updated: '2023-01-24 17:08:31.662Z',
      name: 'pages',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'atahgm0p',
          name: 'content',
          type: 'text',
          required: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: 'ejzfpm14',
          name: 'title',
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
    const collection = dao.findCollectionByNameOrId('t1szpg2w5qrpovd');

    return dao.deleteCollection(collection);
  }
);
