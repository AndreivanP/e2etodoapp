Feature: US#2 - Create SubTask - As a ToDo App user I should be able to create a task So I can manage my tasks

@regression
Scenario: Failing due the BUG 6550 - Add a subtask by add button using the default date
    Given I'm on the create subtask screen  
    And I type a subtask description with 'Subtask to do using default date'    
    When I hit the button add subtask
    Then it should save the subtask 'Subtask to do using default date' and the button title must be '(1) Manage Subtasks'

@regression
Scenario Outline: Failing due the BUG 6550 - Add a subtask by add button with a valid due date format
    Given I'm on the create subtask screen  
    And I type a subtask description with '<subtaskDesc>'
    And I type a valid due date
    When I hit the button add subtask
    Then it should save the subtask '<subtaskDescCreated>' and the button title must be '<btnTitle>'

    Examples:
    |subtaskDesc            |subtaskDescCreated     |btnTitle            |
    |My first subtask to do |My first subtask to do |(1) Manage Subtasks |
    |My f                   |My f                   |(1) Manage Subtasks |

@regression
Scenario Outline: Failing due the BUG 6550 - Add a subtask by add button with a invalid due date format
    Given I'm on the create subtask screen  
    And I type a subtask description with '<subtaskDesc>'
    And I type a invalid due date
    When I hit the button add subtask
    Then it should not save the subtask and the button title must be '<btnTitle>'

    Examples:
    |subtaskDesc            |btnTitle            |
    |My first subtask to do |(0) Manage Subtasks |
    |My f                   |(0) Manage Subtasks |

@regression
Scenario: Add an empty subtask by add button with a valid due date format
    Given I'm on the create subtask screen  
    And I type a subtask description with ' '
    And I type a valid due date
    When I hit the button add subtask
    Then it should not save the subtask and the button title must be '(0) Manage Subtasks'

@regression
Scenario: Failing due the BUG 6551 - Edit a subtask description
    Given I'm on the create subtask screen with an added subtask  
    And I edit a subtask description to 'xyz'    
    When I save the edition
    Then the subtask description should be 'xyz'




  