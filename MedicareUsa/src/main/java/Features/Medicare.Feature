Feature: Self Enrollment test

Scenario Outline: Testing Self Enrollments successfully
 
Given User is on homepage
When the homepage is verified
Then User should click on I'm ready to find a plan
Then User should enter "<zipcode>"
Then User should click on Continue button
Then user will choose Aetna Medicare Eagle Plan H4982-013(HMO) and click enroll
Then User should enter "<firstname>" and "<lastname>" and "<DOB>"  and "<Phonenumber>" and "<Address>" and click male sex 
Then User should click next step for coverage info
Then User should remove question popup
Then User will enter "<Medicarenumber>" and retype Medicarenumber and enter effective dates "<HospitalPartA>" and "<HospitalPartB>"
Then User will enter "<PhysicianName>" and "<PCPnumber>"
Then User will select Yes for already patient and No for other subscribed health coverage/work of spouse/other prescription drug coverage
Then User will click on Review and Submit button
Then User will click on box to agreement and select I am completing my enrollment from my own option
Then User will enter "<fullname>" and re-enter


    
    
Examples:   
| zipcode | firstname | lastname | DOB | Sex | Phonenumber | Address | Medicarenumber | HospitalPartA | HospitalPartB | PhysicianName | PCPnumber | fullname |
| 90210 | Belle | Disney | 05/05/1950 | Male | 555-555-1111 | 1 Disney Drive | 1EG5-TE5-MK72 | 12/01/2020 | 12/01/2020 | Pat Masone | 123 | Belle Disney |


