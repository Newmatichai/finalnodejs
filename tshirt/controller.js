const { getAll, remove, get, save } = require('./model');
const renderForm = require('./form');

async function listAction(request, response) {
  const tshirts = await getAll();
  const pugPath = `${__dirname}/views/list`;
  response.render(pugPath,{tshirts});
}

async function removeAction(request, response) {
  const id = parseInt(request.params.id, 10);
  await remove(id);
  response.redirect(request.baseUrl);
}

async function formAction(request, response) {
  let tshirt = { id: '', size: '', color: '', price: '', productstock: '' };

  if (request.params.id) {
    tshirt = await get(parseInt(request.params.id, 10));
  }

  const body = renderForm(tshirt);
  response.send(body);
}

async function saveAction(request, response) {
  const tshirt = {
    id: request.body.id,
    size: request.body.size,
    color: request.body.color,
    price: request.body.price,
    productstock: request.body.productstock,
  };

  await save(tshirt);
  response.redirect(request.baseUrl);
}

module.exports = {listAction, removeAction, formAction, saveAction}