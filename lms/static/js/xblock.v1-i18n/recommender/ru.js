
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; \u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "A resource was clicked": "\u0420\u0435\u0441\u0443\u0440\u0441 \u0431\u044b\u043b \u043a\u043b\u0438\u043a\u043d\u0443\u0442",
    "Add new resource": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",
    "Add new resource &gt;&gt;": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 &gt;&gt;",
    "Add resource": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Back to resource list mode": "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u0440\u0435\u0436\u0438\u043c \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",
    "Check the icon to endorse this resource": "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441.",
    "Click to view resources for removal": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f",
    "Click to view resources in ordinary decreasing-vote order": "\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044f \u0433\u043e\u043b\u043e\u0441\u043e\u0432.",
    "Configuration setting": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",
    "Cut-and-paste the URL of the resource.": "\u0412\u044b\u0440\u0435\u0436\u044c\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 URL-\u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u0430.",
    "Delete this resource": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441",
    "Description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
    "Do you want to disable the UX functions which are under development?": "\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 UX, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "\u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0443\u044e \u044d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u044e, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0443\u0432\u0438\u0434\u044f\u0442 RecommenderXBlock?",
    "Download resources": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Downvote if the resource is not helpful": "\u041f\u043e\u043d\u0438\u0437\u044c\u0442\u0435 \u0433\u043e\u043b\u043e\u0441, \u0435\u0441\u043b\u0438 \u0440\u0435\u0441\u0443\u0440\u0441 \u0431\u0435\u0441\u043f\u043e\u043b\u0435\u0437\u0435\u043d",
    "Edit existing resource": "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441 \u0438 \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044f, \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0432\u0448\u0438\u0445\u0441\u044f \u0441 \u044d\u0442\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e.",
    "Edit this resource": "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441",
    "Endorse Resource": "\u041e\u0434\u043e\u0431\u0440\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Endorse resource": "\u041e\u0434\u043e\u0431\u0440\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Endorse resource without permission": "\u041e\u0434\u043e\u0431\u0440\u044f\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441 \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f",
    "Endorse this resource and give the reason why you do that.": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0435.",
    "Entering add resource mode": "\u0412\u0445\u043e\u0434 \u0432 \u0440\u0435\u0436\u0438\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Entering edit resource mode": "\u0412\u0445\u043e\u0434 \u0432 \u0440\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Entering flag resource mode": "\u0412\u0445\u043e\u0434 \u0432 \u0440\u0435\u0436\u0438\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0444\u043b\u0430\u0433\u0430",
    "Entering import resource mode": "\u0412\u0445\u043e\u0434 \u0432 \u0440\u0435\u0436\u0438\u043c \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",
    "Export resources": "\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",
    "Flag Resource": "\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Flag resource": "\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Flag this resource as problematic and give your reason": "\u041e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u043a\u0430\u043a \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0439 \u0438 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443.",
    "From page {fromPage} To page {toPage}": "\u0421\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b {fromPage} \u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 {toPage}",
    "Give a meaningful reason for why this resource should be removed": "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0435\u0441\u043a\u0443\u044e \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0434\u0430\u043b\u0438\u0442\u044c.",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "\u0414\u0430\u0439\u0442\u0435 \u0430\u0431\u0437\u0430\u0446 \u043a\u0440\u0430\u0442\u043a\u043e\u0433\u043e \u0438\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430; \u0440\u0435\u0437\u044e\u043c\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u043c, \u0447\u0435\u043c \u0432\u044b \u0434\u0430\u043b\u0438 \u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "\u0414\u0430\u0439\u0442\u0435 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 (1-3 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f) \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430; \u0432 \u0438\u0434\u0435\u0430\u043b\u0435 \u043e\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u0438\u043c, \u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u0435\u0442\u0430\u043b\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044f \u0437\u043d\u0430\u043b\u0438, \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u043b\u0438 \u0438\u043c \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441.",
    "Go back to the main list": "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443",
    "Here is a list of reasons why students think this resource problematic:": "\u0412\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u0447\u0438\u043d, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u044b\u043c:",
    "Hide related resources": "\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Hide the recommendations list": "\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0439",
    "Hovering resource": "\u041d\u0430\u0432\u0438\u0441\u0430\u044e\u0449\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u0447\u043a\u043e\u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 (\u0442. \u0435. \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0441\u0442\u0440\u0430\u043d\u0438\u0446)? \u0411\u0443\u0434\u0443\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0437\u043d\u0430\u0447\u043a\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442 (\u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u2014 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0441\u0442\u0440\u0430\u043d\u0438\u0446) \u0434\u043e (\u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 + \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0441\u0442\u0440\u0430\u043d\u0438\u0446).",
    "How many resources you want to show in each page of the resource list?": "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432?",
    "Import resources": "\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Invalid location URL provided": "\u0423\u043a\u0430\u0437\u0430\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 URL-\u0430\u0434\u0440\u0435\u0441 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
    "Location": "\u041c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",
    "No": "\u041d\u0435\u0442",
    "Only staff can import resources": "\u0422\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Please submit the JSON file obtained with the download resources button": "\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0444\u0430\u0439\u043b JSON, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043d\u043e\u043f\u043a\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432.",
    "Preview image (typically, a screenshot)": "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442)",
    "Preview screenshot:": "\u0421\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430:",
    "Provide a file of resource list in JSON format": "\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0444\u0430\u0439\u043b \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON.",
    "Provide a file of resource screenshot": "\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0444\u0430\u0439\u043b \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Provide a meaningful description so other students know whether this is useful to them": "\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044f \u0437\u043d\u0430\u043b\u0438, \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043b\u0438 \u044d\u0442\u043e \u0434\u043b\u044f \u043d\u0438\u0445.",
    "Provide a meaningful title so other students know whether this is useful to them": "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044f \u0437\u043d\u0430\u043b\u0438, \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043b\u0438 \u043e\u043d\u043e \u0434\u043b\u044f \u043d\u0438\u0445.",
    "Provide a resource description": "\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Provide a resource location in url, required": "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0432 URL (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e).",
    "Provide a resource screenshot": "\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Provide a resource title, required": "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e).",
    "Reason": "\u041f\u0440\u0438\u0447\u0438\u043d\u0430",
    "Reason for why this resource should be endorsed": "\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0434\u043e\u0431\u0440\u0438\u0442\u044c",
    "Reason for why this resource should be flagged": "\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c",
    "Reason for why this resource should be removed": "\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0434\u0430\u043b\u0438\u0442\u044c",
    "Recommend a new resource which may be helpful to other students solving this problem": "\u041f\u043e\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c, \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u043c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443.",
    "Remove Resource": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Remove resource": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "Remove this resource and give the reason why you do that": "\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0435.",
    "Remove this resource and give the reason why you do that.": "\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u0442\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0435.",
    "Resource title": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Resource: ": "\u0420\u0435\u0441\u0443\u0440\u0441: ",
    "Resources (in JSON format):": "\u0420\u0435\u0441\u0443\u0440\u0441\u044b (\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON):",
    "Save change": "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
    "Set the student-view, client side configurations for RecommenderXblock.": "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u043b\u044f \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044f \u0434\u043b\u044f RecommenderXblock.",
    "Show a list of student-recommented related resources": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438.",
    "Show related resources": "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Size of uploaded file exceeds threshold": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043f\u043e\u0440\u043e\u0433",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u0434\u0440\u0443\u0433\u0438\u043c \u0443\u0447\u0430\u0449\u0438\u043c\u0441\u044f \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e.",
    "Suggest resource": "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441",
    "The configuration of pyfs is not properly set": "\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f pyfs \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.",
    "The content you typed has not been submitted yet. Are you sure to go back?": "\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0435\u0449\u0435 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d. \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442\u0435\u0441\u044c?",
    "The reason why it is endorsed is:": "\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044d\u0442\u043e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043e:",
    "The resource you are attempting to provide already exists": "\u0420\u0435\u0441\u0443\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c, \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "\u0420\u0435\u0441\u0443\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c, \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438. \u041f\u0440\u0438\u0447\u0438\u043d\u0430: ",
    "The selected resource does not exist": "\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
    "This is a list of recommended resources. If you\\": "\u042d\u0442\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u0415\u0441\u043b\u0438 \u0432\u044b\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "\u042d\u0442\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435, \u043f\u043e \u043c\u043d\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u043a\u0443\u0440\u0441\u043d\u0438\u043a\u043e\u0432, \u043c\u043e\u0433\u0443\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043d\u0430 edx.org \u0438\u043b\u0438 \u0433\u0434\u0435-\u043b\u0438\u0431\u043e \u0435\u0449\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e. \u0415\u0441\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0440\u0435\u0441\u0443\u0440\u0441\u0430, \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u044d\u0442\u043e. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0448\u043b\u0438 \u0440\u0435\u0441\u0443\u0440\u0441 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c, \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0439\u0442\u0435 \u0437\u0430 \u043d\u0435\u0433\u043e. \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0439\u0442\u0435 \u043f\u0440\u043e\u0442\u0438\u0432. \u0415\u0441\u043b\u0438 \u0432 \u043d\u0435\u043c \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b (\u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b, \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0438 \u0442. \u0434.), \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u044d\u0442\u043e \u0438 \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043d\u0430\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0443.",
    "This resource is endorsed by staff": "\u042d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0434\u043e\u0431\u0440\u0435\u043d \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430\u043c\u0438",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "\u042d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435, \u043f\u043e \u043c\u043d\u0435\u043d\u0438\u044e \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u043a\u0443\u0440\u0441\u043d\u0438\u043a\u043e\u0432, \u043c\u043e\u0433\u0443\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u043c\u0438, \u043d\u043e \u0432 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043d \u043f\u0443\u0441\u0442. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u043d\u0430 edx.org \u0438\u043b\u0438 \u0433\u0434\u0435-\u043b\u0438\u0431\u043e \u0435\u0449\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0438\u0445.",
    "Title": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
    "Tried to access flagged resources without staff permission": "\u041f\u044b\u0442\u0430\u043b\u0441\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0430.",
    "Unendorse resource": "\u041d\u0435\u043e\u0434\u043e\u0431\u0440\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441",
    "Unflag resource": "\u0421\u043d\u044f\u0442\u044c \u043f\u043e\u043c\u0435\u0442\u043a\u0443 \u0441 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 (\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 GIF/PNG/JPG) \u0440\u0435\u0441\u0443\u0440\u0441\u0430; \u0432 \u0438\u0434\u0435\u0430\u043b\u0435 \u044d\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0434\u0430\u0442\u044c \u0443\u0447\u0430\u0449\u0438\u043c\u0441\u044f \u043f\u043e\u043d\u044f\u0442\u044c, \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u043b\u0438 \u0438\u043c \u044d\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b.",
    "Upload resources": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
    "Upload resources in JSON format to the database.": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON \u0432 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445.",
    "Upvote if the resource is helpful": "\u041f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0439\u0442\u0435, \u0435\u0441\u043b\u0438 \u0440\u0435\u0441\u0443\u0440\u0441 \u043f\u043e\u043b\u0435\u0437\u0435\u043d",
    "Votes": "\u0413\u043e\u043b\u043e\u0441\u0430",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0441\u0443\u0440\u0441? \u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442 \u0432\u0441\u0435 \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0438 \u0443\u0434\u0430\u043b\u0438\u0442 \u043d\u0435\u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 (\u0441\u043f\u0430\u043c, \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435, \u043e\u0441\u043a\u043e\u0440\u0431\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u0442. \u0434.). \u0427\u0435\u0442\u043a\u0430\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e.",
    "Yes": "\u0414\u0430",
    "You don't have the permission to remove this resource": "\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u0430.",
    "cancel and go back to resource list": "\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0438 \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0441\u043f\u0438\u0441\u043a\u0443 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",
    "mode": "\u0440\u0435\u0436\u0438\u043c",
    "votes": "\u0433\u043e\u043b\u043e\u0441\u0430"
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
    "DATETIME_FORMAT": "j E Y \u0433. G:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j E Y \u0433.",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "G:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y \u0433."
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
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        