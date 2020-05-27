@REQ_XCRT-1033
Feature: Adam Xray Test 1

  @TEST_XCRT-1053
  Scenario: Adam Xray Scenario 1
    Given today is "Sunday"
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @TEST_XCRT-1057
  Scenario: Adam Xray Scenario 2
    Given today is "Sunday"
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  @TEST_XCRT-1063
  Scenario: Adam Xray Scenario 3
    Given today is "Friday"
    When I ask whether it's Friday yet
    Then I should be told "Yes"

  @TEST_XCRT-1064
  Scenario: Adam Xray Scenario 4
    Given today is "Monday"
    When I ask whether it's Friday yet
    Then I should be told "Nope"