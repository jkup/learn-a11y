var container                = document.querySelector('#color-picker-container')
var toggleButtonSelector     = document.querySelector('.MenuToggle');
var colorPickerSelector      = document.querySelector('.ColorPicker');
var colorPickerItemSelector  = document.querySelector('.ColorPicker-item');
var colorPickerColorSelector = document.querySelector('.ColorPicker-color');

// Document Events
document.addEventListener('keydown', onEsc);
document.addEventListener('mousedown', closeDropdown);
document.addEventListener('uiUpdateColor', changeColor);

// Specific Events
container.addEventListener('keydown', moveSelection);
toggleButtonSelector.addEventListener('click', showDropdown);
colorPickerSelector.addEventListener('keydown', selectColor);
colorPickerColorSelector.addEventListener('click', selectColor);

// Global vars we'll need
var activeElement, dropdownOpen;

function showDropdown(e) {
  this.activeEl = document.activeElement;
  this.select('colorPickerSelector').removeClass('u-hidden');
  this.select('colorPickerSelector').focus();
  this.dropdownOpen = true;
};

function closeDropdown(e) {
  var target = e.target;
  var $target = $(target);
  var $toggleButton = this.select('toggleButtonSelector');
  var $colorPicker = this.select('colorPickerSelector');

  if (!this.dropdownOpen) {
    return;
  }

  if ($.contains($toggleButton[0], target) || $target.is($toggleButton)) {
    return;
  }

  if ($.contains($colorPicker[0], target) || $target.is($colorPicker)) {
    return;
  }

  this.select('colorPickerSelector').addClass('u-hidden');
  this.dropdownOpen = false;
};

function onEsc(e) {
  if (!this.dropdownOpen) {
    return;
  }

  if (e.keyCode != 27) {
    return;
  }

  this.select('colorPickerSelector').addClass('u-hidden');
  this.dropdownOpen = false;
  this.activeEl.focus();
}

function changeColor(e, data) {
  this.select('toggleButtonSelector').css('background-color', data.color);
};

function selectColor(e, data) {
  var enterOrSpace = {
    13: true,
    32: true
  }[e.keyCode];

  if (!enterOrSpace) {
    return;
  }

  this.select('colorPickerSelector').find('.Icon--check').removeClass('Icon--check');
  $(data.el).find('.Icon').addClass('Icon--check');
  this.trigger(document, 'uiUpdateColor', { color: $(data.el).data('color') })
};

function moveSelection(e) {
  var target = e.target;
  var keyCode = e.keyCode;

  if (!this.dropdownOpen) {
    return;
  }

  var direction = {
    37: 'prev', // Left arrow
    38: 'prev', // Up arrow
    39: 'next', // Right arrow
    40: 'next' // Down arrow
  }[e.keyCode];

  if (!direction) {
    return;
  }

  var $menuitems = this.select('colorPickerItemSelector');
  var $selected = $(document.activeElement);
  var $next;
  var index;

  if ($selected.length) {
    index = $menuitems.index($selected);
    index = (direction == 'next') ? index + 1 : index - 1;
    $next = $menuitems.eq(index);
  }

  if (!$next || $next && !$next.length) {
    $next = (direction == 'next') ? $menuitems.first() : $menuitems.last();
  }

  if ($next.length) {
    $next[0].focus();

    // Prevent scrolling of the window when the user is navigating the
    // menuitems via the arrow keys.
    e.preventDefault();
  }
