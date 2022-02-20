$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/bittechconsulting/eclipse-workspace/BDDPractice/crossb.feature");
formatter.feature({
  "line": 1,
  "name": "Buy a men product",
  "description": "",
  "id": "buy-a-men-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Buy a shirt",
  "description": "",
  "id": "buy-a-men-product;buy-a-shirt",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user will click on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user will choose \u003ccount\u003e shirt",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user will checkout those product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user will submit all necessary information",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user will submit the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify successfull massage for order",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "buy-a-men-product;buy-a-shirt;",
  "rows": [
    {
      "cells": [
        "count"
      ],
      "line": 17,
      "id": "buy-a-men-product;buy-a-shirt;;1"
    },
    {
      "cells": [
        "3"
      ],
      "line": 18,
      "id": "buy-a-men-product;buy-a-shirt;;2"
    },
    {
      "cells": [
        "4"
      ],
      "line": 19,
      "id": "buy-a-men-product;buy-a-shirt;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "nevigate to site",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.open_browser()"
});
formatter.result({
  "duration": 245350225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.nevigate_to_site()"
});
formatter.result({
  "duration": 22919,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Buy a shirt",
  "description": "",
  "id": "buy-a-men-product;buy-a-shirt;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user will click on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user will choose 3 shirt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user will checkout those product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user will submit all necessary information",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user will submit the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify successfull massage for order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_will_click_on_men_menu()"
});
formatter.result({
  "duration": 24328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_will_choose_shirt(int)"
});
formatter.result({
  "duration": 1536619,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_checkout_those_product()"
});
formatter.result({
  "duration": 20768,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_submit_all_necessary_information()"
});
formatter.result({
  "duration": 19555,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_submit_the_order()"
});
formatter.result({
  "duration": 21727,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_successfull_massage_for_order()"
});
formatter.result({
  "duration": 16504,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "nevigate to site",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.open_browser()"
});
formatter.result({
  "duration": 33902,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.nevigate_to_site()"
});
formatter.result({
  "duration": 14409,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Buy a shirt",
  "description": "",
  "id": "buy-a-men-product;buy-a-shirt;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user will click on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user will choose 4 shirt",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user will checkout those product",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user will submit all necessary information",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user will submit the order",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "verify successfull massage for order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_will_click_on_men_menu()"
});
formatter.result({
  "duration": 19534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "StepDefination.user_will_choose_shirt(int)"
});
formatter.result({
  "duration": 114613,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_checkout_those_product()"
});
formatter.result({
  "duration": 18492,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_submit_all_necessary_information()"
});
formatter.result({
  "duration": 16789,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_will_submit_the_order()"
});
formatter.result({
  "duration": 17120,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_successfull_massage_for_order()"
});
formatter.result({
  "duration": 16402,
  "status": "passed"
});
});