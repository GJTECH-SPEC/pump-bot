const chalk = require('chalk');
const debug = require('debug')('pump');
const {round} = require('../../helpers');

async function stopOrder(binance, {pair, quantity, stopPrice}) {
  debug('STOP-LOSS', pair, quantity, stopPrice);


  const response = await binance.sell(pair, quantity, stopPrice, {
    stopPrice,
    type: 'STOP_LOSS_LIMIT',
  });

  const {status, orderId} = response;
  console.log(Date.now(), chalk.bgYellow.white(`> STOP-LOSS ${status} Id ${orderId} :: Quantity ${quantity}`));
  return orderId;
}

module.exports = stopOrder;
