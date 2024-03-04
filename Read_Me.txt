To those who may run this in the future,

    In order to get things the way I wanted them, I made a few changes.

    First: I used coinmarketcap as my API because coinlayer wanted my banking info for a free API key, Not cool.

    Second: I set my repo to private because I don't want my key to be used for anything I dont personally endorse.

    Third: This site runs on an internal proxy server using nodejs, express, and http-proxy-middleware. This is because 
        I was running into CORS errors in the inspection console and wanted to learn something new while I fixed it.

        Steps needed to get it going:

            1. deactivate conda (they don't play well with eachother sometimes and I don't have the time to iron out 
            why.)

            2. $ pip install -r requirements.txt (as per usual)

            3. $ npm install express

            4. $ npm install http-proxy-middleware

            5. $ node proxy.js

            6. navigate to proxy.js and enter your API key on line 13

            7. launch live server normally

    It is also worth noting that in /js/main.js on line 22 there is an ability to set refresh rate to every 5 
seconds. Feel free to try it if you'd like but please comment it back out when you are satisfied. I only have so many
times I can call the server for free.

     Final note to instructors. Coinmarketcap also has a sandbox API that can be used for dev purposes. I didn't use it
because I wanted the real info to show in real time..... Ok, it was because I didn't think of it and didn't want to 
change my JS.

    Have fun and I hope you like it!

