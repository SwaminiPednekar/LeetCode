# SELECT salary  as SecondHighestSalary
# FROM employee 
# ORDER BY salary desc limit 1,1

SELECT MAX(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee)