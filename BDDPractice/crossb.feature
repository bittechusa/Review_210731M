Feature:Buy a men product 
  Background:
   Given Open browser
   |chrome|
   |firefox|
    And nevigate to site
  @smoke
  Scenario Outline: Buy a shirt
    When user will click on men menu
    And user will choose <count> shirt
    And user will checkout those product
    And user will submit all necessary information
    And user will submit the order
    Then verify successfull massage for order
    
   Examples: 
      | count |
      | 3 |     
      | 4 | 
    @Regression
    Scenario Outline: Buy a pant
    When user will click on men menu
    And user will choose <count> pant
    And user will checkout those product
    And user will submit all necessary information
    And user will submit the order
    Then verify successfull massage for order

    Examples: 
      | count |
      | 1 |     
      | 2 |    
