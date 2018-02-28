const Web3 = require('web3');
const web3 = new Web3();

import store from './store'

export const etherscanNetworks = {
  1: 'www',
  42: 'kovan',
};

export const init = (networkId) => {
  if (networkId === 1) web3.setProvider(new web3.providers.HttpProvider('https://mainnet.decenter.com'));
  else if (networkId === 3) web3.setProvider(new web3.providers.HttpProvider('https://ropsten.decenter.com'));
  else if (networkId === 42) web3.setProvider(new web3.providers.HttpProvider('https://kovan.decenter.com'));
  else console.error('Invalid network ID');
};

export const getEvents = (contract, eventName) => new Promise((resolve, reject) => {
  web3.eth.contract(contract.abi).at(contract.address)[eventName]({}, {fromBlock: 0, toBlock: "latest"})
    .get((error, events) => {
      if (error) reject(error);
      else resolve(events);
    });
  });

export const parseEvent = (event)  =>
    new Promise((resolve) => {
      web3.eth.getBlock(event.blockNumber, (err, block) => {
        const time = new Date(block.timestamp * 1000);
        resolve({
          ...event,
          time,
        });
      });
    });

export default {
  init,
  getEvents,
  parseEvent,
  etherscanNetworks,
}
