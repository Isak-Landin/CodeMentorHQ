
            (function(global){
                var DragAndDropI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = 0;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ",
    "(inherited from Advanced Settings)": "(inherited from Advanced Settings)",
    ", draggable": ", draggable",
    ", draggable, grabbed": ", draggable, grabbed",
    ", dropzone": ", dropzone",
    "Actions": "Actions",
    "Add a zone": "Add a zone",
    "Add an item": "Add an item",
    "After All Attempts": "After All Attempts",
    "After All Attempts or Correct": "After All Attempts or Correct",
    "Always": "Always",
    "An error occurred. Unable to load drag and drop problem.": "An error occurred. Unable to load drag and drop problem.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.",
    "Answered": "Answered",
    "Assessment": "Assessment",
    "Attempted": "Attempted",
    "Attempted or Past Due": "Attempted or Past Due",
    "Background Image": "Background Image",
    "Background URL": "Background URL",
    "Background description": "Background description",
    "Basic Settings": "Basic Settings",
    "Cancel": "Cancel",
    "Change background": "Change background",
    "Close": "Close",
    "Closed": "Closed",
    "Continue": "Continue",
    "Correct": "Correct",
    "Correct or Past Due": "Correct or Past Due",
    "Correct! This one belongs to The Bottom Zone.": "Correct! This one belongs to The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Correct! This one belongs to The Middle Zone.",
    "Correct! This one belongs to The Top Zone.": "Correct! This one belongs to The Top Zone.",
    "Correctly placed in: {zone_title}": "Correctly placed in: {zone_title}",
    "Correctly placed {correct_count} item": [
      "Correctly placed {correct_count} items"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "DEPRECATED. Keeps maximum score achieved by student as a weighted value.",
    "Default": "Default",
    "Defines the number of points the problem is worth.": "Defines the number of points the problem is worth.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.",
    "Did not place {missing_count} required item": [
      "Did not place {missing_count} required items"
    ],
    "Display label names on the image": "Display label names on the image",
    "Display the heading \"Problem\" above the problem text?": "Display the heading \"Problem\" above the problem text?",
    "Display the title to the learner?": "Display the title to the learner?",
    "Display zone borders on the image": "Display zone borders on the image",
    "Display zone borders when dragging an item": "Display zone borders when dragging an item",
    "Drag and Drop": "Drag and Drop",
    "Drag and Drop Problem": "Drag and Drop Problem",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.",
    "Drag the items onto the image above.": "Drag the items onto the image above.",
    "Drop Targets": "Drop Targets",
    "Explanation": "Explanation",
    "Explanation Text": "Explanation Text",
    "Feedback": "Feedback",
    "Final attempt was used, highest score is {score}": "Final attempt was used, highest score is {score}",
    "Final feedback": "Final feedback",
    "Finished": "Finished",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "For example, 'http://example.com/background.png' or '/static/background.png'.",
    "Generate image and zones": "Generate image and zones",
    "Generate image automatically": "Generate image automatically",
    "Go to Beginning": "Go to Beginning",
    "Goes anywhere": "Goes anywhere",
    "Goes to the bottom": "Goes to the bottom",
    "Goes to the middle": "Goes to the middle",
    "Goes to the top": "Goes to the top",
    "Good work! You have completed this drag and drop problem.": "Good work! You have completed this drag and drop problem.",
    "Hints:": "Hints:",
    "I don't belong anywhere": "I don't belong anywhere",
    "Incorrect": "Incorrect",
    "Indicates whether a learner has completed the problem at least once": "Indicates whether a learner has completed the problem at least once",
    "Information about current positions of items that a learner has dropped on the target image.": "Information about current positions of items that a learner has dropped on the target image.",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.",
    "Introductory feedback": "Introductory feedback",
    "Item Bank": "Item Bank",
    "Item background color": "Item background color",
    "Item definitions": "Item definitions",
    "Item text color": "Item text color",
    "Items": "Items",
    "Items placed here: ": "Items placed here: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Keeps maximum score achieved by student as a raw value between 0 and 1.",
    "Keyboard Help": "Keyboard Help",
    "Loading drag and drop problem.": "Loading drag and drop problem.",
    "Max number of attempts reached": "Max number of attempts reached",
    "Maximum attempts": "Maximum attempts",
    "Maximum items per zone": "Maximum items per zone",
    "Maximum score available of the problem as a raw value between 0 and 1.": "Maximum score available of the problem as a raw value between 0 and 1.",
    "Misplaced {misplaced_count} item": [
      "Misplaced {misplaced_count} items"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "Misplaced {misplaced_count} items (misplaced items were returned to the item bank)"
    ],
    "Mode": "Mode",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.",
    "Never": "Never",
    "No items placed here": "No items placed here",
    "No, this item does not belong here. Try again.": "No, this item does not belong here. Try again.",
    "Number of attempts learner used": "Number of attempts learner used",
    "Number of columns": "Number of columns",
    "Number of columns and rows.": "Number of columns and rows.",
    "Number of rows": "Number of rows",
    "Of course it goes here! It goes anywhere!": "Of course it goes here! It goes anywhere!",
    "Past Due": "Past Due",
    "Placed in: {zone_title}": "Placed in: {zone_title}",
    "Please check over your submission.": "Please check over your submission.",
    "Please check the values you entered.": "Please check the values you entered.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Press CTRL+M to select a draggable item (effectively picking it up).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Press ESC if you want to cancel the drop operation (for example, to select a different item).",
    "Problem": "Problem",
    "Problem Weight": "Problem Weight",
    "Problem data": "Problem data",
    "Problem text": "Problem text",
    "Provide custom image": "Provide custom image",
    "Reset": "Reset",
    "Save": "Save",
    "Saving": "Saving",
    "Show \"Problem\" heading": "Show \"Problem\" heading",
    "Show Answer": "Show Answer",
    "Show answer": "Show answer",
    "Show title": "Show title",
    "Size of a single zone in pixels.": "Size of a single zone in pixels.",
    "Some of your answers were not correct.": "Some of your answers were not correct.",
    "Standard": "Standard",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.",
    "Submission deadline has passed.": "Submission deadline has passed.",
    "Submit": "Submit",
    "Submitting": "Submitting",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Text color to use for draggable items (example: 'white' or '#ffffff').",
    "The Bottom Zone": "The Bottom Zone",
    "The Middle Zone": "The Middle Zone",
    "The Top Zone": "The Top Zone",
    "The answer is unavailable": "The answer is unavailable",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "The background color of draggable items in the problem (example: 'blue' or '#0000ff').",
    "The description of the problem or instructions shown to the learner.": "The description of the problem or instructions shown to the learner.",
    "The title of the drag and drop problem. The title is displayed to learners.": "The title of the drag and drop problem. The title is displayed to learners.",
    "There was an error with your form.": "There was an error with your form.",
    "This is a screen reader-friendly problem.": "This is a screen reader-friendly problem.",
    "This setting limits the number of items that can be dropped into a single zone.": "This setting limits the number of items that can be dropped into a single zone.",
    "Title": "Title",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Unknown DnDv2 mode {mode} - course is misconfigured",
    "Unknown Zone": "Unknown Zone",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Use this zone to associate an item with the bottom layer of the triangle.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Use this zone to associate an item with the middle layer of the triangle.",
    "Use this zone to associate an item with the top layer of the triangle.": "Use this zone to associate an item with the top layer of the triangle.",
    "You can complete this problem using only your keyboard by following the guidance below:": "You can complete this problem using only your keyboard by following the guidance below:",
    "You cannot add any more items to this zone.": "You cannot add any more items to this zone.",
    "You have used {used} of {total} attempts.": "You have used {used} of {total} attempts.",
    "You silly, there are no zones for this one.": "You silly, there are no zones for this one.",
    "Your highest score is {score}": "Your highest score is {score}",
    "Zone Layout": "Zone Layout",
    "Zone Size": "Zone Size",
    "Zone borders": "Zone borders",
    "Zone definitions": "Zone definitions",
    "Zone height": "Zone height",
    "Zone labels": "Zone labels",
    "Zone width": "Zone width",
    "Zone {num}": [
      "Zone {num}"
    ],
    "Zones": "Zones",
    "do_attempt handler should only be called for assessment mode": "do_attempt handler should only be called for assessment mode",
    "droppable": "droppable",
    "show_answer handler should only be called for assessment mode": "show_answer handler should only be called for assessment mode",
    "{earned}/{possible} point (graded)": [
      "{earned}/{possible} points (graded)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned}/{possible} points (ungraded)"
    ],
    "{possible} point possible (graded)": [
      "{possible} points possible (graded)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} points possible (ungraded)"
    ]
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j N Y, G.i",
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H.%M.%S",
      "%d-%m-%Y %H.%M.%S.%f",
      "%d-%m-%Y %H.%M",
      "%d-%m-%y %H.%M.%S",
      "%d-%m-%y %H.%M.%S.%f",
      "%d-%m-%y %H.%M",
      "%m/%d/%y %H.%M.%S",
      "%m/%d/%y %H.%M.%S.%f",
      "%m/%d/%y %H.%M",
      "%m/%d/%Y %H.%M.%S",
      "%m/%d/%Y %H.%M.%S.%f",
      "%m/%d/%Y %H.%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j N Y",
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y",
      "%d/%m/%Y",
      "%d-%m-%y",
      "%d/%m/%y",
      "%d %b %Y",
      "%d %B %Y",
      "%m/%d/%y",
      "%m/%d/%Y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d-m-Y G.i",
    "SHORT_DATE_FORMAT": "d-m-Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "G.i",
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S",
      "%H.%M",
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};


                  }
                };
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));
        