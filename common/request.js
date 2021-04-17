module.exports={
	function(table,num){
		wx.cloud.init({
				env:"web2010dean-6gzr9t1a190f533d"
			});
		const db = wx.cloud.database();
		return db.collection(table).where({page:num}).get().then(res=>res.data)
	}
	
}
