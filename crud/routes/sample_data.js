var express = require("express");

var router = express.Router();

var database = require("../database");

router.get("/", function (request, response, next) {
  var query = "SELECT * FROM sample_data ORDER BY id DESC";

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.render("sample_data", {
        title: "Node.js MySQL CRUD Application",
        action: "list",
        sampleData: data,
        message: request.flash('success')
      });
    }
  });
});

router.get("/add", function (request, response, next) {
  response.render("sample_data", {
    title: "Insert Data into MySQL",
    action: "add",
  });
});

router.post("/add_sample_data", function (request, response, next) {
  var first_name = request.body.first_name;

  var last_name = request.body.last_name;

  var age = request.body.age;

  var gender = request.body.gender;

  var query = `
	INSERT INTO sample_data 
	(first_name, last_name, age, gender) 
	VALUES ("${first_name}", "${last_name}", "${age}", "${gender}")
	`;

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      request.flash('success', 'Sample Data Inserted');
      response.redirect("/sample_data");
    }
  });
});

router.get("/edit/:id", function (request, response, next) {
  const id = request.params.id;

  const query = `SELECT * FROM sample_data WHERE id = ${id}`;

  database.query(query, function (error, data) {
    if (error) throw error;

    const sample_data = data[0];

    response.render("sample_data", {
      title: "Edit Data into MyQL",
      action: "edit",
      sample_data: sample_data,
    });
  });
});

router.post("/edit_sample_data/:id", function (request, response, next) {
  const { first_name, last_name, age, gender } = request.body;
  const id = request.params.id;

  const query = `
    UPDATE sample_data SET
      first_name = '${first_name}',
      last_name = '${last_name}',
      age = ${age},
      gender = '${gender}' 
    WHERE
      id = ${id};
  `;

  database.query(query, function (error, data) {
    if (error) throw error;

    request.flash('success', 'Sample Data Updated');
    response.redirect("/sample_data");
  });
});

router.get("/delete/:id", function (request, response, next) {
  const id = request.params.id;

  const query = `
    DELETE FROM sample_data WHERE id = ${id};
  `;
  database.query(query, function (error, data) {
    if (error) throw error;

    request.flash('success', 'Sample Data Deleted');
    response.redirect("/sample_data");
  });
});

module.exports = router;
