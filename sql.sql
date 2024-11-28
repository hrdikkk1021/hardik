-- Create the database
CREATE DATABASE IF NOT EXISTS daily_log;

-- Use the database
USE daily_log;

-- Create the logs table
CREATE TABLE IF NOT EXISTS logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    wakeup_time TIME NOT NULL,
    physical_activity VARCHAR(255),
    food_time VARCHAR(255),
    lunch TEXT,
    breakfast TEXT,
    snacks TEXT,
    dinner TEXT,
    akant_dhyan ENUM('YES', 'NO'),
    samuhik_dhyan ENUM('YES', 'NO'),
    unhealthy_food TEXT,
    healthy_food TEXT,
    sleep_time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
