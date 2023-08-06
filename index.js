/*
 * Name: Muhammad Rahman
 * Date: 7/10/23
 * Ta: Allison Ho
 *
 * This is the JS to implement the UI for my todolist. It adds and removes items
 * to the todo list based on the given user input.
 */

"use strict";

(function() {
  window.addEventListener("load", init);

  /** initialize the program by setting up event listeners*/
  function init() {
    let button = id("add-button");
    button.addEventListener("click", addList);

    let remove = id('remove-button');
    remove.addEventListener('click', removeList);

    let clear = qs('section > button');
    clear.addEventListener('click', clearAll);

    let text = qs('header');
    text.addEventListener('click', hideText);
  }

  /** adds specific item to the todo list given the input is not empty*/
  function addList() {
    let input = id('add');
    let addItem = input.value;
    if (addItem !== '') {
      // append to the list
      let list = id('todos');
      let newList = document.createElement("li");
      newList.textContent = addItem;
      list.appendChild(newList);
      newList.classList.add("listStyle");
      updateItemCount();
    }
    input.value = '';
  }

  /** updates the counter of the total number of items in the todo list */
  function updateItemCount() {
    let item = qs('#item-count');
    let list = id('todos');
    let itemCount = list.children.length;
    item.textContent = parseFloat(itemCount);
    if (itemCount === 0) {
      item.textContent = 0;
    }
  }

  /** remove specific item from todo list*/
  function removeList() {
    let removeInput = id('remove');
    let remove = removeInput.value;
    let list = id('todos');
    for (let i = 0; i < list.children.length; i++) {
      let child = list.children[i];
      if (child.textContent === remove) {
        list.removeChild(child);
        child.classList.remove("listStyle");
        removeInput.value = '';
        updateItemCount();
      }
    }
  }

  /** clears all items from todo list*/
  function clearAll() {
    let list = id('todos');
    list.textContent = '';
    updateItemCount();
    let clear = qs('section > button');
    clear.classList.toggle("toggle");
  }

  /** hides all text in header*/
  function hideText() {
    let text = qs('header');
    text.classList.add('hide');
  }

  /**
   * Finds the element with the speciifed ID attribute
   *
   * @param {string} id - element Id
   * @returns {HTMLElement | null} DOM object associated with id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Finds first element with specifed CSS selector
   * @param {string} selector - CSS selector
   * @returns {HTMLElement | null} first DOM object associated with CSS selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();