const request = require('request');

module.exports = function (parameters) {
	this.settings = {
		baseURL: "https://dev1.instantmerchant.io",
		version: "v1",
		key: parameters.key || null,
		secret: parameters.secret || null,
		timeout: 15000
	};
	this.post = function(sub_path, params, cb) {
	    var headers, path, url;
	    if (!this.settings.key || !this.settings.secret) {
	      return cb(new Error("missing api key or secret"))
	    }
	    path = '/api/' + this.settings.version + '/' + sub_path;
	    url = this.settings.baseURL + path;
	    headers = {
	      'X-Api-Key': this.settings.key,
	      'X-Api-Secret': this.settings.secret
	    };
	    return request({
	    	rejectUnauthorized: false,
		    url: url,
		    method: "POST",
		    headers: headers,
		    formData: params,
		    timeout: this.settings.timeout
	    }, function(err, response, body) {
		    var result = {};
		    if (err || (response.statusCode !== 200 && response.statusCode !== 400)) {
		        return cb(err != null ? err : response.statusCode);
		    }
		    try{
		    	result = JSON.parse(body);
		    }catch(err){
		    	return cb(body);
		    }
		    if(result && result.status==true){
		    	return cb(null, result);
		    }else{
		    	return cb(result.message);
		    }
	    });
	};
	var self = this;
    var categories = ['invoice','direct','customer','subscription','card'];
    categories.forEach(function (category) {
	    self[category] = require(__dirname + '/resources/' + category + '.js')(self);
	});
};