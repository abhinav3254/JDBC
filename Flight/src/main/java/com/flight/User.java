package com.flight;

public class User {
	
		private String userId;
		private String name;
		private String password;
		private String addresss;
		private String phone;
		private String email;
		private String gender;
		private int age;
		
		public User() {}
		public User(String userId, String name, String password, String addresss, String phone, String email,
				String gender, int age) {
			super();
			this.userId = userId;
			this.name = name;
			this.password = password;
			this.addresss = addresss;
			this.phone = phone;
			this.email = email;
			this.gender = gender;
			this.age = age;
		}



		public String getUserId() {
			return userId;
		}
		public String getName() {
			return name;
		}
		public String getPassword() {
			return password;
		}
		public String getAddresss() {
			return addresss;
		}
		public String getPhone() {
			return phone;
		}
		public String getEmail() {
			return email;
		}
		public String getGender() {
			return gender;
		}
		public int getAge() {
			return age;
		}
		public void setUserId(String userId) {
			this.userId = userId;
		}
		public void setName(String name) {
			this.name = name;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public void setAddresss(String addresss) {
			this.addresss = addresss;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public void setAge(int age) {
			this.age = age;
		}
	
}
