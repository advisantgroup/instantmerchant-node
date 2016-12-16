# Instant Merchant API for Node.JS.
=========

A Node.JS reference implementation of the Instant Merchant API. See the full docs at <https://advisantgroup.github.io/InstantMerchant/>

* Official
* REST API
* JSON Data Format
* Promise Implementation

## Installation
```bash
  npm install instantmerchant-node
```

## Configuration
```js
var Imn = require('instantmerchant-node'),
  	instant = new Imn({
		key : "your IM API key",
		secret : "your secret key"
	});
```

## API Overview

Every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
	var params = {
		name: 'Name',
	    username: 'username',
	    email: 'email',
	    address: 'address',
	    city: 'city',
	    zip: zip code,
	    state: 'state',
	    country: 'US' //us, usa, US, USA
	};
    instant.customer.create(params).then(function(res){
    	//Success
    },function(err){
    	//Error Handling
    }).catch(function(err){
    	//Error Handling
    });
```
### Available resources & methods

*Where you see `params` it is a plain JavaScript object, e.g. `{ name: 'foo' }`*

 * invoice
  * [`create(params)`](https://advisantgroup.github.io/InstantMerchant/#invoice)
  * [`send(params)`](https://advisantgroup.github.io/InstantMerchant/#send-invoice)
  * [`charge(params)`](https://advisantgroup.github.io/InstantMerchant/#charge-invoice)
  * [`capture(params)`](https://advisantgroup.github.io/InstantMerchant/#capture-invoice)
  * [`refund(params)`](https://advisantgroup.github.io/InstantMerchant/#refund)
 * direct
  * [`charge(params)`](https://advisantgroup.github.io/InstantMerchant/#direct-payment)
  * [`capture(params)`](https://advisantgroup.github.io/InstantMerchant/#capture-charge)
  * [`refund(params)`](https://advisantgroup.github.io/InstantMerchant/#refund11)
 * customer
  * [`create(params)`](https://advisantgroup.github.io/InstantMerchant/#create-customer)

## Release History
```
* 1.0.0 Initial release
```