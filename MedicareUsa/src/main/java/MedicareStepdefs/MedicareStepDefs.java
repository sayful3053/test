package MedicareStepdefs;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MedicareStepDefs {
	
	WebDriver driver;
	
	
	
	
	@Given("^User is on homepage$")
	public void user_is_on_homepage() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\sisla\\Downloads\\chromedriver85/chromedriver.exe");
	       driver = new ChromeDriver();
	       driver.manage().window().maximize();
	   //  driver.manage().deleteAllCookies();
	       driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	       driver.get("https://medicareusa.com/");
	}

	@When("^the homepage is verified$")
	public void the_homepage_is_verified() throws Throwable {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Medicare Plans - Get Free Quotes Instantly | Medicare USA" ,title);
	}

	@Then("^User should click on I'm ready to find a plan$")
	public void user_should_click_on_I_m_ready_to_find_a_plan() throws Throwable {
	   driver.findElement(By.xpath("//a[contains(text(),\"I'M READY TO FIND A PLAN\")]")).click();
	   
	}


	@Then("^User should enter \"([^\"]*)\"$")
	public void user_should_enter(String zipcode) throws Throwable {
	   driver.findElement(By.xpath("//input[@id='zipcode']")).sendKeys(zipcode);
	 //Thread.sleep(5000);
	}

	@Then("^User should click on Continue button$")
	public void user_should_click_on_Continue_button() throws Throwable {

		driver.findElement(By.xpath("//input[@type='button']//parent::form//input[@type='button']")).submit();
		//Thread.sleep(5000);
	}



	@Then("^user will choose Aetna Medicare Eagle Plan H(\\d+)-(\\d+)\\(HMO\\) and click enroll$")
	public void user_will_choose_Aetna_Medicare_Eagle_Plan_H_HMO_and_click_enroll(int arg1, int arg2) throws Throwable {
	  Thread.sleep(5000);
		driver.findElement(By.xpath("//body/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[10]/div[2]/a[1]")).click();

	}
	@Then("^User should enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"  and \"([^\"]*)\" and \"([^\"]*)\" and click male sex$")
	public void user_should_enter_and_and_and_and_and_click_male_sex(String firstname, String lastname, String DOB, String Phonenumber, String Address) throws Throwable {
		 driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(firstname);
		 driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(lastname);
		 driver.findElement(By.xpath("//input[@id='dob']")).sendKeys(DOB);
		 driver.findElement(By.xpath("//input[@id='genderM']")).click();
		 driver.findElement(By.xpath("//input[@id='phoneNum']")).sendKeys(Phonenumber);
		 driver.findElement(By.xpath("//input[@id='address']")).sendKeys(Address);
		 Thread.sleep(5000);
	}



	@Then("^User should click next step for coverage info$")
	public void user_should_click_next_step_for_coverage_info() throws Throwable {
		 driver.findElement(By.xpath("//body/form[@id='frmEnroll']/section[@id='applicantInfo']/strong[1]/div[3]/div[1]/div[1]/label[1]")).click();
		Thread.sleep(5000);
		
	}
	@Then("^User should remove question popup$")
	public void user_should_select_See_Plans_from_popup() throws Throwable {
	   Thread.sleep(5000);
	   WebDriverWait wait = new WebDriverWait(driver, 50);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//p[contains(text(),'Have Questions?')]")))); 
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath("//p[contains(text(),'Have Questions?')]"))));
		Thread.sleep(5000);
	driver.findElement(By.xpath("//body/div[11]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[4]/div[1]/div[1]/div[2]")).click();
	}

	@Then("^User will enter \"([^\"]*)\" and retype Medicarenumber and enter effective dates \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_will_enter_and_retype_and_enter_effective_dates_and(String Medicarenumber, String HospitalPartA, String HospitalPartB) throws Throwable {
		 driver.findElement(By.xpath("//input[@id='medicareNumber']")).sendKeys(Medicarenumber);
		 driver.findElement(By.xpath("//input[@id='medicareNumber1']")).sendKeys(Medicarenumber);
		 driver.findElement(By.xpath("//input[@id='effDatePartA']")).sendKeys(HospitalPartA);
		 driver.findElement(By.xpath("//input[@id='effDatePartB']")).sendKeys(HospitalPartB);
		 Thread.sleep(5000);
	}

	@Then("^User will enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_will_enter_and(String PhysicianName, String PCPNumber) throws Throwable {
		 driver.findElement(By.xpath("//input[@id='pcpName']")).sendKeys(PhysicianName);
		 driver.findElement(By.xpath("//input[@id='pcpId']")).sendKeys(PCPNumber);
		 Thread.sleep(5000);
		 
		
	}
	

	@Then("^User will select Yes for already patient and No for other subscribed health coverage/work of spouse/other prescription drug coverage$")
	public void user_will_select_Yes_for_already_patient_and_No_for_other_subscribed_health_coverage_work_of_spouse_other_prescription_drug_coverage() throws Throwable {
	    Thread.sleep(5000);
	    driver.findElement(By.xpath("//input[@id='pcpPatientFlagY']")).click();
	    driver.findElement(By.xpath("//input[@id='otherCoverageN']")).click();
	    driver.findElement(By.xpath("//input[@id='workFlagN']")).click();
	    driver.findElement(By.xpath("//input[@id='otherRxCoverageFlagN']")).click();
	}

	@Then("^User will click on Review and Submit button$")
	public void user_will_click_on_Review_and_Submit_button() throws Throwable {
		driver.findElement(By.xpath("//body/form[@id='frmEnroll']/strong[1]/section[1]/div[5]/div[1]/div[1]/label[2]")).click();
		
	}

	@Then("^User will click on box to agreement and select I am completing my enrollment from my own option$")
	public void user_will_click_on_box_to_agreement_and_select_I_am_completing_my_enrollment_from_my_own_option() throws Throwable {
		driver.findElement(By.xpath("//input[@id='formCompleteY']")).click();
		
	}
	@Then("^User will enter \"([^\"]*)\" and re-enter$")
	public void user_will_enter(String fullname) throws Throwable {
	   driver.findElement(By.xpath("//input[@id='appSign']")).sendKeys(fullname);
	   driver.findElement(By.xpath("//input[@id='appSign1']")).sendKeys(fullname);
	   
	}


}
