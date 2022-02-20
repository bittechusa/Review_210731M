import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"/Users/bittechconsulting/eclipse-workspace/BDDPractice/crossb.feature"},tags= {"@smoke"},format={"json:target/Destination/cucumber.json","pretty", "html:target/Destination1"})
public class Runner {

}
