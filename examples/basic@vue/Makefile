
all: install

clear:
	@rm -rf dist
	@rm -rf dll
	@rm -rf node_modules
	@rm -rf package-lock.json

install:
	@npm set registry https://registry.npm.taobao.org
	@npm install
	
update:
	@npm set registry https://registry.npm.taobao.org
	@npm update
