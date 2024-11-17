class staffList{
	staffList = [];
	add(name, age){
		if(Number(age) > 20){
			if(this.staffList.find(i=>i.name ===name) != 0){
				this.staffList.push({name});
			}
		}
		else{
			throw new Error("Staff member age must be greater than 20");
		}
	}
	remove(name){
		const foundName = this.staffList.find(i => i.name == name);
		if(foundName){
			this.staffList = this.staffList.filter(i => i.name !== name);
			return true;
		}
		return false;
	}
	addSize(){
		return this.staffList.length;
	}
}


add(name, age){
	if(Number(age) > 20){
		if(this.staffList.find(i => i.name === name) != 0){
			this.staffList.push({name});
		}
	}else{
		throw new Error("Staff member age must be greater than 20");
	}
}

remove(name){
	foundName = this.staffList.filter(i => i.name == name);
	if(foundName){
		this.staffList = this.staffList.filter(i => i.name !== name);
		return true;
	}
	return false;
}

getSize(){
	return this.staffList.length;
}