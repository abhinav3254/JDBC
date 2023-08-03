package com.example;

import java.sql.Connection;
import java.util.Scanner;

import com.connection.MainConnection;
import com.flight.FlightOperations;
import com.flight.UserAuth;

public class App {
	private static Scanner sc = new Scanner(System.in);
	private static boolean checkedLogin = false;

	public static void main(String[] args) throws Exception {
		System.out.println("Hello World!");
		Connection connection = MainConnection.makeConnection();
		if (connection.isClosed())
			System.out.println("connection closed");
		else
			System.out.println("connection open");

//		bookFlight();
//		UserAuth.userAuthLogIn("123457","1234");
		
		FlightOperations.searchForFlight("dbr","hyd");

		connection.close();
	}

	public static void searchFlight() {
		System.out.print("Enter src:- ");
		String src = sc.nextLine();
		System.out.println();
		System.out.print("Enter destination");
		String destination = sc.nextLine();
		System.out.println();
	}

	private static boolean logIn() {
		System.out.print("Enter UserName :- ");
		String userName = sc.nextLine();
		System.out.println("Enter Password");
		String password = sc.nextLine();
		
		UserAuth.userAuthLogIn(userName,password);
		
		return false;
	}

	public static void bookFlight() {
		System.out.println("Want to Book Flight");

		System.out.println("Log In First");

		if (logIn()) {
			System.out.println("Incorrect");
		} else {

			System.out.print("Enter Flight id:- ");
			long flightId = sc.nextLong();
			// check for seats full or not
			if (isFlightSeatsFull(flightId)) {
				System.out.println("No Seats!!");
				return;
			} else {
				System.out.print("Enter username");
				sc.nextLine();
				String uName = sc.nextLine();

				System.out.print("passesngerName");
				String passesngerName = sc.nextLine();

				System.out.print("password");
				String password = sc.nextLine();

				System.out.print("Enter Age:- ");
				int age = sc.nextInt();

				System.out.print("Enter Src");
				sc.nextLine();
				String src = sc.nextLine();

				System.out.print("Enter destination");
				String destination = sc.nextLine();

				System.out.print("Enter date:- ");
				String date = sc.nextLine();

				PassengerDetails passengerDetails = new PassengerDetails(uName, passesngerName, password, age, flightId,
						src, destination, date);
				System.out.println(passengerDetails);
			}
		}
	}

	private static boolean isFlightSeatsFull(long flighId) {
		// if seats full return true else return false
		return FlightOperations.checkRemainSeats() == 0;
	}
}
