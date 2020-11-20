/* eslint-disable indent */
/* eslint-disable no-extra-semi */
/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch(err) {
    console.log(`Cannot add item: ${error.messsage}`);
  }
};

const findAndToggleChecked = function (id) {
    const currentItem = this.findById(id);
    currentItem.checked = !currentItem.checked;
};

const findAndUpdateName = function (id, newName) {
    try {
        item.validateName(newName);
        const currentItem = this.findById(id);
        currentItem.name = name;
    }
    catch(err) {
      console.log(`Cannot update name: ${error.messsage}`);
    }
};

const findAndDelete = function (id) {
    this.items = this.items.filter(currentItem => currentItem.id !==id);
};

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
