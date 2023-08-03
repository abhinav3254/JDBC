package com.flight;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.connection.MainConnection;

public class UserAuth {
	public static void userAuthLogIn(String userId,String password) {
		try {
		String query = "SELECT * FROM USER";
		Connection connection = MainConnection.makeConnection();
		
		if (connection.isClosed()) {
			System.out.println("Something went wrong in class UserAuth");
		} else {
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(query);
			List<User> usersList = new ArrayList<User>();
			User user = null; 
			while (resultSet.next()) {
				usersList.add(new User(resultSet.getString(1),resultSet.getString(2),resultSet.getString(3),
						resultSet.getString(4),resultSet.getString(5),resultSet.getString(6),
						resultSet.getString(7),resultSet.getInt(8)
						));
			}
			
			for (int i = 0;i<usersList.size();i++) {
				if ((usersList.get(i).getUserId()).equals(userId)) {
					if ((usersList.get(i).getPassword()).equals(password)) {
						System.out.println("----Logged In!!----");
					} else {
						System.out.println("----Wrong Password!!----");
					}
				} else {
					System.out.println("----Wrong UserID----");
				}
				
			}
			
		}
		}catch(Exception e) {
			System.out.println("Exception in UserAuth class"+e);
		}
	}
}