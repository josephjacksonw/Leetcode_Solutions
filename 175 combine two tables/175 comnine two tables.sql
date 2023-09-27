/* Write your T-SQL query statement below */
SELECT p.firstName, p.lastName, a.city, a.state
From Person p Left JOIN Address a
ON p.personID = a.personId