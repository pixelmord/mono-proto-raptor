migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t1szpg2w5qrpovd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hb26yuqx",
    "name": "uid",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t1szpg2w5qrpovd")

  // remove
  collection.schema.removeField("hb26yuqx")

  return dao.saveCollection(collection)
})
