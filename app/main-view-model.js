import { Observable, alert } from '@nativescript/core'

export function createViewModel() {
  const viewModel = new Observable()
  const Sqlite = require('nativescript-sqlite');

  viewModel.createSingleThreadDb = () => {
    new Sqlite('singleThreadDb', {
      multithreading: false,
    }).then((db) => {
      alert('single thread DB created');
    }).catch((err) => {
      console.log('single thread DB creation error', err);
      alert('single thread DB creation error');
    });
  }

  viewModel.createMultiThreadDb = () => {
    new Sqlite('multiThreadDb', {
      multithreading: true,
    }).then((db) => {
      alert('multi thread DB created');
    }).catch((err) => {
      console.log('multi thread DB creation error', err);
      alert('multi thread DB creation error');
    });
  }

  return viewModel
}

function createSingleThreadDb() {
  
}