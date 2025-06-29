-- SQL placeholder for tables
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  brand VARCHAR(50),
  size INT,
  price DECIMAL(10,2),
  color VARCHAR(30),
  img VARCHAR(255)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  name VARCHAR(100),
  phone VARCHAR(50),
  email VARCHAR(100),
  address VARCHAR(255),
  payment VARCHAR(20),
  details TEXT,
  total DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);