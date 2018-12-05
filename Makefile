
all: install

clear:
	@rm -rf build
	@rm -rf node_modules
	@rm -rf examples/basic@react/dist
	@rm -rf examples/basic@react/dll
	@rm -rf examples/basic@react/node_modules
	@rm -rf examples/basic@vue/dist
	@rm -rf examples/basic@vue/dll
	@rm -rf examples/basic@vue/node_modules
	@rm -rf examples/nextjs-express@ssr/.next
	@rm -rf examples/nextjs-express@ssr/node_modules
	@rm -rf examples/nuxtjs-express@ssr/.nuxt
	@rm -rf examples/nuxtjs-express@ssr/build
	@rm -rf examples/nuxtjs-express@ssr/dist
	@rm -rf examples/nuxtjs-express@ssr/node_modules
	@rm -rf examples/rematch@react/dist
	@rm -rf examples/rematch@react/dll
	@rm -rf examples/rematch@react/node_modules

publish:
	@npm set registry https://registry.npmjs.org
	@npm publish

install:
	@npm set registry https://registry.npm.taobao.org
	@npm install
	
update:
	@npm set registry https://registry.npm.taobao.org
	@npm update
