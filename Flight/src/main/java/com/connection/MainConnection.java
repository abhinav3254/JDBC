package com.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class MainConnection {
	private static final String url = "jdbc:mysql://localhost:3306/flight";
	private static final String user = "root";
	private static final String password = "3254";
	public static Connection makeConnection() throws Exception {
		Connection connection = DriverManager.getConnection(url,user,password);
		return connection;
	}
}
