
build: components template
	@component build --dev

template:
	@component convert templates/template.html

components: component.json template
	@component install --dev

dist: component.json template
	component install
	component build

test: build
	@mocha-phantomjs test/test.html

clean:
	rm -fr build components templates/template.js

.PHONY: clean test
