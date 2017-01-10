module.exports = function (client) {
	return {
		add : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "card";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		},
		get : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "card/get";
				client.post(path, req,function(err, res){
					if(err){
						return reject(err);
					}else{
						resolve(res);
					}
				})
			})
		}
	}
};