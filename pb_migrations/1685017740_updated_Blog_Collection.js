migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4j4f1a7tz6uqkcv")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4j4f1a7tz6uqkcv")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
