package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:\\JavaCoding\\MedicareUsa\\src\\main\\java\\Features\\Medicare.Feature"}, //path of featurefile, you can add many features or whole package/folder
		glue= {"MedicareStepdefs"}, // path of stepdefinitions
	format = {"pretty", "html: test-output"}, // This is to generate test output
	monochrome = true, // to display console output pretty and readable/proper format
	strict = true, // Strictly it will follow all the steps/will check if any step is not defined in stepdefinition file
	dryRun = false // To check if stepdef file and feature file are the same mapping , first make dryrun = true to see if its working and then switch to dryrun = false to run it
		)     
public class TestRunner {

}
