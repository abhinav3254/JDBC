package com.flight;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.connection.MainConnection;

public class FlightOperations {
	public static int checkRemainSeats() {
		return 1;
	}
	
	public void bookFlight() {
		
	}
	
	public static void searchForFlight(String src,String destination) {
		try {
			src = src.toUpperCase();
			destination = destination.toUpperCase();
			String query = "select * from flight where src = ? and dest = ?;";
			Connection connection = MainConnection.makeConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(query);
			preparedStatement.setString(1, src);
			preparedStatement.setString(2, destination);
			
			ResultSet resultSet = preparedStatement.executeQuery();
			
			while (resultSet.next()) {
				System.out.println(resultSet.getString(1)+"  "+resultSet.getInt(2));
			}
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Error Inside FlightOperations class and inside searchFor Flight"+e);
		}
	}
}
