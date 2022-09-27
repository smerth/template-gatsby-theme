# Testing and Coverage

Prior to each commit, ghooks runs the validate script

```json
"ghooks": {
    "pre-commit": "npm run validate"
},
```

The validate script

```json
"validate": "npm run cover && npm run check-coverage",
```

runs the mocha tests and checks for coverage as defined in the coverage script

```json
"check-coverage": "nyc check-coverage --statements 100 --branches 100 --functions 100 --lines 100",
```

when it becomes impractical to have 100% coverage you can change these limits to determine when the coverage check passes and hence when the commit will be allowed.

One thing to note about the `cover` script

```json
"cover": "nyc npm t",
```

written as it stands, the report is formatted and sent to the terminal.

However if you change the reporter like this:

```json
"cover": "nyc --reporter=lcov npm t",
```

The output will be piped to an auto-generated html report site located in a folder called coverage...
