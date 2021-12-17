## Hello Candidate!

### Thanks so much for the interest in joining SimpleFi!

This test aims to gauge your ability to work with streamed data (we get a lot of data in the frontend). 

We would like you to use our api endpoints to get the positions of a user, and display a simple graph of the aggregation of the LPs (liquidity pools) data received.

You can find more about the endpoints and responses available here: https://simplefi-finance.gitbook.io/indexer/. If you need to brush up on liquidity pools, [this is a good resource](https://www.gemini.com/cryptopedia/what-is-a-liquidity-pool-crypto-market-liquidity#section-how-do-crypto-liquidity-pools-work).

You can use these test addresses to interact with the API: 0x0082ecb97de99d907b779625e8b3c45f1c151a60 and 0xed85af164d02b5eb2f10abedee9a7577e90a2ffb.

We have tried to keep this test as contained as possible, and expect it shouldn't take you more than 3 hours. Here it is!

Tasks: 
1. Build a typescript react app avoiding the use of redux (context api is welcome) that aggregates some data and displays a graph as the data is received.
    - the styling of the app is not important
    - the data is received in an eventSource: you should listen to the emitted event "userPosition"
    - the event stream between the React app and the api endpoint uses the "connect" endpoint of the api to query the user data.

2. When a "userPosition" event is received, access the data and look for the LPs history timeline (the history timeline goes from beginning of user position to today).
3. Aggregate the balance of the position for each history point (the balance of a user is a composition of the user balance and farms)
    - the farms key is an array which contains an address and a balance. you should aggregate each element of the array into an overall user balance for that           history point (balance + farms.balance)
    - a new timeline is generated with the overall balance

4. the balance now generated is in BigInt, therefore it needs to be converted to decimals. Each LP has the decimals of the balance defined in:           LP.details.outputToken.decimals. if that element does not exist, you can assume the balance to have 18 decimals. 
    - to calculate the decimals: balance / (10^decimals)
    - you can then multiply the obtained value by the eth price contained in the price obj in the history element
    - if a position does not have the price object in the history, skip it.
5. aggregate the TVL (total value locked) of the user in each position in a single history timeline and display in a graph (should update as the data is streamed in)  

7. if you have extra time you can query the price of eth in other currencies using one of our endpoints specified in the link above (api/v1/ethereum?from=x&to=y)

Objectives:
1. Create a typescript react app accepting an event stream and displaying a graph when a user inputs an EOA.
2. aggregate the balances in farms and balance for each position across its history.
3. display the aggregation of all positions in a graph, updating the graph as the positions stream in.

Once you are happy with your solution, please raise a PR to this repo and we will look at it.

Thanks and good luck!!! We are very much looking forward to the awesome solution you will find.

#### Notes

If you get stuck or something is not working do not hesitate to get in touch with Filippo on our [Discord](https://discord.gg/QybkuvnpKN) or email. He'll get you unstuck right away. We dont want you to lose time finding where the data is, if you cant find it or the stream is being rejected just get in touch! 

The docs for the api are being updated atm so you might notice some changes.  

You will receive extra data from the stream that you can just ignore.
