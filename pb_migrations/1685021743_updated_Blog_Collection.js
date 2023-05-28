migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4j4f1a7tz6uqkcv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uaptogyg",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbq6e3w3",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4j4f1a7tz6uqkcv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uaptogyg",
    "name": "Title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pbq6e3w3",
    "name": "Content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
