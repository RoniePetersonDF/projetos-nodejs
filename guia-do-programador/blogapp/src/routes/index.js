const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/admin', (req, res) => {
  res.render('admin');
});

router.get('/admin/categories', (req, res) => {
  res.render('admin/categories');
});
router.get('/admin/categories/add', (req, res) => {
  res.render('admin/categories/new')
});

module.exports = router;