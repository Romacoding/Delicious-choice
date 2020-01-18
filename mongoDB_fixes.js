	brew update 
	brew tap mongodb/brew 
	brew install mongodb-community@4.2

	sudo mkdir -p /data/db
	
	mongoose.connect(process.env.DATABASE,
	  { useNewUrlParser: true,
	    useUnifiedTopology: true}
	    );
	
