## Hello Candidate!

### Thanks so much for the interest in joining SimpleFi!

This test aims to gauge your ability to work with streamed data (we get a lot of data in the frontend). 

We would like you to use our api endpoints to get the positions of a user, and display a simple graph of the aggregation of the LP data received.

You can find more about the endpoints and responses available here: https://simplefi-finance.gitbook.io/indexer/ 

We have tried to keep this test as contained as possible, here it is!

1. Build a typescript react app avoiding the use of redux (context api is welcome) that aggregates some data and displays a graph as the data is received.
2. Start an event stream between the React app and the api endpoint and use the "connect" endpoint to query the user data.
3. Listen to the "userPosition" event and then look for the LPs history timeline in the positions received (the history timeline goes from beginning of user position to today).
4. Aggregate the balance of the position for each history point (the balance of a user is a composition of the user balance and farms)
5. To find the actual value of the balance you will have to divide the number found in point 4. by 10^x where x is the decimals specified in the outputToken field in the position details.
6. aggregate the TVL (total value locked) of the user in each position in a single history timeline and display in a graph (should update as the data is streamed in)  
- use the price obj contained in each history point to denominate it in eth. 
7. if you have extra time you can query the price of eth in other currencies using one of our endpoints specified in the link above (api/v1/ethereum?from=x&to=y)


Once you are happy with your solution, please raise a PR to this repo and we will look at it.

Thanks and good luck!!! We are very much looking forward to the awesome solution you will find.

#### Notes

If you get stuck or something is not working do not esitate to get in touch with a memeber of the team (Filippo is the best option for this). they will get you unstuck right away. We dont want you to lose time finding where the data is, if you cant find it or the stream is being rejected just get in touch! 

The docs for the api are being updated atm so you might notice some changes.  

You will receive extra data from the stream that you can just ignore.