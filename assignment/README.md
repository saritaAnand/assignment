# Coding Challenge
## Front End Assignment

A coding challenge based on ReactJS. 

![table](https://user-images.githubusercontent.com/41993796/83009076-cd845700-a033-11ea-8bb5-518902bb6c89.png)

![popupCalendar](https://user-images.githubusercontent.com/41993796/83009133-e12fbd80-a033-11ea-83b8-0b749d9768eb.png)

![membersactivity](https://user-images.githubusercontent.com/41993796/83009160-eab92580-a033-11ea-8864-fd7fe34bf1f8.png)

## Dependencies:
- React Datepicker https://www.npmjs.com/package/react-datepicker
- JSON Server  https://github.com/typicode/json-server

## Installations:
1. Install NodeJS using [Node.js](https://nodejs.org/en/). It is mandatory to have Node 8.16.0 or later version in local development machine. 
2. Install React and all inbuilt dependencies using ``` npx create-react-app project-name ```
3. Install JSON Server using npm install ``` npm install -g json-server ```
4. Instal React Datepicker using ``` npm install react-datepicker --save ```

## Executions
1. Type ```npm start``` to run the app locally.
2. From another terminal run ```json-server --watch db.json --port 3004 ```

``` Note: JSON format must be the same.```

```
Example:

"activity_periods":
[{
		"start_time": "Feb 1 2020  1:33PM",
		"end_time": "Feb 1 2020 1:54PM" 
}},
 There is double space between date and time in "start_time"
 There is single space between date and time in "end_time"
 ```
