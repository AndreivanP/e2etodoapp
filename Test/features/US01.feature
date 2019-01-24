Feature: US#1 - Create Task - As a ToDo App user I should be able to create a task So I can manage my tasks

@regression
Scenario Outline: Add a task with 3 or more characteres by add button
    Given I'm on the my tasks list
    And I type the task description '<taskDesc>'
    When I hit the button add
    Then it should properly save the task '<taskDescCreated>'

    Examples:
    |taskDesc            |taskDescCreated     |
    |My first task to do |My first task to do |
    |My f                |My f                |

@pending
#Waiting for the fix of the bug 6521. Then need to implement the assertion
Scenario Outline: Add a task with less than 3 characteres by add button
    Given I'm on the my tasks list
    And I type the task description '<taskDesc>'
    When I hit the button add
    Then it should properly shows a message not allowing to save the task

    Examples:
    |taskDesc |
    |a        |
    |ab       |
    |         |

@regression
Scenario: Add a task with 250 characteres by enter key
    Given I'm on the my tasks list
    And I type a description with 250 characteres
    When I press the enter key
    Then it should properly save the task with 250 characteres

@pending
#Waiting for the fix of the bug 6522. Then need to implement the assertion
Scenario: Add a task with 251 characteres by enter key
    Given I'm on the my tasks list
    And I type a description with 251 characteres
    When I press the enter key
    Then it should properly shows a message not allowing to save the task

@regression
Scenario: Remove a task
    Given I'm on the my tasks list
    And I type the task description 'My task to be removed'
    When I hit the button add
    And remove the created task 
    Then the task 'My task to be removed' should properly be removed
  