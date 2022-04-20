const {Router} = require('express');
const router = Router();

const currency = require('../models/currency.js');

router.get('/', async(req, res) => {
  const currency_one = await currency.find({}).lean();
  // console.log(book);
  res.render('index', {
    title_page: 'booklib',
    currency_one
  })
});

router.post('/edit', async(req, res) => {
  const cur = await currency.findById(req.body.id);
  cur.currency_to_grn = req.body.currency_to_grn;
  cur.currency_to_grn_sell = req.body.currency_to_grn_sell;
  cur.NBU = req.body.NBU;
  cur.black_market_buy = req.body.black_market_buy;
  cur.black_market_sell = req.body.black_market_sell;
  await cur.save();
  res.redirect('/');
});

router.post('/delete', async(req, res) => {
  await currency.deleteOne({id: req.body.id_delete});
  res.redirect('/');
});

router.post('/add_cur', async(req, res) => {
  const cur = new currency({
    title: req.body.add_title,
    picture: req.body.add_img,
    currency_to_grn: req.body.add_currency_buy,
    currency_to_grn_sell: req.body.add_currency_sell,
    black_market_buy: req.body.add_dark_buy,
    black_market_sell: req.body.add_dark_sell,
    NBU: req.body.add_NBU,
  })
  await cur.save();
  res.redirect('/');
});

//експортуємо наш файл
module.exports = router;
