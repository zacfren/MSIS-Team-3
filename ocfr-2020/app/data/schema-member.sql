CREATE DATABASE ocfr_team3;
USE ocfr_team3;
CREATE TABLE person
	(empID int auto_increment not null,
	fname varchar(50) not null,
	lname varchar(50) not null,
	address varchar(200) not null,
	mobilePhone varchar(15),
	workPhone varchar(15),
	email varchar(50),
	dob DATE,
	startDate DATE,
	gender varchar(15),
	position varchar(50),
  radioNum varchar(10),
	stationNum int,
	active varchar(15),
	certifications varchar(250),
	PRIMARY KEY (empID)
)
ENGINE=INNODB;

CREATE TABLE certification
	(certificationID int auto_increment not null,
	agency varchar(200),
  certificationName varchar(200),
	expDate DATE,
	PRIMARY KEY (certificationID)
)
ENGINE=INNODB;



CREATE TABLE reports
	(reportsID int auto_increment not null,
    certificationID int not null,
    empID int not null,
	fname varchar(50) not null,
    lname varchar(50) not null,
    expDate DATE,
    certificationName varchar(200) not null,
    PRIMARY KEY (reportsID),
	FOREIGN KEY (empID) references person(empID),
	FOREIGN KEY (certificationID) references certification(certificationID)
)
ENGINE=INNODB;

SELECT * FROM person;
SELECT * FROM certification;
SELECT * FROM reports;

DROP TABLE person;
DROP TABLE certification;
DROP TABLE reports;
