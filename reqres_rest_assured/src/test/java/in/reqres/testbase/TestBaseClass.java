package in.reqres.testbase;

import io.restassured.RestAssured;
import org.junit.BeforeClass;

public class TestBaseClass {
    @BeforeClass
    public static void init() {
        RestAssured.baseURI = "https://reqres.in/";
        //  RestAssured.port= 8085;
        //RestAssured.basePath="/student";
    }
}
