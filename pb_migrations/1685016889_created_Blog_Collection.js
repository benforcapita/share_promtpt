migrate((db) => {
  const collection = new Collection({
    "id": "4j4f1a7tz6uqkcv",
    "created": "2023-05-25 12:14:49.200Z",
    "updated": "2023-05-25 12:14:49.200Z",
    "name": "Blog_Collection",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "pz8tzamp",
        "name": "sub_Title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pbq6e3w3",
        "name": "Content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "vcsbrupx",
        "name": "Current_Date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "nzqo3g2t",
        "name": "Publish",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4j4f1a7tz6uqkcv");

  return dao.deleteCollection(collection);
})
