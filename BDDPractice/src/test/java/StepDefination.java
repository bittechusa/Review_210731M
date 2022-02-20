import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.util.*;

import org.junit.After;
import org.junit.Before;

public class StepDefination {
	
	@Before
	public void start()
	{
		System.out.println("before");
	}
	@After
	public void end()
	{
		System.out.println("after");
	}
//	@Before("@smoke")
//	public void start1()
//	{
//		System.out.println("before");
//	}
//	@After("smoke")
//	public void end1()
//	{
//		System.out.println("after");
//	}
	@Given("^Open browser$")
	public void open_browser(DataTable arg1) throws Throwable {
	   List<List<String>> datas= arg1.raw();
	   String data=datas.get(1).get(0);
	   if(data.equals("firefox"))
	   {
		   System.out.println("open firefox");
	   }
	   else if(data.equals("chrome"))
	   {
		   System.out.println("open chrome");
	   }
	   System.out.println(data);
	}
	@Given("^nevigate to site$")
	public void nevigate_to_site() throws Throwable {
	    
	}

	@When("^user will click on men menu$")
	public void user_will_click_on_men_menu() throws Throwable {
	   
	}

	@When("^user will choose (\\d+) shirt$")
	public void user_will_choose_shirt(int arg1) throws Throwable {
	    System.out.println(arg1);
	}

	@When("^user will checkout those product$")
	public void user_will_checkout_those_product() throws Throwable {
	    
	}

	@When("^user will submit all necessary information$")
	public void user_will_submit_all_necessary_information() throws Throwable {
	    
	}

	@When("^user will submit the order$")
	public void user_will_submit_the_order() throws Throwable {
	    
	}

	@Then("^verify successfull massage for order$")
	public void verify_successfull_massage_for_order() throws Throwable {
	    
	}
	@When("^user will choose (\\d+) pant$")
	public void user_will_choose_pant(int arg1) throws Throwable {
	   System.out.println(arg1+" hi");
	}
}
