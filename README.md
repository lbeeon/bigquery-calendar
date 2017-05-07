### BigQuery Calendar

A srcipt for create dynamic datetime dimension.(left join purpose) 

#### How to use

```
	SELECT Year, Month, Day, Hour FROM (Calendar(SELECT "1494114399" AS start, "1494144399" AS end))
```
