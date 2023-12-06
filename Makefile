.PHONY: help compile
SHELL=/bin/bash

help: ## Print this message
	@awk 'BEGIN { FS = ":.*##"; print "Usage:  make <target>\n\nTargets:" } \
		/^[-_[:alpha:]]+:.?*##/ { printf "  %-15s%s\n", $$1, $$2 }' $(MAKEFILE_LIST)

compile:  ## Compiles sass to css and minified css
	bundle exec sass _assets/sass/libraries-main.scss dest/css/libraries-main.css
	bundle exec sass --style=compressed _assets/sass/libraries-main.scss dest/css/libraries-main.min.css
