module.exports = function (client) {
	return {
		create : function(req) {
			return new Promise((resolve, reject)=> {
				var path = "customer";
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