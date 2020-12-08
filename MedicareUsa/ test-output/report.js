$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/JavaCoding/MedicareUsa/src/main/java/Features/Medicare.Feature");
formatter.feature({
  "line": 1,
  "name": "Self Enrollment test",
  "description": "",
  "id": "self-enrollment-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Testing Self Enrollments successfully",
  "description": "",
  "id": "self-enrollment-test;testing-self-enrollments-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the homepage is verified",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should click on I\u0027m ready to find a plan",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User should enter \"\u003czipcode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should click on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will choose Aetna Medicare Eagle Plan H4982-013(HMO) and click enroll",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cDOB\u003e\"  and \"\u003cPhonenumber\u003e\" and \"\u003cAddress\u003e\" and click male sex",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click next step for coverage info",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should remove question popup",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User will enter \"\u003cMedicarenumber\u003e\" and retype Medicarenumber and enter effective dates \"\u003cHospitalPartA\u003e\" and \"\u003cHospitalPartB\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User will enter \"\u003cPhysicianName\u003e\" and \"\u003cPCPnumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User will select Yes for already patient and No for other subscribed health coverage/work of spouse/other prescription drug coverage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User will click on Review and Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User will click on box to agreement and select I am completing my enrollment from my own option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User will enter \"\u003cfullname\u003e\" and re-enter",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "self-enrollment-test;testing-self-enrollments-successfully;",
  "rows": [
    {
      "cells": [
        "zipcode",
        "firstname",
        "lastname",
        "DOB",
        "Sex",
        "Phonenumber",
        "Address",
        "Medicarenumber",
        "HospitalPartA",
        "HospitalPartB",
        "PhysicianName",
        "PCPnumber",
        "fullname"
      ],
      "line": 25,
      "id": "self-enrollment-test;testing-self-enrollments-successfully;;1"
    },
    {
      "cells": [
        "90210",
        "Belle",
        "Disney",
        "05/05/1950",
        "Male",
        "555-555-1111",
        "1 Disney Drive",
        "1EG5-TE5-MK72",
        "12/01/2020",
        "12/01/2020",
        "Pat Masone",
        "123",
        "Belle Disney"
      ],
      "line": 26,
      "id": "self-enrollment-test;testing-self-enrollments-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Testing Self Enrollments successfully",
  "description": "",
  "id": "self-enrollment-test;testing-self-enrollments-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the homepage is verified",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should click on I\u0027m ready to find a plan",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User should enter \"90210\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should click on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will choose Aetna Medicare Eagle Plan H4982-013(HMO) and click enroll",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should enter \"Belle\" and \"Disney\" and \"05/05/1950\"  and \"555-555-1111\" and \"1 Disney Drive\" and click male sex",
  "matchedColumns": [
    1,
    2,
    3,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should click next step for coverage info",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should remove question popup",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User will enter \"1EG5-TE5-MK72\" and retype Medicarenumber and enter effective dates \"12/01/2020\" and \"12/01/2020\"",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User will enter \"Pat Masone\" and \"123\"",
  "matchedColumns": [
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User will select Yes for already patient and No for other subscribed health coverage/work of spouse/other prescription drug coverage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User will click on Review and Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User will click on box to agreement and select I am completing my enrollment from my own option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User will enter \"Belle Disney\" and re-enter",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MedicareStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 17679425900,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.the_homepage_is_verified()"
});
formatter.result({
  "duration": 10412200,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_should_click_on_I_m_ready_to_find_a_plan()"
});
formatter.result({
  "duration": 515703600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90210",
      "offset": 19
    }
  ],
  "location": "MedicareStepDefs.user_should_enter(String)"
});
formatter.result({
  "duration": 390676400,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_should_click_on_Continue_button()"
});
formatter.result({
  "duration": 38824400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4982",
      "offset": 44
    },
    {
      "val": "013",
      "offset": 49
    }
  ],
  "location": "MedicareStepDefs.user_will_choose_Aetna_Medicare_Eagle_Plan_H_HMO_and_click_enroll(int,int)"
});
formatter.result({
  "duration": 19491624500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Belle",
      "offset": 19
    },
    {
      "val": "Disney",
      "offset": 31
    },
    {
      "val": "05/05/1950",
      "offset": 44
    },
    {
      "val": "555-555-1111",
      "offset": 62
    },
    {
      "val": "1 Disney Drive",
      "offset": 81
    }
  ],
  "location": "MedicareStepDefs.user_should_enter_and_and_and_and_and_click_male_sex(String,String,String,String,String)"
});
formatter.result({
  "duration": 6009325400,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_should_click_next_step_for_coverage_info()"
});
formatter.result({
  "duration": 5706429900,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_should_select_See_Plans_from_popup()"
});
formatter.result({
  "duration": 16560554800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1EG5-TE5-MK72",
      "offset": 17
    },
    {
      "val": "12/01/2020",
      "offset": 85
    },
    {
      "val": "12/01/2020",
      "offset": 102
    }
  ],
  "location": "MedicareStepDefs.user_will_enter_and_retype_and_enter_effective_dates_and(String,String,String)"
});
formatter.result({
  "duration": 5557738800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pat Masone",
      "offset": 17
    },
    {
      "val": "123",
      "offset": 34
    }
  ],
  "location": "MedicareStepDefs.user_will_enter_and(String,String)"
});
formatter.result({
  "duration": 5234951400,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_will_select_Yes_for_already_patient_and_No_for_other_subscribed_health_coverage_work_of_spouse_other_prescription_drug_coverage()"
});
formatter.result({
  "duration": 5381658400,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_will_click_on_Review_and_Submit_button()"
});
formatter.result({
  "duration": 154432500,
  "status": "passed"
});
formatter.match({
  "location": "MedicareStepDefs.user_will_click_on_box_to_agreement_and_select_I_am_completing_my_enrollment_from_my_own_option()"
});
formatter.result({
  "duration": 102212800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Belle Disney",
      "offset": 17
    }
  ],
  "location": "MedicareStepDefs.user_will_enter(String)"
});
formatter.result({
  "duration": 322979400,
  "status": "passed"
});
});