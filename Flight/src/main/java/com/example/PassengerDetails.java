package com.example;

public class PassengerDetails {
	private String userName;
	private String passesngerName;
	// i guess i will remove it bcz password not mandatory
	private String password;
	private int age;
	private long flightId;
	private String src;
	private String dest;
	private String date;
	
	public PassengerDetails() {}
	
	public PassengerDetails(String userName, String passesngerName, String password, int age, long flightId,
			String src, String dest, String date) {
		super();
		this.userName = userName;
		this.passesngerName = passesngerName;
		this.password = password;
		this.age = age;
		this.flightId = flightId;
		this.src = src;
		this.dest = dest;
		this.date = date;
	}

	public String getUserName() {
		return userName;
	}

	public String getPassesngerName() {
		return passesngerName;
	}

	public String getPassword() {
		return password;
	}

	public int getAge() {
		return age;
	}

	public long getFlightId() {
		return flightId;
	}

	public String getSrc() {
		return src;
	}

	public String getDest() {
		return dest;
	}

	public String getDate() {
		return date;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setPassesngerName(String passesngerName) {
		this.passesngerName = passesngerName;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setFlightId(long flightId) {
		this.flightId = flightId;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public void setDest(String dest) {
		this.dest = dest;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "PassengerDetails [userName=" + userName + ", passesngerName=" + passesngerName + ", password="
				+ password + ", age=" + age + ", flightId=" + flightId + ", src=" + src + ", dest=" + dest + ", date="
				+ date + "]";
	}
}
