migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t1szpg2w5qrpovd")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t1szpg2w5qrpovd")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
