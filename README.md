### BigQuery Calendar
A srcipt for create dynamic datetime dimension.(left join purpose) 

#### How to use
1. Import calendar.js or copy into UDF editor.
2. Execute command below.
```
	SELECT Year, Month, Day, Hour FROM (Calendar(SELECT "1494114399" AS start, "1494144399" AS end))
```
