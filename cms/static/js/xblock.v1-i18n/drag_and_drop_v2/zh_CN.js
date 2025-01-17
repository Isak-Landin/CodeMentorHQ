
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
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\n                            \u8bf7\u4e3a\u975e\u53ef\u89c6\u7528\u6237\u63d0\u4f9b\u56fe\u50cf\u63cf\u8ff0\u3002\n                            \u8be5\u63cf\u8ff0\u5185\u5bb9\u5e94\u63d0\u4f9b\u5145\u8db3\u7684\u4fe1\u606f\u4ee5\u5141\u8bb8\u4efb\u4f55\u4eba\n                            \u5373\u4f7f\u4e0d\u770b\u56fe\u50cf\u4e5f\u80fd\u89e3\u51b3\u95ee\u9898\u3002\n                        ",
    "(inherited from Advanced Settings)": "\uff08\u7ee7\u627f\u81ea\u9ad8\u7ea7\u8bbe\u7f6e\uff09",
    ", draggable": ", \u53ef\u62d6\u653e",
    ", draggable, grabbed": ", \u53ef\u62d6\u653e, \u5df2\u6293\u8d77",
    ", dropzone": "\uff0c\u6295\u653e\u533a",
    "Actions": "\u64cd\u4f5c",
    "Add a zone": "\u6dfb\u52a0\u4e00\u4e2a\u533a\u57df",
    "Add an item": "\u6dfb\u52a0\u4e00\u4e2a\u9879\u76ee",
    "After All Attempts": "\u7ecf\u8fc7\u6240\u6709\u5c1d\u8bd5",
    "After All Attempts or Correct": "\u5728\u6240\u6709\u5c1d\u8bd5\u4e4b\u540e\u6216\u6b63\u786e",
    "Always": "\u603b\u662f",
    "An error occurred. Unable to load drag and drop problem.": "\u53d1\u751f\u4e86\u9519\u8bef\u3002\u65e0\u6cd5\u52a0\u8f7d\u62d6\u653e\u95ee\u9898\u3002",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "\u4e00\u4e2a\u7b49\u8170\u4e09\u89d2\u5f62\u6709\u4e09\u4e2a\u9ad8\u5ea6\u76f8\u4f3c\u7684\u9636\u5c42\u3002\u7b49\u8170\u4e09\u89d2\u5f62\u662f\u5782\u76f4\u7684\uff0c\u56e0\u6b64\u6700\u5bbd\u7684\u4e00\u5c42\u5728\u5e95\u90e8\uff0c\u800c\u6700\u7a84\u7684\u4e00\u5c42\u5728\u9876\u90e8\u3002",
    "Answered": "\u5df2\u56de\u7b54",
    "Assessment": "\u8bc4\u5206\u6a21\u5f0f",
    "Attempted": "\u5df2\u5c1d\u8bd5",
    "Attempted or Past Due": "\u5df2\u5c1d\u8bd5\u6216\u903e\u671f",
    "Background Image": "\u80cc\u666f\u56fe",
    "Background URL": "\u80cc\u666f URL",
    "Background description": "\u80cc\u666f\u63cf\u8ff0",
    "Basic Settings": "\u57fa\u672c\u8bbe\u7f6e",
    "Cancel": "\u53d6\u6d88",
    "Change background": "\u66f4\u6539\u80cc\u666f",
    "Close": "\u5173\u95ed",
    "Closed": "\u5df2\u5173\u95ed",
    "Continue": "\u7ee7\u7eed",
    "Correct": "\u6b63\u786e",
    "Correct or Past Due": "\u6b63\u786e\u6216\u8d85\u8fc7\u622a\u6b62\u65e5\u671f",
    "Correct! This one belongs to The Bottom Zone.": "\u6b63\u786e\u7684\uff01\u8fd9\u4e2a\u5c5e\u4e8e\u5e95\u90e8\u533a\u57df\u3002",
    "Correct! This one belongs to The Middle Zone.": "\u6b63\u786e\u7684\uff01\u8fd9\u4e2a\u5c5e\u4e8e\u4e2d\u533a\u3002",
    "Correct! This one belongs to The Top Zone.": "\u6b63\u786e\u7684\uff01\u8fd9\u4e2a\u5c5e\u4e8e\u9876\u7ea7\u533a\u57df\u3002",
    "Correctly placed in: {zone_title}": "\u6b63\u786e\u7684\u653e\u5728: {zone_title}",
    "Correctly placed {correct_count} item": [
      "\u6b63\u786e\u653e\u7f6e{correct_count}\u9879"
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "\u5df2\u5f03\u7528\u3002\u5c06\u5b66\u751f\u83b7\u5f97\u7684\u6700\u9ad8\u5206\u6570\u4fdd\u7559\u4e3a\u52a0\u6743\u503c\u3002",
    "Default": "\u9ed8\u8ba4",
    "Defines the number of points the problem is worth.": "\u8bbe\u7f6e\u6b64\u9898\u76ee\u7684\u603b\u5206\u3002",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "\u8bbe\u7f6e\u5b66\u5458\u53ef\u5bf9\u6b64\u9898\u76ee\u4f5c\u7b54\u7684\u673a\u4f1a\u6b21\u6570\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u6b64\u503c\uff0c\u90a3\u4e48\u5b66\u5458\u53ef\u65e0\u6570\u6b21\u4f5c\u7b54\u3002",
    "Defines when to show the answer to the problem. A default value can be set in Advanced Settings. To revert setting a custom value, choose the 'Default' option.": "\u5b9a\u4e49\u4f55\u65f6\u663e\u793a\u95ee\u9898\u7684\u7b54\u6848\u3002\u53ef\u4ee5\u5728\u9ad8\u7ea7\u8bbe\u7f6e\u4e2d\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u3002\u8981\u6062\u590d\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u503c\uff0c\u8bf7\u9009\u62e9\u201c\u9ed8\u8ba4\u201d\u9009\u9879\u3002",
    "Did not place {missing_count} required item": [
      "\u672a\u653e\u7f6e{missing_count}\u6240\u9700\u7269\u54c1"
    ],
    "Display label names on the image": "\u5728\u56fe\u50cf\u4e0a\u663e\u793a\u6807\u7b7e\u540d\u79f0",
    "Display the heading \"Problem\" above the problem text?": "\u662f\u5426\u5728\u95ee\u9898\u6587\u672c\u4e0a\u65b9\u663e\u793a\u6807\u9898\u201c\u95ee\u9898\u201d\uff1f",
    "Display the title to the learner?": "\u662f\u5426\u5411\u5b66\u5458\u663e\u793a\u6807\u9898\uff1f",
    "Display zone borders on the image": "\u5728\u56fe\u50cf\u4e0a\u663e\u793a\u533a\u57df\u8fb9\u6846",
    "Display zone borders when dragging an item": "\u62d6\u52a8\u9879\u76ee\u65f6\u663e\u793a\u533a\u57df\u8fb9\u6846",
    "Drag and Drop": "\u62d6\u653e",
    "Drag and Drop Problem": "\u62d6\u653e\u578b\u9898\u76ee",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "\u62d6\u653e\u578b\u9898\u76ee\u5305\u542b\u53ef\u62d6\u62fd\u9879\u548c\u6295\u653e\u533a\u57df\u3002\u7528\u6237\u53ef\u4f7f\u7528\u952e\u76d8\u9009\u62e9\u4e00\u4e2a\u62d6\u62fd\u9879\uff0c\u7136\u540e\u653e\u7f6e\u5728\u9002\u5f53\u7684\u533a\u5185\u3002",
    "Drag the items onto the image above.": "\u628a\u8fd9\u4e00\u5bf9\u62d6\u5230\u4e0a\u9762\u7684\u56fe\u5f62\u91cc\u3002",
    "Drop Targets": "\u653e\u4e0b\u76ee\u6807",
    "Explanation": "\u89e3\u91ca",
    "Explanation Text": "\u8bf4\u660e\u6587\u5b57",
    "Feedback": "\u53cd\u9988",
    "Final attempt was used, highest score is {score}": "\u6700\u540e\u4e00\u6b21\u5c1d\u8bd5\u5df2\u7528\u5b8c\uff0c\u6700\u9ad8\u5206\u4e3a {score}",
    "Final feedback": "\u6700\u7ec8\u53cd\u9988",
    "Finished": "\u5df2\u5b8c\u6210",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "\u4f8b\u5982\uff1a\u201chttp://example.com/background.png\u201d or \u201c/static/background.png\u201d\u3002",
    "Generate image and zones": "\u751f\u6210\u56fe\u50cf\u548c\u533a\u57df",
    "Generate image automatically": "\u81ea\u52a8\u751f\u6210\u56fe\u50cf",
    "Go to Beginning": "\u8fd4\u56de\u5f00\u59cb",
    "Goes anywhere": "\u54ea\u513f\u90fd\u53ef\u4ee5",
    "Goes to the bottom": "\u5e95\u5c42",
    "Goes to the middle": "\u4e2d\u5c42",
    "Goes to the top": "\u9876\u5c42",
    "Good work! You have completed this drag and drop problem.": "\u592a\u68d2\u4e86\uff01\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u8fd9\u4e2a\u62d6\u62fd\u95ee\u9898\u5566\u3002",
    "Hints:": "\u63d0\u793a\uff1a",
    "I don't belong anywhere": "\u6211\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u5730\u65b9",
    "Incorrect": "\u4e0d\u6b63\u786e",
    "Indicates whether a learner has completed the problem at least once": "\u6307\u793a\u5b66\u5458\u662f\u5426\u5df2\u7ecf\u81f3\u5c11\u5b8c\u6210\u4e86\u8be5\u4e00\u6b21",
    "Information about current positions of items that a learner has dropped on the target image.": "\u5173\u4e8e\u5b66\u5458\u5df2\u62d6\u653e\u5230\u76ee\u6807\u9879\u76ee\u7684\u90a3\u4e9b\u9879\u76ee\u5f53\u524d\u4f4d\u7f6e\u7684\u4fe1\u606f\u3002",
    "Information about zones, items, feedback, explanation and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "\u6709\u5173\u6b64\u95ee\u9898\u7684\u533a\u57df\u3001\u9879\u76ee\u3001\u53cd\u9988\u3001\u89e3\u91ca\u548c\u80cc\u666f\u56fe\u50cf\u7684\u4fe1\u606f\u3002\u6b64\u4fe1\u606f\u6e90\u81ea\u8bfe\u7a0b\u4f5c\u8005\u5728\u914d\u7f6e\u95ee\u9898\u65f6\u901a\u8fc7\u4ea4\u4e92\u5f0f\u7f16\u8f91\u5668\u63d0\u4f9b\u7684\u8f93\u5165\u3002",
    "Introductory feedback": "\u5f15\u8a00\u53cd\u9988",
    "Item Bank": "\u7b54\u9898\u9879\u5e93",
    "Item background color": "\u9879\u76ee\u80cc\u666f\u989c\u8272",
    "Item definitions": "\u9879\u76ee\u5b9a\u4e49",
    "Item text color": "\u9879\u76ee\u6587\u672c\u989c\u8272",
    "Items": "\u9879\u76ee",
    "Items placed here: ": "\u653e\u7f6e\u5728\u8fd9\u91cc\u7684\u7269\u54c1\uff1a ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "\u5c06\u5b66\u751f\u83b7\u5f97\u7684\u6700\u9ad8\u5206\u6570\u4fdd\u7559\u4e3a 0 \u5230 1 \u4e4b\u95f4\u7684\u539f\u59cb\u503c\u3002",
    "Keyboard Help": "\u952e\u76d8\u5e2e\u52a9",
    "Loading drag and drop problem.": "\u52a0\u8f7d\u62d6\u653e\u95ee\u9898\u3002",
    "Max number of attempts reached": "\u5df2\u7528\u5b8c\u6240\u6709\u7b54\u9898\u673a\u4f1a",
    "Maximum attempts": "\u603b\u7b54\u9898\u673a\u4f1a",
    "Maximum items per zone": "\u6bcf\u4e2a\u533a\u57df\u7684\u6700\u5927\u7269\u54c1\u6570",
    "Maximum score available of the problem as a raw value between 0 and 1.": "\u95ee\u9898\u7684\u6700\u5927\u53ef\u7528\u5206\u6570\u4e3a 0 \u5230 1 \u4e4b\u95f4\u7684\u539f\u59cb\u503c\u3002",
    "Misplaced {misplaced_count} item": [
      "\u653e\u9519\u4f4d\u7f6e\u7684{misplaced_count}\u4ef6\u7269\u54c1"
    ],
    "Misplaced {misplaced_count} item (misplaced item was returned to the item bank)": [
      "\u9519\u653e\u7684{misplaced_count}\u4ef6\u7269\u54c1\uff08\u9519\u653e\u7684\u7269\u54c1\u5df2\u9000\u56de\u7269\u54c1\u5e93\uff09"
    ],
    "Mode": "\u6a21\u5f0f",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "\u4f7f\u7528TAB\u548cSHIFT+TAB\u62d6\u62fd\u9879\u81f3\u9002\u5f53\u6295\u653e\u533a\uff0c\u7136\u540e\u518d\u6b21\u70b9\u51fbCTRL+M\u8fdb\u884c\u6295\u653e\u3002",
    "Never": "\u4ece\u4e0d",
    "No items placed here": "\u8fd9\u91cc\u6ca1\u6709\u653e\u7f6e\u4efb\u4f55\u7269\u54c1",
    "No, this item does not belong here. Try again.": "\u4e0d\u5bf9\uff0c\u8fd9\u4e00\u6761\u4e0d\u5c5e\u4e8e\u8fd9\u513f\u3002\u518d\u8bd5\u4e00\u6b21\u3002",
    "Number of attempts learner used": "\u5b66\u5458\u5df2\u4f5c\u7b54\u6b21\u6570",
    "Number of columns": "\u5217\u6570",
    "Number of columns and rows.": "\u5217\u6570\u548c\u884c\u6570\u3002",
    "Number of rows": "\u884c\u6570",
    "Of course it goes here! It goes anywhere!": "\u5f53\u7136\u8fd9\u513f\u5c31\u53ef\u4ee5\uff01\u54ea\u513f\u90fd\u53ef\u4ee5\uff01",
    "Past Due": "\u8d85\u8fc7\u622a\u6b62\u65e5\u671f",
    "Placed in: {zone_title}": "\u4f4d\u4e8e: {zone_title}",
    "Please check over your submission.": "\u8bf7\u6838\u5bf9\u60a8\u7684\u63d0\u4ea4\u4fe1\u606f\u3002",
    "Please check the values you entered.": "\u8bf7\u68c0\u67e5\u60a8\u8f93\u5165\u7684\u503c\u3002",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "\u70b9\u51fbCTRL+M\u6765\u9009\u62e9\u53ef\u62d6\u62fd\u9879\uff08\u64cd\u4f5c\u8f7b\u677e\u9ad8\u6548\uff09\u3002",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "\u5982\u9700\u53d6\u6d88\u6295\u653e\u64cd\u4f5c\uff0c\u8bf7\u70b9\u51fbESC\uff08\u4f8b\u5982\uff1a\u9700\u8981\u9009\u62e9\u53e6\u5916\u4e00\u9879\uff09\u3002",
    "Problem": "\u95ee\u9898",
    "Problem Weight": "\u9898\u76ee\u5206\u6570\u5360\u6bd4",
    "Problem data": "\u95ee\u9898\u6570\u636e",
    "Problem text": "\u95ee\u9898\u6587\u672c",
    "Provide custom image": "\u63d0\u4f9b\u81ea\u5b9a\u4e49\u56fe\u50cf",
    "Reset": "\u91cd\u8bbe",
    "Save": "\u4fdd\u5b58",
    "Saving": "\u6b63\u5728\u4fdd\u5b58",
    "Show \"Problem\" heading": "\u663e\u793a\u201c\u95ee\u9898\u201d\u6807\u9898",
    "Show Answer": "\u663e\u793a\u7b54\u6848",
    "Show answer": "\u663e\u793a\u7b54\u6848",
    "Show title": "\u663e\u793a\u6807\u9898",
    "Size of a single zone in pixels.": "\u5355\u4e2a\u533a\u57df\u7684\u5927\u5c0f\uff08\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\uff09\u3002",
    "Some of your answers were not correct.": "\u60a8\u7684\u67d0\u4e9b\u7b54\u6848\u4e0d\u6b63\u786e\u3002",
    "Standard": "\u6807\u51c6\u6a21\u5f0f",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "\u6807\u51c6\u6a21\u5f0f\uff1a\u53ea\u8981\u5b66\u5458\u4f5c\u7b54\u9898\u76ee\uff0c\u9a6c\u4e0a\u63d0\u4f9b\u53cd\u9988\u3002\u8bc4\u5206\u6a21\u5f0f\uff1a\u5b66\u5458\u5fc5\u987b\u5b8c\u6574\u7b54\u9898\u540e\uff0c\u624d\u4f1a\u63d0\u4f9b\u53cd\u9988\u3002",
    "Submission deadline has passed.": "\u63d0\u4ea4\u622a\u6b62\u65e5\u671f\u5df2\u8fc7\u3002",
    "Submit": "\u63d0\u4ea4",
    "Submitting": "\u63d0\u4ea4\u4e2d",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "\u70b9\u51fbTAB\u56de\u5230\u62d6\u62fd\u9879\u5217\u8868\uff0c\u5e76\u91cd\u590d\u6b64\u64cd\u4f5c\u76f4\u81f3\u5c06\u6240\u6709\u9879\u6295\u653e\u81f3\u76f8\u5e94\u533a\u57df\u3002",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "\u53ef\u62d6\u62fd\u9879\u7684\u6587\u5b57\u989c\u8272\uff08\u4f8b\u5982\uff1a'white' or '#ffffff'\uff09\u3002",
    "The Bottom Zone": "\u5e95\u90e8\u533a\u57df",
    "The Middle Zone": "\u4e2d\u90e8\u533a\u57df",
    "The Top Zone": "\u9876\u90e8\u533a\u57df",
    "The answer is unavailable": "\u7b54\u6848\u4e0d\u53ef\u7528",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "\u9898\u76ee\u4e2d\u53ef\u62d6\u62fd\u9879\u7684\u80cc\u666f\u989c\u8272(\u4f8b\u5982: 'blue' or '#0000ff')\u3002",
    "The description of the problem or instructions shown to the learner.": "\u5b66\u5458\u53ef\u89c1\u7684\u9898\u76ee\u63cf\u8ff0\u6216\u4f5c\u7b54\u6307\u5f15\u3002",
    "The title of the drag and drop problem. The title is displayed to learners.": "\u62d6\u653e\u95ee\u9898\u7684\u6807\u9898\u3002\u5411\u5b66\u5458\u663e\u793a\u6807\u9898\u3002",
    "There was an error with your form.": "\u60a8\u7684\u8868\u683c\u6709\u4e00\u4e2a\u9519\u8bef\u3002",
    "This is a screen reader-friendly problem.": "\u8fd9\u662f\u4e00\u4e2a\u5c4f\u5e55\u9605\u8bfb\u5668\u53cb\u597d\u7684\u95ee\u9898\u3002",
    "This setting limits the number of items that can be dropped into a single zone.": "\u6b64\u8bbe\u7f6e\u9650\u5236\u53ef\u4ee5\u653e\u5165\u5355\u4e2a\u533a\u57df\u7684\u9879\u76ee\u6570\u91cf\u3002",
    "Title": "\u6807\u9898",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "\u672a\u77e5DnDv2\u6a21\u5f0f{mode} - \u8bfe\u7a0b\u914d\u7f6e\u9519\u8bef",
    "Unknown Zone": "\u672a\u77e5\u5730\u5e26",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "\u4f7f\u7528TAB\u548cSHIFT+TAB\u5728\u53ef\u62d6\u62fd\u9879\u548c\u6295\u653e\u533a\u4e8c\u8005\u8f7b\u677e\u6765\u56de\u5207\u6362\u3002",
    "Use this zone to associate an item with the bottom layer of the triangle.": "\u7528\u8fd9\u4e2a\u533a\u57df\u53bb\u548c\u4e09\u89d2\u5f62\u7684\u5e95\u5c42\u8fde\u63a5\u6210\u4e00\u4e2a\u5bf9\u3002",
    "Use this zone to associate an item with the middle layer of the triangle.": "\u7528\u8fd9\u4e2a\u533a\u57df\u53bb\u548c\u4e09\u89d2\u5f62\u7684\u4e2d\u95f4\u5c42\u8fde\u63a5\u6210\u4e00\u4e2a\u5bf9\u3002",
    "Use this zone to associate an item with the top layer of the triangle.": "\u7528\u8fd9\u4e2a\u533a\u57df\u53bb\u548c\u4e09\u89d2\u5f62\u7684\u9876\u5c42\u8fde\u63a5\u6210\u4e00\u5bf9\u3002",
    "You can complete this problem using only your keyboard by following the guidance below:": "\u4f7f\u7528\u952e\u76d8\u5b8c\u6210\u6b64\u9898\u76ee\uff0c\u7b80\u5355\u6b65\u9aa4\u5982\u4e0b\uff1a",
    "You cannot add any more items to this zone.": "\u60a8\u65e0\u6cd5\u5411\u6b64\u533a\u57df\u6dfb\u52a0\u66f4\u591a\u9879\u76ee\u3002",
    "You have used {used} of {total} attempts.": "\u603b\u5171{total}\u6b21\u7b54\u9898\u673a\u4f1a\uff0c\u5df2\u4f7f\u7528{used}\u6b21\u3002",
    "You silly, there are no zones for this one.": "\u4f60\u8fd9\u4e2a\u5c0f\u667a\u969c\uff0c\u8fd9\u513f\u6ca1\u6709\u533a\u57df\u7559\u7ed9\u8fd9\u4e2a\u5566\u3002",
    "Your highest score is {score}": "\u60a8\u7684\u6700\u9ad8\u5206\u6570\u662f{score}",
    "Zone Layout": "\u533a\u57df\u5e03\u5c40",
    "Zone Size": "\u533a\u57df\u5927\u5c0f",
    "Zone borders": "\u533a\u57df\u8fb9\u6846",
    "Zone definitions": "\u7b54\u9898\u533a\u8bbe\u7f6e",
    "Zone height": "\u533a\u57df\u9ad8\u5ea6",
    "Zone labels": "\u533a\u57df\u6807\u7b7e",
    "Zone width": "\u533a\u57df\u5bbd\u5ea6",
    "Zone {num}": [
      "\u533a\u57df{num}"
    ],
    "Zones": "\u533a\u57df",
    "do_attempt handler should only be called for assessment mode": "do_attempt\u4e0d\u5e94\u8be5\u4ec5\u9002\u7528\u4e8e\u8bc4\u5206\u6a21\u5f0f",
    "droppable": "\u53ef\u4e22\u5f03\u7684",
    "show_answer handler should only be called for assessment mode": "show_answer\u4e0d\u5e94\u8be5\u4ec5\u9002\u7528\u4e8e\u8bc4\u5206\u6a21\u5f0f",
    "{earned}/{possible} point (graded)": [
      "{earned} / {possible}\u5206\uff08\u5df2\u8bc4\u5206\uff09"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned} / {possible}\u5206\uff08\u672a\u8bc4\u5206\uff09"
    ],
    "{possible} point possible (graded)": [
      "{possible}\u70b9\u53ef\u80fd\uff08\u5df2\u8bc4\u5206\uff09"
    ],
    "{possible} point possible (ungraded)": [
      "{possible}\u53ef\u80fd\u67090\u5206\uff08\u672a\u8bc4\u5206\uff09"
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
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M"
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
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
        