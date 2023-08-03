package com.flight;

import java.sql.Time;

public class Flight {
	private int fId;
	private int fSeats;
	private String fCompanyName;
	private Time fTime;
	private String src;
	private String dest;
	public Flight(int fId, int fSeats, String fCompanyName, Time fTime, String src, String dest) {
		super();
		this.fId = fId;
		this.fSeats = fSeats;
		this.fCompanyName = fCompanyName;
		this.fTime = fTime;
		this.src = src;
		this.dest = dest;
	}
	public Flight() {
		super();
	}
	public int getfId() {
		return fId;
	}
	public int getfSeats() {
		return fSeats;
	}
	public String getfCompanyName() {
		return fCompanyName;
	}
	public Time getfTime() {
		return fTime;
	}
	public String getSrc() {
		return src;
	}
	public String getDest() {
		return dest;
	}
	public void setfId(int fId) {
		this.fId = fId;
	}
	public void setfSeats(int fSeats) {
		this.fSeats = fSeats;
	}
	public void setfCompanyName(String fCompanyName) {
		this.fCompanyName = fCompanyName;
	}
	public void setfTime(Time fTime) {
		this.fTime = fTime;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public void setDest(String dest) {
		this.dest = dest;
	}
	@Override
	public String toString() {
		return "Flight [fId=" + fId + ", fSeats=" + fSeats + ", fCompanyName=" + fCompanyName + ", fTime=" + fTime
				+ ", src=" + src + ", dest=" + dest + "]";
	}
	
	
}
