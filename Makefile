
build: components
	@component build --dev

components: component.json
	@component install --dev

dist: component.json
	component install
	component build

test: build
	@mocha-phantomjs test/test.html

clean:
	rm -fr build components

.PHONY: clean test
