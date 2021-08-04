# Collatz conjecture sequence computer

## Usage:

1. Start the server:

```bash
node src/server.js
```

2. Request a Collatz sequence for a given seed value:

```bash
curl -i http://localhost:3000/collatz/33
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 78
ETag: W/"4e-BsYOLC1KSYnbG/p+kyo92PvVYWs"
Date: Wed, 04 Aug 2021 22:27:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[33,100,50,25,76,38,19,58,29,88,44,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1]%
```
